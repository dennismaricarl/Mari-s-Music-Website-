import Typography from '@mui/material/Typography'
import BioData from './BioData';


const Bio = () => {

    const handleClick = (url) => {
        window.location.href = url
    }


    return (
        <div className="bio-background">
            {BioData.map((article) => (
                <div key={article.id} className="bio-row">

                    <Typography className='article-title'
                        onClick={() => handleClick(article.articleURL)}
                        sx={{
                            fontFamily: 'Segeo Script font',
                            fontWeight: 'lighter',
                            // scales with the screen: ~28px on phones, up to 100px on desktop
                            fontSize: 'clamp(1.75rem, 7vw, 6.25rem)',
                            marginLeft: { xs: '5%', md: '15%' },
                            minWidth: 0,
                            overflowWrap: 'anywhere'
                        }}>{article.title}
                    </Typography>

                    <img onClick={() => handleClick(article.articleURL)} className='article-image' src={article.image} alt={article.title} />
                </div>
            ))}
        </div>
    )
}


export default Bio;
