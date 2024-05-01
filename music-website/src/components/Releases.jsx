import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import releasesData from '../releasesData';

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
    const [expanded, setExpanded] = useState(false);
    const [releases, setRelease] = useState([])

    const handleExpandClick = (id) => {
        const releases = releasesData.find((release) => release.id == id)
        setRelease(releases.id)
        if (releases){
        setExpanded(!expanded)
        }
            
         
        }
        


    return (
        <div style={{ margin: '40px', display: 'flex', justifyContent:'center'}}>
            {releasesData.map((release) => (

                <Card key={release.id} sx={{ maxWidth: 345, margin: 4}}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={release.imageURL}
                        alt="album cover image"
                    />
                    <CardContent>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="listen here">
                            <FavoriteIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={() => handleExpandClick(release.id)}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography fontFamily={'Georgia'}>
                                {release.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>


            ))}


        </div>


    )
}

export default Releases;