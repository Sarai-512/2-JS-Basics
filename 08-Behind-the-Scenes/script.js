'use strict';
/*
function calcAge(birthYear) { 
    const age = 2037 - birthYear;
    function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);

      if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';
        // Reasssigning outer scope's variable
        output = 'NEW OUTPUT!';
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);
        function add(a, b) {
          return a + b;
        }
      }
      // console.log(str);
      console.log(millenial);
      // console.log(add(2, 3));
      console.log(output);
    }
    printAge();
    return age;
  }
  const firstName = 'Bird';
  calcAge(1999);
  // console.log(age);
  // printAge();

  Variables
  console.log(me);
  // console.log(job);
  // console.log(year);
  var me = 'Jonas';
  let job = 'teacher';
  const year = 1991;
  // Functions
  console.log(addDecl(2, 3));
  // console.log(addExpr(2, 3));
  console.log(addArrow);
  // console.log(addArrow(2, 3));
  function addDecl(a, b) {
    return a + b;
  }
  const addExpr = function (a, b) {
    return a + b;
  };
  var addArrow = (a, b) => a + b;
  // Example
  console.log(undefined);
  if (!numProducts) deleteShoppingCart();
  var numProducts = 10;
  function deleteShoppingCart() {
    console.log('All products deleted!');
  }
  var x = 1;
  let y = 2;
  const z = 3;
  console.log(x === window.x);
  console.log(y === window.y);
  console.log(z === window.z);

  // The this Keyword in Practice
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

//uses lexical keyword
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

//this is a method so the this is the object 
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const lara = {
  year: 2017,
};

lara.calcAge = jonas.calcAge;
lara.calcAge();
//this key word is dynamic beacause lara is calling the method the this key word will us the method with lara with the method 2037-2017 = 20

//reguler function call no owner 
const f = jonas.calcAge;
f();
--- Regular Functions vs. Arrow Functions

var firstName = 'Lara';

const bird = {
  firstName: 'Bird',
  year:1999,
  calcAge: function (){
    console.log(this);
    console.log(2027-this.year);
    //rule when a regular function call has the this key word it makes it undefined these are the solution

    //Solution 1  
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2 
    const isMillenial =  () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();

  },
 
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },

};

bird.greet();
bird.calcAge();

// argument keyword

const addExpr = function (a,b) {
  console.log(arguments);
  return a + b;
};

addExpr(2,5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2,5,8);

---Objects vs. primitives---
*/
//primitve vales ex
let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);
//reference vales exp
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);

// ---Objects vs. primitives---

// Primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);


























  