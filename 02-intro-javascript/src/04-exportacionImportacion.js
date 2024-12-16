import { heroes } from './data/heroes.js';

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2)); // {id: 2, name: "Spiderman", owner: "Marvel"}