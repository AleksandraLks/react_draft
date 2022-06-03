import React,{useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import './navStyle.css'
import {Link} from "react-router-dom";

export const Nav=()=>{
    const [isVisible,setVisible]=useState(true)
    const handleShow=()=>{
        setVisible(!isVisible)
    }
    return(
        <div className="Nav">
            <MenuIcon className='NavMob' onClick={handleShow} />
            <div>
            {isVisible && <div className='NavLink'>
                <Link className='App-link' to={'/Landing'} style={{ textDecoration: 'none', paddingRight:'10px'}}>Landing </Link>
                <Link className='App-link' to={'/FormInput'} style={{ textDecoration: 'none', paddingRight:'10px'}}>Form </Link>
                <Link className='App-link' to={'/Contact'} style={{ textDecoration: 'none', paddingRight:'10px'}}>Contact </Link>
                <Link className='App-link' to={'/Rick'} style={{ textDecoration: 'none', paddingRight:'10px'}}>Rick and Morty </Link>
                <Link className='App-link' to={'/About'} style={{ textDecoration: 'none' }}>About </Link>
            </div>}
            </div>
        </div>
    )
}