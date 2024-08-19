function myFunc (fname = "Kuddus", lname = "Mia") {
   return fname + " " + lname; 
}

console.log(myFunc("Asif", "Abir")); 
console.log(myFunc("Sayed", "Rifat")); 
console.log(myFunc());
console.log(myFunc("Hero"));

// recursive function
function nine2one (n) {
    if (n === 1) {
        console.log(n);
        return;
    }
    console.log(n);
    return nine2one(n-1);
}

nine2one(9);