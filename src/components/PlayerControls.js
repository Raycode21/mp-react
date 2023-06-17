import React from 'react'; 

const PlayerControls = (props) => {
	return(
		<div className="c-player--controls">
			<button className="skip-btn" onClick={() => props.SkipSong(false)}>
				<i className="fa-solid fa-backward"></i>
			</button>

			<button className="play-btn" 
			onClick={() =>
			 props.setIsPlaying(!props.isPlaying)}>
			 {props.isPlaying ? <i className="fa-solid fa-pause"></i>
				: <i className="fa-solid fa-play"></i> }
				
			</button>

			<button className="skip-btn" onClick={()=>props.SkipSong()}>
			<i className="fa-solid fa-forward"></i>
			</button>


		</div>
	);

};

export default PlayerControls;