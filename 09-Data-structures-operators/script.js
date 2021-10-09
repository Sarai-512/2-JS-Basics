'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  // Data needed for first part of the section
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //nested object

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00', address}) {
        console.log( `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
      },

      orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
      },


  };

  if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

  // console.log(restaurant.openingHours.mon.open);

  //WITH opetional chaining when there is a lot of nested arrays/objects
  console.log(restaurant.openingHours.mon?.open); 
  console.log(restaurant.openingHours?.mon?.open); 
  //Example
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  for (const day of days) {
    console.log(day);
    restaurant.openingHours[day]
    const open = restaurant.openingHours[day]?.open || 'closed';
    console.log(`on ${day}, we are open at ${open}.`)
  }

  


/*
//The for-of loop
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    for (const item of menu) console.log(item);
    //really was ment for just current element but can get both element and index
    for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}


// console.log([...menu.entries()]);



  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
//my answer numb 1.
// const players1 = [game.players]; 
// const players2 = [game.players];
//the awnser numb 1 
const [players1,players2] = game.players;
console.log(players1, players2);
///numb 2 the answer 
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//num 3 my answer  
const allPlayers = players1.concat(players2); 
console.log(allPlayers);
//numb 4 my anwser
const players1Final = players1.push('Thiago', 'Coutinho','Perisic');
console.log(players1Final)
//the answer 
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final)
//numb 5 the answer its nested 
const { odds: { team1, x: draw, team2 },} = game;
console.log(team1, draw, team2);
//numb 6 
const printGoals = function(playersIndex){
  return players.length 
}
//num 6 the answers 
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
//numb 7 the answer 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


  /*
 // Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*
  const arr = [7,8,9];
  const badNewArr = [1,2, arr[0], arr[1], arr[2]];
  console.log(badNewArr);

  const newArr = [1,2, ... arr];
  console.log(newArr);

  console.log(...newArr);

  //this is a new array we are not adding to the one that is there 
  const newMenu = [...restaurant.mainMenu, ' Gnocci'];
  console.log(newMenu);

//copy array 
const mainMenyCopy = [...restaurant.mainMenu];

//join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays,stings,maps,sets. Not objects

const str = 'bird';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log('b', 'i');
// console.log(`${...str} craven`); will not work 

const ingredients = [
    prompt(`Let\'s make pasta! ingredient 1?`),
    prompt(`Let\'s make pasta! ingredient 2?`), 
    prompt(`Let\'s make pasta! ingredient 3?`),
];
console.log(ingredients);

  restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndx: 2,
    starterIndex: 2,
}); 

restaurant.orderDelivery({
    address: 'Via del sole, 21',
    starterIndex: 1,
}); 



  const {name, openingHours, categories} = restaurant;
  console.log(name, openingHours, categories);

  const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
  console.log(restaurantName, hours, tags);
  //useful when using APIs and data not hard coded
  //default values
  const {menu = [], starterMenu: starters = []} = restaurant;
  console.log(menu, starters);

  let a = 111;
  let b = 999;
  const  obj = {a:23, b:7, c:14};
  //have to wrap in peranetacies 
  ({a,b} = obj);
  console.log(a,b);

  //mutating variables 

  //Nested objects
  const {
      fri: {open: o, close: c},
     } = openingHours;
  console.log(o,c);


//Destructing arrays
    const arr = [2,3,4];
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
//destructing assginment for the array on the right
    const [x,y,z] = arr;
    console.log(x,y,z);
    console.log(arr);

    let [main, ,secondary] = restaurant.categories;
    console.log(main, secondary);

    //---switching variables--- mutating 
    // const temp = main;
    // main = secondary;
    // secondary = temp;
    // console.log(main, secondary);

    //now how to do this ^ but with destructering 
     [main,secondary] = [secondary, main] 
     console.log(main,secondary);

    //  console.log(restaurant.order(2,0));

    //Receive 2 return values from a function 2 varible  from one fuction call
    const [starter, mainCourse] = restaurant.order(2,0);
    console.log(starter, mainCourse)
    //nested destructuring
    const nested =[2,4, [5,6]];
    // const [i, , j] = nested;
    // console.log(i,j);
    const [i, , [j, k]] = nested;
    console.log(i,j,k);

    //Default vales
    const [p=1,q=1,r=1] = [8,9];
    console.log(p,q,r);

*/

