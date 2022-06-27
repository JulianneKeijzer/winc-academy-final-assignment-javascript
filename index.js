'use strict';

const mockData = require('./mockData.js').data;

console.log("Hi there, welcome to the Wincwinc dating app! ♥");
console.log("");
console.log("To sign up, please answer the following questions:");
console.log("");

const profile = {
};

let userFirstName = "";
while(userFirstName.length === 0) {
  userFirstName = prompt("What is your first name?");
}
profile.first_name = userFirstName;
console.log("Your first name: "+userFirstName);
console.log("");

let userLastName = "";
while(userLastName.length === 0) {
  userLastName = prompt("What is your last name?");
}
profile.last_name = userLastName;
console.log("Your last name: "+userLastName);
console.log("");

let userAge = 0;
while (userAge < 18 || Number.isNaN(userAge)) {
  userAge = prompt("What is your age? (Your age must be a number and 18+)");
  userAge = Number(userAge);
}
profile.age = userAge;
console.log("Your age: "+userAge);
console.log("");

let userGender = "";
while (true) {
  userGender = prompt("What is your gender? (insert: M for male, F for female or X for all not male & female genders");
  if (userGender === "M" || userGender === "F" || userGender === "X") {
    break;
  }
}
profile.gender = userGender;
console.log("Your gender: "+userGender);
console.log("");

let userGenderInterest = "";
while (true) {
  userGenderInterest = prompt("What gender are you interested in? (insert: M for male, F for female, X for all not male & female genders or B for bi)");
  if (userGenderInterest === "M") {
    break;
  }
  if (userGenderInterest === "F") {
    break;
  }
  if (userGenderInterest === "X") {
    break;
  }
  if (userGenderInterest === "B") {
    break;
  }
}
profile.gender_interest = userGenderInterest;
console.log("Your gender interest: "+userGenderInterest);
console.log("");

let userLocation = "";
while (true) {
  userLocation = prompt("Is the location you live in a city or rural? (insert: city or rural)");
  if (userLocation === "city") {
    break;
  }
  if (userLocation === "rural") {
    break;
  }
}
profile.location = userLocation;
console.log("Your location: "+userLocation);
console.log("");

let userMinAgeInterest = 0;
while (userMinAgeInterest < 18 || Number.isNaN(userMinAgeInterest)) {
  userMinAgeInterest = prompt("What is the minimum age you're interested in to date? (the minimum age must be a number and 18+)")
  userMinAgeInterest = Number(userMinAgeInterest);
}
profile.min_age_interest = userMinAgeInterest;
console.log("Your minimum age interest: "+userMinAgeInterest);
console.log("");

let userMaxAgeInterest = 0;
while (userMaxAgeInterest < 18 || Number.isNaN(userMaxAgeInterest) || (userMaxAgeInterest <= userMinAgeInterest)) {
  userMaxAgeInterest = prompt("What is the maximum age you're interested in to date? (maximum age must be a number, 18+ and higher then the minimum age)")
  userMaxAgeInterest = Number(userMaxAgeInterest);
}
profile.max_age_interest = userMaxAgeInterest;
console.log("Your maximum age interest: "+userMaxAgeInterest);
console.log("");


//filled in profile object to test
/*const profile = {
  first_name: "Daisy",
  last_name: "Duck",
  age: 60,
  gender: "F",
  gender_interest: "M", 
  location: "rural",
  min_age_interest: 30,
  max_age_interest: 80
};*/

console.log("------------------------------------------------");
console.log(`Thank you for signing up ${profile.first_name}! Below you can see your profile:`);
console.log("");
console.log("First name: "+profile.first_name);
console.log("Last name: "+profile.last_name);
console.log("Age: "+profile.age);
console.log("Gender: "+profile.gender);
console.log("Gender interest: "+profile.gender_interest);
console.log("Age: "+profile.location);
console.log("Minimum age interest: "+profile.min_age_interest);
console.log("Maximum age interest: "+profile.max_age_interest);
console.log("");
console.log("------------------------------------------------");

console.log("With this profile, let's check if there are any matches for you! ♥");
console.log("");

const otherUsers = mockData;
let userMatches = 0;
for (let otherUser of otherUsers) {
  if ( (profile.age >= otherUser.min_age_interest && profile.age <= otherUser.max_age_interest) && (otherUser.age >= profile.min_age_interest && otherUser.age <= profile.max_age_interest) ) {
    console.log("checking: age matches on both sides");
    
  if (profile.location === otherUser.location) {
    console.log("checking: location matches on both sides");

  if ( (((profile.gender == "F" && profile.gender_interest === "B") && ((otherUser.gender === "F" || otherUser.gender === "M") && (otherUser.gender_interest === "F" || otherUser.gender_interest === "B"))) || (((profile.gender === "M" && profile.gender_interest === "B") && ((otherUser.gender === "F" || otherUser.gender === "M") && (otherUser.gender_interest === "M" || otherUser.gender_interest === "B"))) || (profile.gender === otherUser.gender_interest) && (otherUser.gender === profile.gender_interest))) ) {
        console.log("checking: gender matches on both sides");

      userMatches++

console.log("");
console.log("------------------------------------------------");
console.log("");
console.log("It's a match! ♥");
console.log(`${otherUser.first_name} ${otherUser.last_name}, ${otherUser.age} years old, also living in a ${otherUser.location} location, who's gender is: ${otherUser.gender} and who is interested in dating a ${otherUser.gender_interest}.`);
console.log("");
console.log("------------------------------------------------");
      }
    }  
  }
}

console.log("------------------------------------------------");
console.log("");
if (userMatches === 0) {
  console.log("Unfortunately you have no matches... :(");
  } else {
    console.log("Yay, you have " +userMatches+ " match(es)! ♥");
  }
console.log("");
console.log("------------------------------------------------");
