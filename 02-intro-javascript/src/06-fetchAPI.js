const API_KEY = "FLz5kLz0qeTN1Z5g1iQJladgYPHMUfwq";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {


        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    })
    .catch( console.warn )