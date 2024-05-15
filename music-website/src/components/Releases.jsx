import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import releasesData from '../releasesData';
import Button from '@mui/material/Button'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';



function Releases() {

    const navigateToSocial = (link) => {
        window.location.href = link
    }

    const [heartClicks, setHeartClicks] = useState({});

    const handleHeart = (id) => {
        setHeartClicks((hearts) => {
            const heartsList = { ...hearts }
            heartsList[id] = !heartsList[id]
            return heartsList
        })
    };

    return (
        <>

            <div className="socials-releases">
                <img className="icon-releases" style={{ width: "32px" }} src="./images/spotify.svg" onClick={() => navigateToSocial('https://open.spotify.com/artist/4bfvD66aV5w15gjI3LyQoZ?si=ISHga8SYTRGsvdqUu1EwbA&nd=1&dlsi=f555802cefec4cd4')}></img>
                <InstagramIcon className="icon-releases" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.instagram.com/maridennis93/')} />
                <YouTubeIcon className="icon-releases" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.youtube.com/@maridennis7760')} />
                <FacebookOutlinedIcon className="icon-releases" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.facebook.com/maricarl.dennis93')} />
                <MailOutlineSharpIcon className="icon-releases" style={{ fontSize: '2em' }} onClick={() => navigateToSocial("mailto:dennismaricarl@gmail.com")} />
            </div>

            <div className='releases'>
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
                                <FavoriteIcon
                                    style={{ padding: '4px', marginLeft: '0' }}
                                    onClick={() => handleHeart(id)}
                                    className={heartClicks[id] ? "redHeart" : "blackHeart"}

                                />
                                <Button color='error' variant='contained' size='small' sx={{ fontFamily: 'Lucida Sans', fontWeight: '200', marginLeft: '80px' }} onClick={() => window.location.href = (release.linkfire)} >listen </Button>

                            </div>
                        </CardContent>

                    </Card>
                ))}
            </div>

        </>
    )
}
export default Releases;