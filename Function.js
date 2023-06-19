"use strict";
// interface Person {
//     name: string;
//     age: number;
//   }
//   // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
//   function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
//   }
//   let person = {
//     name: "Max",
//     age: 27,
//   };
//   printPersonProperty(person, "age"); // Printing person property name: "Max"
Object.defineProperty(exports, "__esModule", { value: true });
function displayhuman(h, property) {
    console.log("Printing Human property ".concat(property, ": \"").concat(a[property], "\""));
}
var a = {
    name: 'poornima  batham',
    class: 2,
    address: 90809
};
displayhuman(a, "name");
