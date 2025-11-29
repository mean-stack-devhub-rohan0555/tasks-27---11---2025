// que 1 .  Create an interface Student with name, roll, marks.
// Create an object of that interface.
var s1 = {
    name: "vakil",
    roll: 123,
    marks: 555,
};
console.log(s1.name);
console.log(s1.roll);
console.log(s1.marks);
// que 2 Create a function printStudent that accepts Student as a parameter and prints details.
function printStudent(s) {
    console.log(s1.name);
    console.log(s1.roll);
    console.log(s1.marks);
}
printStudent(s1);
var mul = function (a, b) {
    return a * b;
};
console.log(mul(2, 3));
var m5 = {
    brand: "BMW",
    price: 15000000,
    start: function () {
        console.log("wrumhh wrumhh wrumhhwrumhh wrumhh wrumhh!");
    }
};
m5.start();
