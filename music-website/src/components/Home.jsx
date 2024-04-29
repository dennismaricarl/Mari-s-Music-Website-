import { React, useState } from "react";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';



const Home = () => {
    return (
        <>
            {/* <FavoriteRoundedIcon className="heart" style={{ color: "black", display: "block", margin: "auto" }} /> */}
            <div style={{ display: "flex" }} className="cover-container">
                <img src="./images/cover.jpg" style={{ margin: "auto", marginTop:"30px"}} />
            </div>

        </>
    )
}

export default Home