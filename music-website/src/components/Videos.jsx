import { useState, React } from "react";
import YouTube from 'react-youtube'
import CircularProgress from '@mui/material/CircularProgress';

const videoIds = [
    'GF8ReFkWCso',
    'EAZU0U13QmA',
    'Zmcyp5AQOCs',
    'hdymdwJJePA',
    '0f33cKjDDTg',
    'MGXc2NFojos',
    '4GMXEzagHrI'
]

const Videos = () => {

    const [videoLoaded, setIsVideoLoaded] = useState(false)

    const loaded = () => {
        setIsVideoLoaded(true)
    }

    return (
        <>
            {!videoLoaded && (
                <div style={{
                    display: "flex",
                    position: "absolute",
                    inset: "0",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <CircularProgress />
                </div>
            )}
            <div className="videos-container">
                {videoIds.map((id) => (
                    <YouTube
                        key={id}
                        className="video"
                        videoId={id}
                        opts={{ width: '100%', height: '100%' }}
                        onReady={loaded}
                    />
                ))}
            </div>
        </>
    )
}

export default Videos;
