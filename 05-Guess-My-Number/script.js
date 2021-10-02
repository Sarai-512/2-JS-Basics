'use strict';
/*
//how to select the element 
console.log(document.querySelector(".message").textContent);
//DOM and DOM Manipulation
Document Object model: structured representation of html documents allows javascript to access html elements and styles to manipulate them -- change text html attributes, and css styles 

dom methods and properties for dom maniplation is not part of js its the web api that allows us to usa js to maniplate the webpage there are other api = application programming interface 
such as timers and fetch 

 document.querySelector(".message").textContent = "Correct Number!";

 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent = 10;

 document.querySelector('.guess').value = 23;
 console.log (document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1 ; 
let score = 20;
console.log(secretNumber)

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess,guess);
//one senerio where there is no number
    if(!guess){
        document.querySelector(".message").textContent = "No number!";
    } else if (guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "To High!";
        score = score - 1; 
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = "You lost the game!";
            document.querySelector('.score').textContent = 0;
        }

    }else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "To low!";
        score = score - 1; 
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = "You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
       
    }
}); 

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the score and secretNumber variables

3. Restore the initial conditions of the message, number, score and guess input field

4. Also restore the original background color (#222) and number width (15rem) [done]
GOOD LUCK 😀

document.querySelector('.again').addEventListener('click', function(){
    //score = 20 was what I was missing 
    score = 20;
    document.querySelector('.score').textContent = score;
    
    const guess = Number(document.querySelector('.guess').value); 

    const secretNumber = Math.trunc(Math.random()*20) + 1 ; 
    // document.querySelector('.number').textContent = secretNumber;
 
    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector('.number').style.width = '15rem';
    
    document.querySelector('body').style.backgroundColor = '#222';

});
*/
//^my asnswer
document.querySelector('.again').addEventListener('click', function(){
    //score = 20 was what I was missing 
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1 ; 

    document.querySelector(".message").textContent = "Start guessing...";
   
};











