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

Modules :

Changes in Typescript 1.5 :
Begining with v1.5 
"Internal modules" became "namespaces".
"External modules" became "modules".

Modules -
Tool for organizing code
Native support in Node.js to run Modules in typescript.
Browser is supported with module loader.

-------------------------------------------------------------------

Namespaces - 
Tool for organizing code
Prevents global namespace pollution
Best for smaller client applications

Namespaces can be nested
"Triple Slash" References
///<refernce path = membership.ts />

------------------------------------------------------------------

Supported Module format 
In Node - CommonJS
Browser apps - Asynchronous Module Defition(AMD)
Universal Module Definition(UMD) - CommonJS + AMD
Typescript has its own Module Format - ES2015

-------------------------------------------------------------

export { Book, myInterface as ourMagazine}
import{ Magazine, GetMagazine as myGetMagazine } from './periodicals';
import * as mag from './periodicals';


