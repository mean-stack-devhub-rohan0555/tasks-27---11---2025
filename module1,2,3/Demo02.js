function printValue(val) {
    if (typeof val === "number") {
        console.log("number is " + val);
    }
    else if (typeof val === "string") {
        console.log("val is ".concat(val));
    }
    else {
        console.log("type is unknown");
    }
}
printValue(123);
var val = {
    name: "rohan",
    age: 21,
    salary: 55500,
    marks: 600,
};
function getInfo(p) {
    if ("salary" in val) {
        console.log("salary is ".concat(p.salary));
    }
    else if ("marks" in val) {
        console.log("marks are p.marks");
    }
}
getInfo(val);
function processPayment(pay) {
    if (pay.mode == "cash") {
        console.log("payment is done in cash mode");
        console.log(pay.msg);
        console.log("amount transacted is " + pay.amt);
    }
    else if (pay.mode == "upi") {
        console.log("payment is done in upi mode");
        console.log("platfom used is " + pay.app);
    }
    else {
        console.log("payment is done by card method");
        console.log("type of card is " + pay.type);
    }
}
processPayment({ mode: "cash", msg: "payment done through cash", amt: 555000 });
function apiRes(res) {
    if (res.status == "success") {
        console.log(res.data);
    }
    else if (res.status == "failure") {
        console.log(res.msg);
    }
    else if (res.status == "pending") {
        console.log(res.msg);
    }
}
apiRes({
    status: "success",
    data: "highest peak in the maharashtra is kalsubai peak",
});
apiRes({ status: "pending", msg: "hey currenly in pending status" });
