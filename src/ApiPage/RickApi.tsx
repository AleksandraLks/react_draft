import {ImageList, ImageListItem,ImageListItemBar } from "@mui/material";
import { useEffect, useState } from "react";
import React from 'react';
import './RickApi.css'

export default function Rick() {
    const [load, setLoad] = useState(true);
    const [picture, setPicture] =  useState<any[]>([]);

    const fetchImg = async () => {
        setLoad(true);
        await fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => data.results)
           .then((results) => setPicture(results.map((el: any) => el)))
        setLoad(false);
    };
    useEffect(() => {
        fetchImg();
    }, []);

    return (

        <ImageList  className='RickApi'>
            <ImageListItem key="Subheader" cols={2}>
            </ImageListItem>
            {picture.map((item) => (
                <ImageListItem key={item}>
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={`Species: ${item.species}, Origin: ${item.origin.name} `}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
