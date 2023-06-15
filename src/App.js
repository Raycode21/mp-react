import React, { useState } from 'react';
import Player from "./components/Player";


const App = () => {
 const [songList, setSongList] = useState(
  [
    {
  id: 0,
  title: "Badilika",
  artist: "Nviiri",
  image: "/assests/images/nviiri.JPG",
  src: "/assests/mp3/Badilika.mp3",
    
},

{
  id: 1,
  title: "Bwana Sherehe",
  artist: "Nviiri",
  image: "/assests/images/nviiri.jpg",
  src: "/assests/mp3/Bwana-Sherehe.mp3",
    

},

{
  id: 2,
  title: "Simi",
  artist: "Smile for me",
  image: "/assests/images/Simi-Stranger.jpg",
  src: "/assests/mp3/Bwana-Smile-For-Me.mp3",
    

},

{
  id: 3,
  title: "Stranger",
  artist: "Simi",
  image: "/assests/images/Simi-Stranger.jpg",
  src: "/assests/mp3/Stranger.mp3",
  

},

{
  id: 4,
  title: "Jibebe",
  artist: "Diamond",
  image: "/assests/images/wcb.jpg",
  src: "/assests/mp3/Jibebe.mp3"
  

},

{
  id: 5,
  title: "Nani Remix",
  artist: "Zuchu",
  image: "/assests/images/zuchu.jpeg",
  src: "/assests/mp3/Nani-Remix.mp3",
  

},





]);
  
 const [currentSongIndex, setCurrentSong]= useState(0);
 const [nextSongIndex, setnextSong]= useState(currentSongIndex + 1);
  return(

    <div className="App">
    <Player song={songList[currentSongIndex]}
     nextSong={songList[nextSongIndex]}/>
     
      
    </div>
            
  
    
  
)
};

export default App;
