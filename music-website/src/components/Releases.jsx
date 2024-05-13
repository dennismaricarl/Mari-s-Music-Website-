import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import releasesData from '../releasesData';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TagIcon from '@mui/icons-material/Tag';



function Releases() {

    const [audio, setAudio] = useState(null);
    const [heartClicks, setHeartClicks] = useState({});
    const [expandedCards, setExpandedCards] = useState({});
    const [played, setPlayed] = useState({})



    const playPause = (id, audioURL) => {
        setPlayed((playIDs) => {
            const playList = { ...playIDs }
            playList[id] = !playList[id]
            return playList

        })
        if (!played[id]) {
            const newAudio = new Audio(audioURL);
            newAudio.play();
            setAudio(newAudio);
        } else {
            audio.pause();

        }
    };


    const handleHeart = (id) => {
        setHeartClicks((hearts) => {
            const heartsList = { ...hearts }
            heartsList[id] = !heartsList[id]
            return heartsList
        })
    };


    const handleTag = (id) => {
        setExpandedCards((cards) => {
            const cardsList = { ...cards }; // make a copy of current state to make sure we dont mutate the original state
            cardsList[id] = !cardsList[id]; //toggle state of clicked card. set true to false and vice versa. 
            return cardsList;  // returns updated cardList object 
        });
    };

   
    return (
        <div className="releases">
            {releasesData.map((release, id) => (

                <Card key={id} sx={{ maxWidth: 345, margin: 4 }}>
                    
                    <CardMedia className="image"
                        component="img"
                        height="300"
                        image={release.imageURL}
                        alt="album cover image"
                    />
                 
                    <CardContent>
                        <div style={{ display: 'flex' }}>
                            <div onClick={() => playPause(id, release.audioURL)}>
                                {played[id] ?
                                    <PauseCircleOutlineOutlinedIcon className="icons" />
                                    : <PlayCircleOutlinedIcon className="icons" />}
                            </div>
                            <ShareOutlinedIcon className="icons" onClick={() => window.location.href = (release.linkfire)} />
                            <FavoriteIcon
                                style={{ padding: '4px' }}
                                onClick={() => handleHeart(id)}
                                className={heartClicks[id] ? "redHeart" : "blackHeart"}

                            />
                            <button style={{ border: 'none', backgroundColor: 'white' }} onClick={() => handleTag(id)}>
                                <TagIcon className='icons' />
                                {expandedCards[id] ? (
                                    <div style={{ display: 'flex', textAlign: 'left', fontFamily: 'Georgia' }}>{release.description}</div>) : null
                                }
                            </button>
                        </div>
                    </CardContent>

                </Card>


            ))}


        </div>


    )
}
export default Releases;