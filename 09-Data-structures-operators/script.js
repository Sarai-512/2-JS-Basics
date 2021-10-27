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

/*

------String Methods Practice-----                                                            
Coding Challenge #5 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

------Coding Challenge #4-----
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //split the string into multiple elements
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    //destrutre into two varables
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    //use cruent index need to use the entries ^  
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

--------Working With Strings - Part 3-------
// Split and join 
//Will use all the time

console.log('a+very+nice+string'.split('+'));
// this makes two elements
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));  we can do it this way or the way below 
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};


capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//Real world situaution when you see a credit card number on a website you usally dont see all the numvers but some are hidden
//can youput this in a form like when you check out and put your card number and then as the user fills the rest the stars show?

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

//how can you put this as a loop to loop the planesInLines
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);


 ------Working With Strings - Part 2------
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
//enter character \n
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
//trim from the start or the end 
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
//regulare expression g stands for global  and other way to type replaceAll
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320')); // --got right 
console.log(plane.includes('Boeing')); //false --got right
console.log(plane.startsWith('Airb')); //true --got right 

// methods .startWith .endsWith
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}


// Practice exercise
//----check to see if baggages can go on the plane---

const checkBaggage = function (items) {
  //this we use all the time to take user input and make it lowercase to make sure we can check the input beacuse an uppercase would make it different 
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};


checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('I have gummy bears and a hersheys bar and a swill knife');


-----Working With Strings - Part 1-----

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
//(4) below is the begin parameter. its the position at //which the extraction will start
//sub string a part of the original string strings are primirtives so they can not be mutated 
console.log(airline.slice(4));

//(7) is the end paramater end value is not included in string since it stops at a space 
//lenght of extracted string will be 7-4=3
console.log(airline.slice(4, 7));

//when we dont know the string and dont hard code the values 
//we want to extract tap the first word so we will start at index of zero and end when there is a a space 
console.log(airline.slice(0, airline.indexOf(' ')));
//extract the last word + one takes away the space
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//define a negative begin argument, extracting from the end 
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//practice sliceing 
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

  // B and E are middle seats
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));


 ----- Coding Challenge #3-----
  Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
//for (const [key, value]
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
 // external variable of half
  console.log(`[${half} HALF] ${min}: ${event}`);
}

  -----Maps: Iteration-----
  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);


  console.log(question);

  // Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  // Quiz app
  console.log(question.get('question'));
  for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }

  // const answer = Number(prompt('Your answer'));
  const answer = 3;
  console.log(answer);
  console.log(question.get(question.get('correct') === answer));
  // Convert map to array
  console.log([...question]);
  // console.log(question.entries());
  console.log([...question.keys()]);
  console.log([...question.values()]);
  

  
  -----Maps: Fundamentals-----
  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  console.log(rest.set(2, 'Lisbon, Portugal'));
//rest adding a key and a value pair 
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');
  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
  console.log(rest.has('categories'));
  rest.delete(2);


  // rest.clear();
  const arr = [1, 2];
  rest.set(arr, 'Test');
  re
  st.set(document.querySelector('h1'), 'Heading');
  console.log(rest);
  console.log(rest.size);
  console.log(rest.get(ar

  
  ------ Sets -----
  //sets are very similer to arrays but the diffence
  //1 sets dont hav an idex while for arrays its very important to have that
  //2 sets will takes out the duplicates so it will show unique values

  const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
  ]);
  console.log(ordersSet);
  console.log(new Set('Jonas'));
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  // ordersSet.clear();
  console.log(ordersSet);
  for (const order of ordersSet) console.log(order);

  // Example
  const staff = ['Waiter'];

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
// numb 1 my answer 
// console.log(game.scored[0], `Goal: ${game.scored[0]}`);
  // for (i = 0; i < scored.length; i++)
  // console.log(( i + 1) + ' : ' + game.scored[i]);
//numb 1 the answer
// [i, player] index of player
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// Coding Challenge #2

Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

// 1.
//destructre to index and player 
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
//we can refactactor DRY the odds
const odds = Object.values(game.odds);
let average = 0;
//do we want the keys or the values in this case we are really just intresed in the values
//object.values will gives us the three values
//for (const odd of Object.values(game.odds))
for (const odd of odds) average += odd;
//average += odd;
//avarge /= object.values(gamae.odds)
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

 // ------Looping Objects: Object Keys, Values, and Entries-----
  // Property NAMES
  const properties = Object.keys(openingHours);
  console.log(properties);
  let openStr = `We are open on ${properties.length} days: `;
  for (const day of properties) {
    openStr += `${day}, `;
  }
  console.log(openStr);

  // Property VALUES
  const values = Object.values(openingHours);
  console.log(values);
  // Entire object
  const entries = Object.entries(openingHours);
  // console.log(entries);
  // [key, value]
  for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
  }

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

  //Methods 
  console.log(restaurant.order?.(0,1) ?? ' Method does not exists')

  //Arrays
  const users = [{ name: 'bird', emial: 'hello@bird.io'}];
  const usres = []; // this will comeout with user array empty

  console.log(users[0]?.name ?? 'user array empty');
//withour optional chaining we would have to write 
if(users.length > 0) console.log(users[0].name);
else console.log('User array empty');

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

