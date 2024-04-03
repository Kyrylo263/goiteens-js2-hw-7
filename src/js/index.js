import json from './heroes.json';
import template from '../templates/items.hbs';

const itemsHeroes = document.querySelector('.heroes-js');
const markup = template(json);
itemsHeroes.insertAdjacentHTML('beforeend', markup);