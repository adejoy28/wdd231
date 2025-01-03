// to create a recursive function.

// declare a base case
// declare a recursive case
/*
let n = 6;
function Factorial(n) {
    if (n == 0)
        return 1;
    return n * Factorial(n - 1);
}

console.log(`Factorial of ${n} is ${Factorial(n)}`);


// Call back function
console.log("Call back function");
function User(name, callback) {
    console.log(`Hello ${name}`);
    callback();
    console.log("Welcome to the world of call back functions");
}

function userAge() {
    console.log("You are 20 years old");
}

User("John", userAge);


let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    setTimeout(callback, 10000) /*ms* /;
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

// Arrow function
console.log("Arrow function");
let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30

// let n = 5;
n => n > 1 ? n * (n - 1) : 1;

console.log(n); // -> 120

let numbers = [50, 10, 40, 30, 20];

let retVal = (a, b) => a < b ? -1 : 1;

// function compareNumbers(a, b) {
//     let retVal = 0;
//     if (a < b) {
//         retVal = -1;
//     } else if (a > b) {
//         retVal = 1;
//     }
//     return retVal;
// }
let sorted = numbers.sort(retVal);
console.log(sorted); // [10, 20, 30, 40, 50]
* /

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(list, index) {
    if (!(list instanceof Array)) {
        return NaN;
    }
    console.log(`${list[index].name}/${list[index].phone}/${list[index].email}`);
}
function showAllContacts(list) {
    if (!(list instanceof Array)) {
        return NaN;
    }

    list.forEach(contact => {
        console.log(`${contact.name}/${contact.phone}/${contact.email}`);
    });
}

function addNewContact(list, name, phone, email) {
    if (!list instanceof Array) {
        return NaN;
    }

    list.push({
        name: name,
        phone: phone,
        email: email
    });
}



// showContact(contacts, 1);
addNewContact(contacts, "John Doe", "0800 1234", "johndoe@gmail.com");
addNewContact(contacts, "Jane Doe", "0800 5678", "demia@gfkns.clms");
showAllContacts(contacts);
* /


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

contacts.forEach(contact => contact);

let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

userinput = "name"; //prompt("Enter the sort type (name, phone, email)");

sortbyname = contacts.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortbyname);
sortbyphone = contacts.sort((a, b) => a.phone.localeCompare(b.phone));
// console.log(sortbyphone);
sortbyemail = contacts.sort((a, b) => a.email.localeCompare(b.email));
// console.log(sortbyemail);

switch (userinput) {

    case "name":
        type = sortbyname;
        // console.log(sortbyname);
        break;
    case "phone":
        type = sortbyphone;
        break;
    case "email":
        type = sortbyemail;
        break;
    default:
        console.log("Invalid input");
        break;
}
showAllContacts(type);


* /

try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!


try {
    if(true) { //-> Uncaught SyntaxError: Unexpected token '{'
        console.log("true");
    }
    // fun(); // -> Uncaught ReferenceError: fun is not defined

    // const someConstValue = 5;
    // someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

    // let someNumber = 10;
    // someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

    let testArray1 = Array(10);
    console.log(testArray1.length); // -> 10
    let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
    console.log(testArray2.length);

} catch (error) {
    console.log("Caught " + error);
    
}

* /
console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end
* /

function Div(a, b) {
    try {
        if (b === 0) {
            throw new RangeError("Can't divide by 0");
        }
        return a / b

    } catch (error) {
        console.log("Caught " + error);

    }
}

console.log(Div(10, 0)); // -> Caught Division by zero is not allowed
* /

let numbers = [10, 40, 0, 20, 50];

numbers.forEach(num => {
    try {
        if (num == 0)
            throw new RangeError("Cannot divide by 0");
        console.log(1000 / num);
    } catch (error) {
        console.log("Caught" + error)
    }
});


console.log("Before debugger");
// debugger;
console.log("After debugger");
*/


// while (counter-- >= 0) clearInterval(interval)
let counter = 2;
let interval = setInterval(() => {
    console.log(counter);
    while (counter-- >= 0) clearInterval(interval)
    // Insert missing line here.
}, 1000);
