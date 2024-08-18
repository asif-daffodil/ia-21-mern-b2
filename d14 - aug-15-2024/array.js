var cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];
console.log(cities[0]);
console.log(cities.length);
cities.push("Barisal");
cities.push("Rangpur", "Mymensingh");
cities.pop();
cities.shift();
cities.unshift("Comilla");
cities.unshift("Feni", "Noakhali");
cities.splice(2, 3);
console.log(cities);

for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}