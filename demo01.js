"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s1 = {
    name: "daksh",
    age: 22,
    address: "bombay",
};
s1.age = 23;
console.log(s1.age);
var con = { appName: "Demo", version: 2.0 };
console.log(con.appName);
var nums;
nums = [12, 3, 4, 56, 78, 90, 23];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var m = nums_1[_i];
    console.log(m);
}
var u1 = {
    name: "karan",
    address: "satara",
    mobile: 8857016202,
};
function emailChecker(user) {
    if (user.email == null) {
        console.log("email is not provided !!");
    }
    else {
        console.log("email is present ");
    }
}
emailChecker(u1);
var p1 = {
    pid: 1234,
    pname: "mobile",
    price: 555,
    discount: 15,
};
function discChecker(disc) {
    if (p1.discount == null) {
        console.log("discount does not exists");
    }
    else {
        var fprice = p1.price - p1.price * (p1.discount / 100);
        console.log("final price of the product is " + fprice);
    }
}
discChecker(p1.discount);
var a1 = {
    city: "pune",
    aptName: "jain vihar",
    flatNo: 14,
};
console.log(a1.aptName);
var e1 = {
    name: "ashish",
    eid: 3,
    city: "pune",
    salary: 55346,
    department: { name: "hr", id: 6 },
};
console.log(e1.department.name);
var o1 = {
    oid: 123,
    olocation: "satara",
    customer: { customerid: 234, address: { city: "pune", pincode: 438956 } },
};
console.log(o1.customer.address.city + " " + o1.customer.address.pincode);
var course = {
    title: "mean",
    trainer: { name: "Mr Shubham", experience: "2 years" },
};
function tInfo(obj) {
    console.log(obj.trainer.name);
    console.log(obj.trainer.experience);
}
tInfo(course);
var c1 = {
    carname: "m5",
    model: 2013,
    company: "BMW",
};
var c2 = {
    carname: "scorpionN",
    model: 2025,
    company: "mahindra",
};
var success = {
    success: true,
    msg: "request received success fully",
};
var error = {
    success: false,
    msg: "error occured while receiving data",
};
var teacher = {
    name: "ashish",
    age: 22,
    city: "pune",
};
var student = {
    name: "karan",
    age: 21,
    city: "pune",
};
var Parent = {
    name: "navnath",
    age: 44,
    city: "satara",
};
console.log(Parent.name);
console.log(Parent.age);
console.log(Parent.city);
var t1 = {
    task1: "eat",
    task2: "code",
    task3: "sleep",
    task4: "repeate",
};
console.log(t1.task1);
console.log(t1.task2);
console.log(t1.task3);
console.log(t1.task4);
var m1 = {
    name: "sultan",
    genre: "bollywoood drama",
    actor: "salman bhai",
    actress: "anushka sharma",
    rating: "*****",
};
function getRating(m) {
    console.log(m1.rating);
}
getRating(m1);
var b1 = {
    bName: "BOI",
    bBranch: "pune",
    bAcNumber: 12364252321,
    deposit: function (amt) {
        return "".concat(amt, " is deposited to ").concat(this.bAcNumber);
    },
};
console.log(b1.deposit(60000));
function Demo(y) {
    if (typeof y == "string") {
        console.log("length of  " + y + "is " + y.length);
    }
    else {
        console.log("y is number");
    }
}
var s11 = true;
var s12 = 1234;
function __Demo(variable) {
    if (typeof variable == "string") {
        console.log(variable);
    }
    else {
        for (var _i = 0, variable_1 = variable; _i < variable_1.length; _i++) {
            var v = variable_1[_i];
            console.log(v);
        }
    }
}
__Demo(["rohan", "ashish", "karan", "aditya", "yada shreya", "vaibhav", "mayur"]);
var k = "admin";
function ____Demo(val) {
    console.log("value is " + val);
}
____Demo("success");
var dir = "up";
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
