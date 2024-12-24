import { useState, useEffect } from 'react';

export const getGifts = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FLz5kLz0qeTN1Z5g1iQJladgYPHMUfwq&q=${category}&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => ({
        
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    );

    console.log(gifs);
    return gifs;
}