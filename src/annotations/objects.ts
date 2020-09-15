const profile = {
  name: 'luckpp',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; // destructuring and type annotations
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
