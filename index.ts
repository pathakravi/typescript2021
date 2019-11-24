// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//Duck Typing
interface Duck {
  alpha: string;
  beta?: string;
  walk : () => void;
  swim : () => void;
  quack : () => void;
}

let probablyADuck = {
  alpha: 'Duck says alpha',
  beta: 'Duck says beta',
  gamma: 'Duck says gamma',
  walk : () => console.log('walk like a duck'),
  swim : () => console.log('swim like a duck'),
  quack : () => console.log('quack like a duck'),
}

function FlyOverWater(bird: Duck) {
  console.log('In Duck typing, '+ bird.beta);
 }
FlyOverWater(probablyADuck);
probablyADuck.walk();

import { Book } from './interfaces';