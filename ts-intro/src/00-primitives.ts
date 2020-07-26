// Boolean
let isMoodGood: boolean = true;
// let isMoodGood = true; // the same

// isMoodGood = 'Yes, it is!'; // Error

// Number
let integer: number = 42;
let decimal: number = 10.23;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o444;

// let decimal = 10.23; // the same
// decimal = '10.23'; // Error

// String
let firstName: string = 'Tommy';
let lastName: string = 'Wiseau';
let greetings: string = `Hello ${firstName} ${lastName}!`;

// firstName = 101; // Error

// Multiple types

let smth: number | string | boolean = 'some stuff';
smth = 34;
smth = false;
smth = 'string';
// smth = {}; // Error

