// const getImagenPromesa = () => {

//     const promesa = new Promise((resolve) => {
//         resolve('https://asdasd.com');
//     });

//     return promesa;
// }



const getImagen = async () => {

    try {

        const API_KEY = "FLz5kLz0qeTN1Z5g1iQJladgYPHMUfwq";
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const data = await respuesta.json();

        const {url} = data.data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
       
    } catch (error) {
        
        console.error(error);
    }

    
}

getImagen().then (console.log); 




