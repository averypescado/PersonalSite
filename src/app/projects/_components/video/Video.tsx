'use client';

import { useRef, useState } from 'react';
import styles from './Video.module.css';
import { Play, Pause, RotateCcw } from 'lucide-react';


interface VideoProps {
  src: string;
  thumbnail?: string;
}



export default function Video({ src, thumbnail }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    }
  };

  const handleButtonClick = () => {
    if (hasEnded) {
      handleReplay();
    } else {
      togglePlay();
    }
  };

  

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        onClick={togglePlay}
        onEnded={handleVideoEnd}
        autoPlay
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
      
      
        <button onClick={handleButtonClick} className={styles.playButton}>
        {hasEnded ? (
          <RotateCcw color="white" size={24} />
        ) : isPlaying ? (
          <Pause color="white" size={24} fill="white" />
        ) : (
          <Play color="white" size={24} fill="white" />
        )}
        </button>
      
    </div>
  );
}