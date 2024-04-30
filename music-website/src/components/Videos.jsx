import React from "react";
import YouTube from 'react-youtube'

const Videos = () => {
    return (
        <>
            <div className="videos-container">
                <YouTube className="video"
                    videoId='GF8ReFkWCso'
                />
                <YouTube className="video"
                    videoId="EAZU0U13QmA"
                />
                <YouTube className="video"
                    videoId="Zmcyp5AQOCs"
                />
                <YouTube className="video"
                    videoId="hdymdwJJePA"
                />
                <YouTube className="video"
                    videoId="0f33cKjDDTg"
                />
                <YouTube className="video"
                    videoId="MGXc2NFojos"
                />
                <YouTube className="video"
                    videoId="4GMXEzagHrI"
                />
            </div>
        </>
    )
}

export default Videos;