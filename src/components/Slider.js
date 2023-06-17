import React from 'react';
import "./slider.css"



const Slider = ({ sliderRef, audioEl, timeProgress, duration, setTimeProgress }) => {
	const handleSliderChange = () =>{
		audioEl.current.currentTime = sliderRef.current.value;
	}

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
	
	
	return(
		<div className="progress">
      		<span className="time current">{formatTime(timeProgress)}</span>
      		<input type="range" 
      		ref={sliderRef} 
      		onChange={handleSliderChange}/>

      		<span className="time">{formatTime(duration)}</span>
    	</div>

		);
};

export default Slider;