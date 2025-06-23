// var generateName = require('sillyname')
import generateName from "sillyname";

var sillyname = generateName();
console.log(`My name is ${sillyname}`);

import superheroes, {randomSuperhero} from 'superheroes';

var hero = superheroes;
console.log(`All Super heroes name: ${hero}`);

console.log(`My hero name is ${randomSuperhero()}`);
