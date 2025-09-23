/* eslint-disable no-console */
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
import path from 'node:path';
import fs from 'node:fs';

ffmpeg.setFfmpegPath(ffmpegPath.path);

const projectRoot = process.cwd();
const src = path.join(projectRoot, 'public/videos/source.mov');
const outMp4 = path.join(projectRoot, 'public/videos/campfire-hero.mp4');

if (!fs.existsSync(src)) {
  console.error('Source file not found:', src);
  process.exit(1);
}

console.log('Converting to MP4:', src);

ffmpeg(src)
  .outputOptions([
    '-vf', 'scale=1920:-2',
    '-c:v', 'libx264',
    '-profile:v', 'high',
    '-level', '4.1',
    '-pix_fmt', 'yuv420p',
    '-crf', '23',
    '-preset', 'veryfast',
    '-movflags', '+faststart',
    '-c:a', 'aac',
    '-b:a', '128k'
  ])
  .on('error', (err: Error) => {
    console.error('FFmpeg error:', err.message);
    process.exit(1);
  })
  .on('end', () => {
    console.log('MP4 written to', outMp4);
  })
  .save(outMp4);


