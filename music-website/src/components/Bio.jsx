import Typography from '@mui/material/Typography'
import BioData from './BioData';


const Bio = () => {

    const handleClick = (url) => {
        window.location.href = url
    }


    return (
        <div className="bio-background">
            {BioData.map((article) => (
                <div style={{ display: 'flex' }}>

                    <Typography className='article-title'
                        onClick={() => handleClick(article.articleURL)}
                        style={{ fontFamily:'Segeo Script font', fontWeight: 'lighter', fontSize: '100px', marginLeft: '15%' }}>{article.title}
                    </Typography>

                    <img onClick={() => handleClick(article.articleURL)} className='article-image' src={article.image} />
                </div>
            ))}
        </div>
    )
}


export default Bio;
