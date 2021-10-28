'use strict'; /*

 //Default Parameters
const bookings = [];

const creatBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //ES 5 way 
    // numPassengers = numPassengers || 1;
    // price = price ||199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 2);
creatBooking('LH123', 5);

creatBooking('LH123', undefined, 10000);

//How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'jonas Schedtmann',
    passport:1938749
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 1938749) {
      alert('Checked in');
    } else {
      alert('Wrong passport!');
    }
  };

//   checkIn(flight, jonas);
//   console.log(flight);
//   console.log(jonas);

  //Is the same as doing...
//   const flightNum = flight;
//   const passenger = jonas;

  const newPassport = function(person){
      person.passport = Math.trunc(Math.random() * 10000000000);
  }

  newPassport (jonas);
  checkIn(flight, jonas);
 
  */

//Functions Acc