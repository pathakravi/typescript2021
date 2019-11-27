# typescript2021

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript2021)

Interface : 
Its is a contract that defines the type.
Compiler enforces the contract via type checking.
Its a collection of property and method deintions but no implementation details.
Implementation details are provided by class or object that implements the interface.
Interface support custom types which Javascrit does not support. By which it does not compie to anything in javascript. it is just used by compiler for type checking.

Duck Typing :
"When I see a bird that walks like a duck, swim likes a duck and quacks like a duck, I call that bird a duck". - Duck typing.

Defining an Interface :
interface keyword,
list properties with types,
optional properties with "?"
provide function signature with no implementation

interface Book {
  id: number;
  title: sring;
  pages?: number,
  markDamaged : (reason: string) => void; 
}


----------------------------------------------------------------




