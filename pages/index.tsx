import type { NextPage } from 'next'
import { ChangeEventHandler, useState, useRef, useEffect } from 'react'
import {ChakraProvider, Button, ButtonGroup} from '@chakra-ui/react';
import {LinkForm} from '../components/Video';

// TODO: add support for audio files
// TODO: add button to view different available file types
// TODO: add button to download different file types
// TODO: add support to download playlist
// TODO: add config.json that provides settings and defaults
        // - default file type
        // - max number of downloads before files are overwritten

const Home: NextPage = () => {
  let link;
  let videoLink = "/videos/0.mp4";
  const videoRef = useRef();
  const urlRef = useRef(videoLink);
  const [video, setVideo] = useState(videoLink);

  return (
    <ChakraProvider>
      <LinkForm setVideo={setVideo}>
      </LinkForm>
      <video key={video} controls>
        <source src={video} type="video/mp4"/>
      </video>
    </ChakraProvider>

  )
}

export default Home
