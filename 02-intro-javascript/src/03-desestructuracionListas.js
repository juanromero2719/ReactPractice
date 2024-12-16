const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 )

const usarEstado = ( valor ) => {
    return [  valor, () => { console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usarEstado('Goku');

console.log(nombre)
setNombre();