import getHeroeById from './data/heroes.js';


const getHeroeByIdAsync = (id) => {

    const promise = new Promise( (resolve, reject) => {

        setTimeout( () => {

            const heroe = getHeroeById(id);

            if(heroe){

                resolve(heroe);
            } else {

                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    } );

    return promise;
}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );