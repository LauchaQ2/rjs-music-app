import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Chucky73 - BZRP Music Sessions #43",
      artist: "Bizarrap ft. Chucky73",
      img_src: "./images/song-1.png",
      src: "./music/bzrp43.mp3"
    },
    {
      title: "Eladio Carrión - BZRP Music Sessions #40",
      artist: "Bizarrap ft. Eladio Carrión",
      img_src: "./images/song-2.jpg",
      src: "./music/bzrp40.mp3"
    },
    {
      title: "NICKI NICOLE - BZRP Music Sessions #13",
      artist: "Bizarrap ft. Nicki Nicole",
      img_src: "./images/song-3.png",
      src: "./music/bzrp13.mp3"
    },
    {
      title: "Snow Tha Product - BZRP Music Sessions #39",
      artist: "Bizarrap ft. Snow Tha Product",
      img_src: "./images/song-4.jpg",
      src: "./music/bzrp39.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
