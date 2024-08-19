//  class definition
class myInfo {
    // properties
    myName = "Asif Abir";
    myCity = "Dhaka";
    static myCountry = "Bangladesh";

    // methods
    myDetails() {
        return "My name is " + this.myName + " and I live in " + this.myCity;
    }

    // constructor
    constructor(msg) {
        console.log(msg);
    }
}

// object creation
var obj = new myInfo("Hello, World!");
obj.myName = "Abir";
console.log(obj.myDetails());
myInfo.myCountry = "Bangladesh 2.0";
console.log(myInfo.myCountry);

class myChildInfo extends myInfo {
    myChildName = "Asifa Amrin";

    myChildDetails() {
        return "My child's name is " + this.myChildName + " and she lives in " + this.myCity;
    }
}

var obj2 = new myChildInfo('Child object created');
console.log(obj2.myChildDetails());