// que 1 .  Create an interface Student with name, roll, marks.
// Create an object of that interface.

interface Student {
  name: string;
  roll: number;
  marks: number;
}
let s1: Student = {
  name: "vakil",
  roll: 123,
  marks: 555,
};

console.log(s1.name);
console.log(s1.roll);
console.log(s1.marks);

// que 2 Create a function printStudent that accepts Student as a parameter and prints details.
function printStudent(s: Student) {
  console.log(s1.name);
  console.log(s1.roll);
  console.log(s1.marks);
}
printStudent(s1);
//que 3  .  Create an interface MultiplyFn that represents a function taking (a, b) and returning a number.
// Implement it.

interface MultiplyFn {
  (x: number, y: number): number;
}

let mul: MultiplyFn = (a, b) => {
  return a * b;
};
console.log(mul(2, 3));

// que 4 . Create an interface Car with brand, price, and a method start() details().

interface Car {
  brand: string;
  price: number;
  start(): void;
  details(): void;
}

let m5: Car = {
  brand: "BMW",
  price: 1_50_00000,
  start() {
    console.log("wrumhh wrumhh wrumhhwrumhh wrumhh wrumhh!");
  },
  details() {
    console.log(this.brand);
    console.log(this.price);
  },
};

m5.start();
// Create an interface Login with email + password and a function validate(login: Login): boolean
interface Login {
  email: string;
  password: string;
  validate(login: Login): boolean;
}

let user1: Login = {
    email: "rohanjadhav0880@gmail.com",
    password: "vrj@satara",
    validate()
    
}
interface Login {
  email: string;
  password: string;
  validate(): boolean; // method inside interface
}

const user: Login = {
  email: "rohan@gmail.com",
  password: "123456",

  validate() {
    return this.email.includes("@") && this.password.length >= 6;
  }
};

console.log(user.validate()); // true


