//Dynamic typing
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
/*
Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types
*/
//Weakly Typed
const foo1 = 42; // foo is a number
const result = foo1 + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
/*
JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.
*/
/*For symbols and BigInts, JavaScript has intentionally disallowed certain implicit type conversions.*/
