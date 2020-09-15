const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// the type annotation makes pepsi into a tuple as opposed to an array
// we say that the array below has a very consistent ordering of elements
const pepsi: [string, boolean, number] = ['brown', true, 40];

// or we could use a type alias
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 60];
const sprite: Drink = ['clrar', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuples are very useful when working with CSV files and you want to represent a single row

const carSpecs: [number, number] = [400, 3354]; // this is harder to understand as opposed to the next declaration
const carStats: { horsePower: number; weight: number } = {
  horsePower: 400,
  weight: 3354,
};
