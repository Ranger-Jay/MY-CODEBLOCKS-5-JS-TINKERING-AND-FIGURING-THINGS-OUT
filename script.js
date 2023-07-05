console.log("-----------------------------");
console.log("-----OBJECTS-----");
//OBJECTS ARE THIS
const jayArray = [
  "jay",
  "rietzke",
  2040 - 2000,
  "FSWD",
  ["mike", "pete", "steve"],
];
console.log(jayArray);
// 2nd time using curly = code block, and also now a new object
//keys are on left. value = on right
const jay = {
  firstName: "jay",
  lastName: "rietzke",
  age: 2040 - 2000,
  job: "FSWD",
  friends: ["mike", "pete", "steve"],
};
// this object which is called jay has 5 properties, which are kay-value pairs
// ARRAYS NEED ORDER NUMBER.
// OBJECTS ARE FOR UNSTRUCTURED DATA THAT WE DON'T NEED AN ORDER FOR, WE NEED THE KEYS
console.log(jay);
// HOW TO RETRIEVE DATA FROM OBJECTS, AND HOW TO CHANGE DATA IN OBJECTS USING DOT AND BRACK NOTATION
// IN CONSOLE.LOG, IT REWRITES THE PROPERTY KEYS IN ALPHABETICAL ORDER WHEN YOU CLICK ON ARROW
//DOT NOTATION TO RETRIEVE DATA, THE . IS AN OPERATOR
console.log(jay.lastName);
//BRACKET NOTATION TO RETRIEVE DATA
console.log(jay["lastName"]);
// AN OPERATION IS AN EXPRESSION THAT PRODUCES A VALUE

const nameKey = "Name";
console.log(jay["first" + nameKey]);
console.log(jay["last" + nameKey]);

const interestedIn = prompt(
  "what do you want to know about jay? choose between firstName, lastName, age, job, and friends"
);
console.log(jay[interestedIn]);

if (jay[interestedIn]) {
  console.log(jay[interestedIn]);
} else {
  console.log(
    "wrong request!  choose between firstName, lastName, age, job, and friends"
  );
}
// ADDING TO THE ARRAY
jay.location = "florida";
jay["github"] = "Ranger-Jay";
console.log(jay);

//CHALLENGE
// jay has 3 friends, and one friend's name is called mike

console.log(
  `${jay.firstName} has ${jay.friends.length} frends, and one of those friends is named ${jay.friends[0]}`
);
