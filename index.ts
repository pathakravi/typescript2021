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
  newduck?: newBornDuck;
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

// -------------------------------------------------

//Interfaces for Function Types
function CreateCustomerID(name: string, id: number): string {
  return name + id ;
}

interface StringGenerator {
  (char: string, nums: number): string;
}

let IdGenerator: (char: string, nums: number) => string;
//let IdGenerator : StringGenerator;
IdGenerator = CreateCustomerID;

//-------------------------------------------------------

//2nd example, Interfaces for Function Types
interface newBornDuck {
  (date:string): void;
}

let newbornDay: newBornDuck;
newbornDay = (day: string) => console.log('New Born Day is '+ day);
newbornDay('Sunday');

//-------------------------------------------------------------

//Extending Interfaces

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBookPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

