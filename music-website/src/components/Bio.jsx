import Typography from '@mui/material/Typography'
import BioData from './BioData';

const Bio = () => {

    const handleClick = (url) => {
        window.location.href = url
    }

    return (
        <>
            {BioData.map((article) => (
                <div style={{ display: 'flex' }}>

                    <Typography className='article-title'
                        onClick={() => handleClick(article.articleURL)}
                        style={{ fontWeight: 'lighter', fontSize: '100px', marginLeft: '10%' }}>{article.title}
                    </Typography>

                    <img className='article-image' src={article.image} />
                </div>

            ))}
        </>
    )
}


export default Bio;
