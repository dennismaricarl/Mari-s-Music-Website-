import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import releasesData from '../releasesData';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



function Releases() {

    const [play, setPlay] = useState(false);
    const [audio, setAudio] = useState(null);
    const [heartClicks, setHeartClicks] = useState([]);

    const playPause = (audioURL) => {
        if (!play) {
            const newAudio = new Audio(audioURL);
            newAudio.play();
            setAudio(newAudio);
            setPlay(true);
        } else {
            audio.pause();
            setPlay(false);
        }
    }

    const handleHeart = (id) => {
        if(heartClicks.includes(id)) { // if id is already in array, heart has been clicked
            setHeartClicks(heartClicks.filter((clickedId) => clickedId !== id)); //so remove it 
        } else {
            setHeartClicks([...heartClicks, id]); // if id not in array yet, heart hasn't been clicked, so include it!
        }
    };


    return (
        <div style={{ margin: '40px', display: 'flex', justifyContent: 'center' }}>
            {releasesData.map((release, id) => (

                <Card key={id} sx={{ maxWidth: 345, margin: 4 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={release.imageURL}
                        alt="album cover image"
                    />

                    <CardContent>
                        <div style={{ display: 'flex' }}>
                            <div onClick={() => playPause(release.audioURL)}>
                                {play ?
                                    <PauseCircleOutlineOutlinedIcon className="playPause" />
                                    : <PlayCircleOutlinedIcon className="playPause" />}
                            </div>
                            <ShareOutlinedIcon className="playPause" onClick={() => window.location.href = (release.linkfire)} />
                            <FavoriteIcon 
                            style={{padding: '4px'}}
                            onClick={() => handleHeart(release.id)}
                            className={heartClicks.includes(release.id) ? "redHeart" : "blackHeart"}
                            
                            />
                        </div>
                    </CardContent>

                </Card>


            ))}


        </div>


    )
}
export default Releases;