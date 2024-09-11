import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

interface VideoSegment {
  startTime: string;
  duration: string;
  outputName: string;
}

const splitVideo = (inputVideoPath: string) => {
  const fileSegments = fs.readFileSync(
    path.join(__dirname, "../input", "segments.json")
  );
  const segments: VideoSegment[] = JSON.parse(fileSegments.toString());

  segments.forEach((segment) => {
    const outputFilePath = path.join(
      __dirname,
      "../output",
      segment.outputName
    );

    ffmpeg(inputVideoPath)
      .setStartTime(segment.startTime)
      .duration(segment.duration)
      .outputOptions("-c:a copy") // copy audio codec to output
      .output(outputFilePath)
      .on("progress", (progress) => {
        const percent = (progress.percent ?? 0) * 100;

        console.log(
          `Processing ${segment.outputName}: ${percent?.toFixed(2)}%`
        );
      })
      .on("end", () => {
        console.log(`Done : ${segment.outputName}`);
      })
      .on("error", (err) => {
        console.error(`Error ${segment.outputName}:`, err.message);
      })
      .run();
  });
};

const inputVideoPath = path.join(__dirname, "../input", "fullvideo.mp4");

splitVideo(inputVideoPath);
