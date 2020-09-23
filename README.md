# Setup the TypeScript environment

The tools that will be used:

- Node.js
- Visual Studio Code
- TypeScript environment that consists of several npm packages

In order to set-up a TypeScript environment do the following:
`$ npm install -g typescript ts-node`

The command above will install:

- typescript module
- ts-node module, a little command-line tool that allows us to compile and execute TS with one command at our terminal

In order to verify that everything has been installed correctly:
`$ tsc --help`

Install Prettier - Code formatter Visual Studio Code extension

My default settings for VS Code TS editing: **File -> Preferences -> Settings**:

- Format code on save: search for 'format on save'
- Use single quotes: search for 'single quotes'
- Use 2 spaces for indentation: search for 'tab size'
- Make the Activity Bar always visible: search for 'activity bar'

---

# Create the first TS project

For the project we can use Fake JSON API: http://jsonplaceholder.typicode.com/

- `$ mkdir fetchdata`
- `$ cd fetchdata`
- `$ npm init -y`

- create the index.ts
  ...

- `$ npm i axios`

- compile and run the file
  - `$ tsc index.ts`
  - `$ node index.js`
  - NOTE: the 2 commands above can be replaced by: `$ ts-node index.ts`

---

# Types

- Primitive Types:
  - number
  - string
  - boolean
  - symbol
  - void
  - null
  - undefined
- Object Types:
  - functions
  - classes
  - arrays
  - objects

Rely on Type Inference always and use Type Annotation whenever you need to clarify the type of value a variable refers to.

Avoid variables with 'any' at all costs. It means TS has no idea what this is - can't check for correct referenced type.

Declare a variable that can point to different types:

```typescript
let numberAboveZero: boolean | number = false;
```

The example above is a bad coding example but it might be required at times.

---

# Function return annotations

```typescript
const logger = (message: string): void => {
  console.log(message);
};
```

NOTE: - a function with 'void' annotation for return can return: null or undefined - we use void tell that we do not return anything

```typescript
const throwError = (message: string): never => {
  throw new Error(message);
};
```

NOTE: - we use 'never' tell that we are never going to reach the end of the function - this is a corner-case case

Tuples are very useful when working with CSV files and you want to represent a single row.

For more references browse the content of the current project.

## Abstract classes in TS

- they can not be instantiated
- used to set up requirements for subclasses
- do create a class when they are translated to JS, so they can be used in `instanceof` checks
