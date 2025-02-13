import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    const ShuffleSong = () =>{
        props.setCurrentSongIndex(Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div className="c-player">
            <audio onEnded={SkipSong} src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>
            <img className='logo' src="./logo.png"/>
            </h4>
            <h4>Escuchando</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} ShuffleSong={ShuffleSong} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Siguiente: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
