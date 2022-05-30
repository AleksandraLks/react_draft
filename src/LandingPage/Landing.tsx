import React from "react";
import './Landing.css'
import CelebrationIcon from '@mui/icons-material/Celebration';
export const Landing=()=>{

    return <div style={{display:"center",background: "midnightblue"}}>
        <div className='LandingPage'>
            <CelebrationIcon/>
            <div>My Welcome Page</div>
        </div>
    </div>
}