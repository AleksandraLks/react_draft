import React from "react";
import './About.css'
import CelebrationIcon from '@mui/icons-material/Celebration';
export const About=()=>{

    return <div style={{display:"center",background: "midnightblue"}}>
        <div className='AboutPage'>
            <CelebrationIcon/>
            <div>About me page</div>
            <p>Some super info about me</p>
        </div>
    </div>
}