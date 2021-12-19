import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEventHandler, useState, useRef, useEffect } from 'react'
import {ChakraProvider, Button, ButtonGroup} from '@chakra-ui/react';
import {LinkForm} from '../components/Video';
import styles from '../styles/Home.module.css'
//const youtubedl = require('youtube-dl-exec');

const Home: NextPage = () => {
  let link;
  let videoLink = "/videos/0.mp4";
  const videoRef = useRef();
  const urlRef = useRef(videoLink);
  const [video, setVideo] = useState(videoLink);

  async function handleSubmit(e) {
    e.preventDefault();
    setVideo(videoLink)
    // const url = link;
    // const res = await axios.post('/api/dlvid', {link: url});
    // console.log("response: ", res.data);
    // videoLink = res.data["link"];
    // setVideo(videoLink);
    // console.log("videoLink: ", videoLink);
    // console.log("video: ", video);
  }

  useEffect(() => {
    if(urlRef.current === null){
      return;
    }
    if(videoRef.current){
      videoRef.current.load();
    }
    urlRef.current = videoLink;
    
    }, [videoLink]);

  function handleChange(e: ChangeEventHandler<HTMLInputElement>) {
    link = e.target.value;
  }
  return (
    <ChakraProvider>
      <LinkForm setVideo={setVideo}>
      </LinkForm>
      <video key={video} controls>
        <source src={video} type="video/mp4"/>
      </video>
    </ChakraProvider>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Youtube-DL</title>
    //     <meta name="description" content="Youtube downloader for local network" />
    //     <link rel="icon" href="/yt.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Link:
    //         <input type="text" name ="link" value={link} onChange={handleChange}/>
    //       </label>
    //       <input type="submit" value="Submit"/>
    //     </form>
    //     <video key={video} width="640" height="480" controls>
    //       <source src={video} type="video/mp4" />
    //     </video>
    //   </main>

    //   <footer className={styles.footer}>
    //     <div>
    //       Youtube Downloader
    //     </div>

    //   </footer>
    // </div>
  )
}

export default Home
