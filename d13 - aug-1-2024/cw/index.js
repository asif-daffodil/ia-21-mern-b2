// operators

// arithmetic operators

/**
 * + addition
 * - subtraction
 * * multiplication
 * / division
 * % modulus
 * ** exponentiation
 */

// assignment operators
/**
 * = assignment
 * += addition assignment
 * -= subtraction assignment
 * *= multiplication assignment
 * /= division assignment
 * %= modulus assignment
 * **= exponentiation assignment
 */

var x = 10;
x += 5;
x -= 2;
x *= 2;
x /= 2;
x %= 2;
x **= 2;
console.log(x);

// comparison operators
/**
 * == equal to
 * === equal value and equal type
 * != not equal
 * !== not equal value or not equal type
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 */

// logical operators
/**
 * && and
 * || or
 * ! not
 */

// increment and decrement operators
/**
 * ++ increment
 * -- decrement
 */

// String Operators
/**
 * + concatenation
 */

console.log("Hi" + " " + "there");


// condition

// if statement
var age = 22;
var gender = "Male";

if (age <= 12 && age >= 0) {
    console.log("You are a child");
}else if(age <= 19 && age > 12){
    console.log("You are a teenager");
}else if(age <= 30 && age > 19){
    console.log("You are an adult");
}else if(age <= 50 && age > 30){
    console.log("You are an old adult");
}else if(age > 50 && age < 150){
    console.log("You are an old person");
}else{
    console.log("You are not in this world");
}

if(gender === "Female"){
    if(age >= 18){
        console.log("You are eligible for marriage");
    }else{
        console.log("You are not eligible for marriage");
    }
}else if (gender === "Male"){
    if(age >= 21){
        console.log("You are eligible for marriage");
    }else{
        console.log("You are not eligible for marriage");
    }
}

// switch statement
var day = "Thursday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}