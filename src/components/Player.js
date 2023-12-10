import React, { useState, useEffect, useRef, useCallback } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import Slider from './Slider';

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioEl.current.currentTime;
    setTimeProgress(currentTime);
    sliderRef.current.value = currentTime;
    sliderRef.current.style.setProperty(
      '--range-progress',
      `${(sliderRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioEl, duration, sliderRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioEl, repeat]);

  const onLoadedMetadata = () => {
    const seconds = audioEl.current.duration;

    setDuration(seconds);
    sliderRef.current.max = seconds;
  };

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songList.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songList.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={props.songList[props.currentSongIndex].src}
        ref={audioEl}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>

      <h4>Playing now</h4>

      <PlayerDetails
        song={props.songList[props.currentSongIndex]}
        audioEl={audioEl}
        setDuration={setDuration}
        sliderRef={sliderRef}
      />

      <Slider
        sliderRef={sliderRef}
        audioEl={audioEl}
        timeProgress={timeProgress}
        duration={duration}
        setTimeProgress={setTimeProgress}
      />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next Up </strong>
        {props.songList[props.nextSongIndex].title} by{' '}
        {props.songList[props.nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
