import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';



const NavBar = () => {
    const navigate = useNavigate();

    const navigateToSocial = (link) => {
        window.location.href = link
    }
    return (
        <div className="container">

            <div className="socials">
                <YouTubeIcon className="icon" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.youtube.com/@maridennis7760')} />
                <InstagramIcon className="icon" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.instagram.com/maridennis93/')} />
                <FacebookOutlinedIcon className="icon" style={{ fontSize: '2em' }} onClick={() => navigateToSocial('https://www.facebook.com/maricarl.dennis93')} />
                <MailOutlineSharpIcon className="icon" style={{ fontSize: '2em' }} onClick={() => navigateToSocial("mailto:dennismaricarl@gmail.com")} />
                <img className="icon" style={{ width: "26px", padding: "3px" }} src="./images/spotify.svg" onClick={() => navigateToSocial('https://open.spotify.com/artist/4bfvD66aV5w15gjI3LyQoZ?si=ISHga8SYTRGsvdqUu1EwbA&nd=1&dlsi=f555802cefec4cd4')}></img>
            </div>
            <Box sx={{ width: '100%', alignItems: "center", marginTop: '50px' }}>
                <Typography onClick={() => navigate('/')} style={{ fontFamily: 'Georgia', fontWeight: 'bold', fontSize: '40px', textAlign: "center" }}>m a r i</Typography>
                <br />
                <Tabs centered>
                    <Tab label="Bio" onClick={() => navigate('/bio')} />
                    <Tab label="Videos" onClick={() => navigate('/videos')} />
                    <Tab label="Shows" onClick={() => navigate('/shows')} />
                    <Tab label="Gallery" onClick={() => navigate('/gallery')} />
                </Tabs>
            </Box>
        </div>
    )
}

export default NavBar;