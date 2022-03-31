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
    },
    {
      title: "CA7RIEL - McFly",
      artist: "CA7RIEL",
      img_src: "./images/mcfly.png",
      src: "./music/mcfly.mp3"
    },
    {
      title: "CA7RIEL - Muy bien",
      artist: "CA7RIEL",
      img_src: "./images/muybien.jpg",
      src: "./music/muybien.mp3"
    },
    {
      title: "Paco Amoroso - Chinga Sport ft Tío La Bomba",
      artist: "Paco Amoroso",
      img_src: "./images/chingasport.jpg",
      src: "./music/chingasport.mp3"
    },
    {
      title: "Paco Amoroso - Las Vegas Strip",
      artist: "Paco Amoroso",
      img_src: "./images/lasvegasstrip.jpg",
      src: "./music/lasvegasstrip.mp3"
    },
    {
      title: "Paco Amoroso - Viuda Negra",
      artist: "Paco Amoroso",
      img_src: "./images/viudanegra.jpg",
      src: "./music/viudanegra.mp3"
    },
    {
      title: "Paulo Londra - Plan A",
      artist: "Paulo Londra",
      img_src: "./images/paulolondra.jpg",
      src: "./music/plana.mp3"
    },
    {
      title: "RESIDENTE - BZRP Music Sessions 49",
      artist: "Bizarrap ft. Residente",
      img_src: "./images/bzrp49.jpg",
      src: "./music/bzrp49.mp3"
    },
    {
      title: "WOS ft CA7RIEL - NIÑO GORDO FLACO",
      artist: "Bizarrap ft. CA7RIEL",
      img_src: "./images/niñogordoflaco.jpg",
      src: "./music/niñogordoflaco.mp3"
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
