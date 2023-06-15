import React from 'react';

const PlayerControls = () => {
	return(
		<div className="c-player--controls">
			<button className="skip-btn">
				<i class="fa-solid fa-backward"></i>
			</button>

			<button className="play-btn">
				<i class="fa-solid fa-play"></i>
			</button>

			<button className="skip-btn">
				<i class="fa-solid fa-forward"></i>
			</button>


		</div>
	);

};

export default PlayerControls;