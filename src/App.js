import React, { useState, useEffect  } from 'react';
import Player from "./components/Player";


const App = () => {
 const [songList] = useState(
  [
    {
  id: 0,
  title: "Nviiri The Storyteller - Badilika Ft Bien",
  artist: "Nviiri",
  image: "/assests/images/nviiri.JPG",
  src: "/assests/mp3/Nviiri The Storyteller - Badilika Ft Bien.mp3",
    
},

{
  id: 1,
  title: "Nviiri The Storyteller - Bwana Sherehe",
  artist: "Nviiri",
  image: "/assests/images/nviiri.jpg",
  src: "/assests/mp3/Nviiri The Storyteller - Bwana Sherehe.mp3",
    

},

{
  id: 2,
  title: "Smile for me",
  artist: "Simi",
  image: "/assests/images/Simi-Stranger.jpg",
  src: "/assests/mp3/Simi - Smile For Me.mp3",
    

},

{
  id: 3,
  title: "Stranger",
  artist: "Simi",
  image: "/assests/images/Simi-Stranger.jpg",
  src: "/assests/mp3/Simi - Stranger.mp3",
  

},

{
  id: 4,
  title: "Jibebe Ft Diamond Platnumz X Lava Lava X Mbosso",
  artist: "Diamond",
  image: "/assests/images/wcb.jpg",
  src: "/assests/mp3/WCB Wasafi - Jibebe Ft Diamond Platnumz X Lava Lava X Mbosso.mp3"
  

},

{
  id: 5,
  title: "Nani (Remix) Ft Innoss'B",
  artist: "Zuchu",
  image: "/assests/images/zuchu.jpeg",
  src: "/assests/mp3/Zuchu - Nani (Remix) Ft Innoss'B.mp3",
  

},





]);
  
 const [currentSongIndex, setCurrentSongIndex]= useState(0);
 const [nextSongIndex, setNextSongIndex]= useState(currentSongIndex + 1);

 useEffect(() => {
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songList.length - 1){
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  })
 }, [currentSongIndex]);

  return(

    <div className="App">
    <Player currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex}
            songList={songList}
            />

      
    </div>
            
  
    
  
)
};

export default App;