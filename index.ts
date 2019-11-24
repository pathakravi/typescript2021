// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//Duck Typing
interface Duck {
  walk : () => void;
  swim : () => void;
  quack : () => void;
}

let probablyADuck = {
  walk : () => console.log('walk like a duck'),
  swim : () => console.log('swim like a duck'),
  quack : () => console.log('quack like a duck'),
}

function FlyOverWater(bird: Duck) { }
FlyOverWater(probablyADuck);

import { Category } from './enum';
import { Book } from './interfaces';