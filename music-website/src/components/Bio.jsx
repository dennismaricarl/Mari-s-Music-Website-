import { Button } from "@mui/material";

const Bio = () => {

    const imageStyle = {
        width: "40rem",
        height: "60rem",
        margin: "20px"
    }

    const handleClick = (link) => {
       window.location.href = link
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

                <Button onClick={()=> handleClick("https://shoutoutla.com/meet-mari-dennis-singer-songwriter-indie-artist-producer")}>
                <img  style={imageStyle} src="/images/about5.png" />
                </Button>

                <Button onClick={() => handleClick("https://soundtrack-creation.com/2021/06/artist-spotlight-mari-interview/")}>
                <img style={imageStyle} src="/images/about2.png" />
                </Button>
               
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Button onClick={() => handleClick("https://www.anrfactory.com/tag/mari/")}>
                <img style={imageStyle} src="/images/about4.png" />
                </Button>

                <Button onClick={()=> handleClick('https://voyagela.com/interview/meet-mari-dennis-mari-southbay/')}>
                <img style={imageStyle} src="/images/about3.png" />
                </Button>
            </div>

        </>
    )
}

export default Bio;