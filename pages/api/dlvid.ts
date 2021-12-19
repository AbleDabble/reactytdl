// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// const youtubedl = require('youtube-dl-exec');
import {exec} from 'child_process';
import fs from 'fs';
type Data = {
  link: string 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { link } = req.body;
  console.log("link", link);
  const fileCount = await fs.readdirSync('./public/videos/').length;

  let outVid;
  await exec(`yt-dlp -P public/videos/ -o ${fileCount}.mp4 ${link}`, function (error, stdout, stderr) {
    console.log("stdout", stdout);
    console.log("stderr", stderr);
    outVid = stdout;
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    let lines = outVid.split("\n");
    for(var i = 0; i < lines.length; i++){
      if(lines[i].includes("mp4")){
        outVid = lines[i];
      }
    }
    res.status(200).json({ link: `/videos/${fileCount}.mp4` });
  })
  // Return response to client of video link



  // console.log("typeof link", typeof link);
  // await youtubedl.exec(link, {
  //   referer: link
  // }).then(out => console.log(out));
}