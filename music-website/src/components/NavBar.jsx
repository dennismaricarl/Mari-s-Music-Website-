import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';



const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
           
            <Box sx={{ width: '100%', alignItems: "center", marginTop:'50px'}}>
            <Typography style={{ fontFamily: 'Georgia', fontWeight: 'bold', fontSize: '40px', textAlign: "center" }}>m a r i</Typography>
            <br/>
                <Tabs 
                indicatorColor="secondary"
                textColor="inherit"
                    centered>
                    <Tab label="Bio" onClick={() => navigate('/bio')} />
                    <Tab label="Music" onClick={() => navigate('/music')} />
                    <Tab label="Videos" onClick={() => navigate('/videos')} />
                    <Tab label="Shows" onClick={() => navigate('/shows')} />
                </Tabs>
            </Box>
        </>
    )
}

export default NavBar;