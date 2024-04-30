import { useState, React } from "react";
import YouTube from 'react-youtube'
import CircularProgress from '@mui/material/CircularProgress';



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
                <YouTube className="video"
                    videoId='GF8ReFkWCso'
                    onReady={loaded}
                />
                <YouTube className="video"
                    videoId="EAZU0U13QmA"
                    onReady={loaded}
                />
                <YouTube className="video"
                    videoId="Zmcyp5AQOCs"
                    onReady={loaded}
                />
                <YouTube className="video"
                    videoId="hdymdwJJePA"
                    onReady={loaded}
                />
                <YouTube className="video"
                    videoId="0f33cKjDDTg"
                />
                <YouTube className="video"
                    videoId="MGXc2NFojos"
                    onReady={loaded}
                />
                <YouTube className="video"
                    videoId="4GMXEzagHrI"
                    onReady={loaded}
                />
            </div>
        </>
    )
}

export default Videos;