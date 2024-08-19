// loop
/**
 * start point
 * end point
 * increment/decrement
 */

// while loop
var sp = 20;
var ep = 9;

while (sp <= ep) {
    console.log(sp);
    sp++;
    // sp += 1;
    // sp = sp + 1;
}

//  do while loop
do {
    console.log(sp);
    sp++;
}while (sp <= ep);

// for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var g = 2;
for (var i = 1; i <= 10; i++) {
    console.log(g + " x " + i + " = " + g*i);
}


for (var i = 0; i <= 100; i++) {
    if(i > 7 && i % 7 === 6){
        console.log(i);
    }
}