'use strict';
//how to select the element 
console.log(document.querySelector(".message").textContent);
/* //DOM and DOM Manipulation
Document Object model: structured representation of html documents allows javascript to access html elements and styles to manipulate them -- change text html attributes, and css styles 

dom methods and properties for dom maniplation is not part of js its the web api that allows us to usa js to maniplate the webpage there are other api = application programming interface 
such as timers and fetch 
*/
 document.querySelector(".message").textContent = "correct Number!";
