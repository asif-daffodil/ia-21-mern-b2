const sadatInfo = {
    name: "Sadat Arifin",
    age: 21,
    isMarried: false,
    address: {
        village: "Ukiara",
        postOffice: "Gorpara",
        thana: "Manikganj Sadar",
        district: "Manikganj",
    },
    friends: ["Rifat", "Hasan", "Rihan", "Mokles"],
    education: (ed) => {
        return ed;
    }
}
sadatInfo.name = "Md Sadat Arifin";
console.log(sadatInfo.name);
console.log(sadatInfo.address.thana);
console.log(sadatInfo.friends[0]);
console.log(sadatInfo.education("BSc in CSE"));