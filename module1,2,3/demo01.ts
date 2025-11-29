// que 1 Create an object student with properties: id, name, age.
// Make id readonly. Try modifying it and observe the error.
export {};
type student = {
  readonly name: string;
  age: number;
  address: string;
};

let s1: student = {
  name: "daksh",
  age: 22,
  address: "bombay",
};

s1.age = 23;
console.log(s1.age);

// s1.name = "ashish"
// cannot assign name because it is readonly property

// que2 . Create a readonly object CONFIG with properties appName, version.
// Try adding a new property — note the erro

type config = {
  appName: string;
  version: number;
};

let con: Readonly<config> = { appName: "Demo", version: 2.0 };
console.log(con.appName);

// Define a readonly array of numbers and try pushing a new value — check what happens.

type numbArray = Array<number>;
let nums: Readonly<numbArray>;
nums = [12, 3, 4, 56, 78, 90, 23];
for (let m of nums) {
  console.log(m);
}

// nums[nums.length] = 12;

// index signature in type readonly number[] only permit reading;

// que 4 Create a type User where email is optional.
// Write a function that prints “Email not provided” if email is missing.
type User = {
  email?: string;
  name: string;
  address: string;
  mobile: number;
};

let u1: User = {
  name: "karan",
  address: "satara",
  mobile: 8857016202,
};

function emailChecker(user: User) {
  if (user.email == null) {
    console.log("email is not provided !!");
  } else {
    console.log("email is present ");
  }
}
emailChecker(u1);
// que 5 Make a type Product with optional discount.
// Calculate final price only if discount exists.
type product = {
  pid: number;
  pname: string;
  price: number;
  discount?: number;
  fPrice?: number;
};

let p1: product = {
  pid: 1234,
  pname: "mobile",
  price: 555,
  discount: 15,
};
function discChecker(disc: typeof p1.discount) {
  if (p1.discount == null) {
    console.log("discount does not exists");
  } else {
    let fprice = p1.price - p1.price * (p1.discount / 100);
    console.log("final price of the product is " + fprice);
  }
}
discChecker(p1.discount);

//que6  Create Address type. flatNo should be optional.
// Create objects with and without flatNo.
type address = {
  city: string;
  aptName: string;
  flatNo?: number;
};

let a1: address = {
  city: "pune",
  aptName: "jain vihar",
  flatNo: 14,
};
console.log(a1.aptName);

// Create an object employee that has a nested object department { id, name }.
// Print employee department name.

type employee = {
  name: string;
  eid: number;
  city: string;
  salary: number;
  department: { name: string; id: number };
};

let e1: employee = {
  name: "ashish",
  eid: 3,
  city: "pune",
  salary: 55346,
  department: { name: "hr", id: 6 },
};
console.log(e1.department.name);
// Define a nested type Order → customer → address.
// Create an order and print full address.

type order = {
  oid: number;
  olocation: string;
  customer: { customerid: number; address: { city: string; pincode: number } };
};
let o1: order = {
  oid: 123,
  olocation: "satara",
  customer: { customerid: 234, address: { city: "pune", pincode: 438956 } },
};
console.log(o1.customer.address.city + " " + o1.customer.address.pincode);

// Create a function that accepts a nested object course { title, trainer { name, experience } }.
// Print trainer info.

type details = {
  title: string;
  trainer: { name: string; experience: string };
};
let course: details = {
  title: "mean",
  trainer: { name: "Mr Shubham", experience: "2 years" },
};
function tInfo(obj: details) {
  console.log(obj.trainer.name);
  console.log(obj.trainer.experience);
}

tInfo(course);

// create a type alias Car. Create 2 objects using it.

type car = {
  carname: string;
  model: number;
  company: string;
};

let c1: car = {
  carname: "m5",
  model: 2013,
  company: "BMW",
};

let c2: car = {
  carname: "scorpionN",
  model: 2025,
  company: "mahindra",
};
// Create a type alias ApiResponse.
// Use it to type responses for success & error.

type ApiResponse = {
  success: boolean;
  msg: string;
};
const success: ApiResponse = {
  success: true,
  msg: "request received success fully",
};
const error: ApiResponse = {
  success: false,
  msg: "error occured while receiving data",
};

// Convert an existing interface (like Student) into a type alias.
// Define a reusable type Person.
// Use it to type teacher, student, parent.

type person = {
  name: string;
  age: number;
  city: string;
};

let teacher: person = {
  name: "ashish",
  age: 22,
  city: "pune",
};

let student: person = {
  name: "karan",
  age: 21,
  city: "pune",
};
let Parent: person = {
  name: "navnath",
  age: 44,
  city: "satara",
};

console.log(Parent.name);
console.log(Parent.age);
console.log(Parent.city);
// Create a type Todo and make a list of 5 todos.

type todo = {
  task1: string;
  task2: string;
  task3: string;
  task4: string;
};

let t1: todo = {
  task1: "eat",
  task2: "code",
  task3: "sleep",
  task4: "repeate",
};

console.log(t1.task1);
console.log(t1.task2);
console.log(t1.task3);
console.log(t1.task4);
// Create a type Movie and write a function that prints movie rating.

type movie = {
  name: string;
  genre: string;
  actor: string;
  actress: string;
  rating: string;
};

let m1: movie = {
  name: "sultan",
  genre: "bollywoood drama",
  actor: "salman bhai",
  actress: "anushka sharma",
  rating: "*****",
};

function getRating(m: movie) {
  console.log(m1.rating);
}

getRating(m1);
// Create a type BankAccount and write a function that deposits money

type BankAccount = {
  bName: string;
  bBranch: string;
  bAcNumber: number;
  deposit(num: number): string;
};

let b1: BankAccount = {
  bName: "BOI",
  bBranch: "pune",
  bAcNumber: 12364252321,
  deposit: function (amt: number): string {
    return `${amt} is deposited to ${this.bAcNumber}`;
  },
};
console.log(b1.deposit(60000));

// Create a function that accepts number | string and prints length (only for strings).

type demo = number | string;
function Demo(y: demo) {
  if (typeof y == "string") {
    console.log("length of  " + y + "is " + y.length);
  } else {
    console.log("y is number");
  }
}

// Create a variable status that can be number | boolean.
// Try assigning different values.
type status = number | boolean;
let s11: status = true;
let s12: status = 1234;
// let s13: status = "ashish";
// error ashish is not assignable to type status

// Write a function that accepts string | string[].
// If string → print directly
// If array → loop and print each.

type special = string | string[];
function __Demo(variable: special) {
  if (typeof variable == "string") {
    console.log(variable);
  } else {
    for (let v of variable) {
      console.log(v);
    }
  }
}
__Demo(["rohan", "ashish", "karan", "aditya", "yada shreya", "vaibhav", "mayur"]);

// Create a variable role that can only be "admin" | "user" | "guest".
// Assign valid & invalid values.

type role = "admin" | "user" | "guest";
let k: role = "admin";
// let t: role = "ashya";
// ashya is not assignable to type role
// Create a function that only accepts "success" | "error" | "loading".
type st = "success" | "error" | "loading";
function ____Demo(val: st) {
  console.log("value is " + val);
}
____Demo("success");
// ____Demo("ashya");
// Argument of type '"ashya"' is not assignable to parameter of type 'st'.

// Create a variable for direction: "up" | "down" | "left" | "right".
// Use switch-case to print action.

// choose any one value
type direction = "up" | "down" | "left" | "right";

let dir: direction = "up";

switch (dir) {
  case "up":
    console.log("direction is up");
    break;
  case "down":
    console.log("direction is down");
    break;
  case "left":
    console.log("direction is left");
    break;
  case "right":
    console.log("direction right");
    break;
}
