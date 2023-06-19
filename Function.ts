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
  

export{}

  interface Human{
 name:string;
 class:number;
 address:string
  }
  function displayhuman(h: Human,property:keyof Human){
        console.log(`Printing Human property ${property}: "${a[property]}"`);

  }
  let a ={ 
    name:'poornima  batham',
    class:2,
    // address:90809
  }
  displayhuman(a,"name")