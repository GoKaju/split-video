# Video Splitting Project

This project uses `fluent-ffmpeg` to split a video into multiple segments based on specifications provided in a JSON file.

## Preconditions

1. **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. **FFmpeg**: You must have FFmpeg installed on your system. You can download it from [ffmpeg.org](https://ffmpeg.org/download.html) and follow the installation instructions for your operating system.

- For Windows, you can download the latest version of FFmpeg from [here](https://ffmpeg.zeranoe.com/builds/).
- For macOS, you can install FFmpeg using Homebrew by running the following command:

  ```bash
  brew install ffmpeg
  ```

- For Linux, you can install FFmpeg using the package manager for your distribution. For example, on Ubuntu, you can run the following command:

  ```bash
  sudo apt-get install ffmpeg
  ```

1. **Project Dependencies**: Install the project dependencies by running the following command in the root of the project:

   ```bash
   npm install
   ```

### Dependencies

- `fluent-ffmpeg`
- `path`
- `fs`

## Usage

1. Place the full video in the [`input`](/input/) folder with the name `fullvideo.mp4`.
2. Create a `segments.json` file in the [`input`](/input/segments.json") folder with the segment details.

   Example `segments.json`:

   ```json
   [
     {
       "startTime": "00:00:00",
       "duration": "00:01:00",
       "outputName": "segment1.mp4"
     },
     {
       "startTime": "00:01:00",
       "duration": "00:01:00",
       "outputName": "segment2.mp4"
     }
   ]
   ```

3. Run the script to generate the segments in the `output`

- With yarn:

  ```bash
    yarn split
  ```

- With npm:

  ```bash
  npm run split

  ```

This project facilitates the automated and efficient splitting of videos into smaller segments.
