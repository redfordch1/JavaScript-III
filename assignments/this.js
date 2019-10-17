/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default binding - this becomes the global object
* 2. Implicit binding - whatever is to the left of the dot is what this is referring to 
* 3. Explicit binding - When .call .apply and .bind are used in a function.
* 4. New binding - Makes a blank Object, allowing you to make pass your own info into it
*
* write out a code example of each explanation above
*/

// Principle 1
function greet(name){
    console.log('Hello ', name);
    console.log(this);
}
greet('Chase');
// ==== code example for Window Binding ====






// Principle 2
const greet2 = {
    greeting: 'Hello ',
    speak: function(name){
        console.log(this.greeting, name);
        console.log(this);
    }
}
greet2.speak('Chase');
// ==== code example for Implicit Binding ====








// Principle 3
function greet3(first, last){
    this.name = first;
    this.lastname = last;
    this.speak = function(){
        console.log(this.name, this.lastname);
        console.log(this);
    }
}
const greetChase = new greet3('Chase', 'Redford');
greetChase.speak();
// ==== code example for New Binding ====








// Principle 4
function greet4(first, last){
    this.name = first;
    this.lastname = last;
    this.speak = function(){
        console.log(this.name, this.lastname);
        console.log(this);
    }
}

const greetChase = new greet4('Chase', 'Redford');
const greetHoodlum = new greet4('Hoodlum', 'Me');
greetChase.speak.call(greetHoodlum);
greetHoodlum.speak.call(greetChase);
// ==== code example for Explicit Binding ====