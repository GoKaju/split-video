# Input Folder

This folder should contain the input video and segments definition file.

- The input video file to be spliced. Should be in the format of `mp4` and called `fullvideo.mp4`.
- The segments definition file. Should be in the format of `json` and called `segments.json`. The file should contain a list of segments, each with a `startTime` in format `HH:MM:SS` , `duration` in format `HH:MM:SS` and a `outputName` for the segment.

As the next code:

```json
[
  {
    "startTime": "0:01:02",
    "duration": "0:00:45",
    "outputName": "part_XX_segment_name.mp4"
  },
  {
    "startTime": "0:02:02",
    "duration": "0:00:45",
    "outputName": "part_XX_segment_name.mp4"
  }
]
```
