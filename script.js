'use strict';

let hasDrivingLicense = false;
const passTest = true;

if(passTest) hasDrivingLicense = true;
if(hasDrivingLicense) console.log('I can Drive');


// function in javascript

function fruit(apples, oranges){
    console.log(apples,oranges);
    const juice = `Making Juice of ${apples} apples and ${oranges} oranges`
    return juice;

}
const appleJuice = fruit(4,0);
console.log(appleJuice);

const orangeJuice = fruit(2,6);
console.log(orangeJuice);



// BirthYear calculator

// function declaration 

function calcAge(birthYear){
    const age = 2037 - birthYear;
    return age;
} 
const age1 = calcAge(2010);
console.log(`${age1} years old :)`);

// function expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(2010);

// Arrow function 

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2010);

console.log(age1, age2, age3);

// complex arrow function

const yearsUntilRetirement = (birthYear, firstName) => {
    const age4 = 2040 - birthYear;
    const yearOfRetirement = 60 - age4;
    return `${firstName} retires in ${yearOfRetirement} years`;
}
const retirement = yearsUntilRetirement(2000,"samir");
console.log(retirement);

// or
console.log(yearsUntilRetirement(1999, 'samir'));

// function calling other function

const cutFruit = function(fruit){
    return fruit*5;
}

// function calling 

const fruitProcessor = function (apples, oranges){
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice of ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(6,4));


// converting function from one function to other

const yearsUntilRetirement1 = (birthYear, firstName) => {
    const age4 = 2040 - birthYear;
    const yearOfRetirement = 60 - age4;
    return `${firstName} retires in ${yearOfRetirement} years`;
}


const Retirement = function(birthYear,firstName){
    const calc = calcAgeNew(birthYear);
    const yearOfRetirement = 60 - calc;

    if(yearOfRetirement>0){
        console.log(`${firstName} your age is ${calc} and you're going to retire in ${yearOfRetirement} years.`)
        return yearOfRetirement;
    }else{
        console.log(`${firstName} is already retired 🎉`);
    }
    // return `${firstName} your age is ${calc} and you're going to retire in ${yearOfRetirement} years.`
}

const calcAgeNew = function(birthYear){
    return 2022 - birthYear;
}


const myAgeOfRetirement = Retirement(2002, 'Samir');
console.log(myAgeOfRetirement);


// calculating Average score of two teams

const calcAverage = (first,second,third) => (first+second+third)/3;

// Data 1
let scoreDolphin = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);


const checkWinner = function(avgOfDolphin,avgOfKoalas){

     if(avgOfDolphin>= 2*avgOfKoalas){
        console.log(`Team Dolphins wins the Trophy (${avgOfDolphin} vs ${avgOfKoalas})`);
     }else if(avgOfKoalas>= 2*avgOfDolphin){
        console.log(`Team Koalas wins the Trophy (${avgOfKoalas} vs ${avgOfDolphin})`);
     }else {
        console.log(`No Team wins`)};
}
checkWinner(scoreDolphin,scoreKoalas);

// Data 2

scoreDolphin = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphin,scoreKoalas);



// Array in javaScript


// Type 1 Array

const friendss = ['Prashant','Priyu','Sam','Ram'];
// console.log(friends);
// console.log(friends.includes('Priyu'));

// Type 2 Array

const year = new Array(2019,2020,2021);
console.log(year)

// calling Array

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);  // friends list me jo name hai arrays me usko call karne ke liye
console.log(friendss[friendss.length - 3]);

// changing the values of array

// friends[2] = 'Samir';
// console.log(friends);

// But we cannot change whole array at once

// friends = ['Ak', 'KK']; This is illegal in javascript

const firstNamee = 'Samir';

const data = [firstNamee,'Mandal',2022-2002,'Dhanbad','Jharkhand'];  //We can add a array inside a new array

console.log(data);
console.log(data.length);

// Exercise

const calcAgeArray = function (birthYear){
    return 2022 - birthYear;
}

const years = [1990,1897,1983,2002];

const age5 = (calcAgeArray(years[0]));
const age6 = (calcAgeArray(years[1]));
const age7 = (calcAgeArray(years[years.length - 1]));
console.log(age5,age6,age7);

const ages = [calcAgeArray(years[0]),calcAgeArray(years[1]),calcAgeArray(years[years.length - 1]),age5,age6,age7];
console.log(ages);

// Adding an element in the arraylist by using push method

const friends = ['Prashant','Priyu','Sam','Ram'];

friends.push('Priyu'); //adding to the end of array
console.log(friends);

friends.unshift('Priya');
console.log(friends);

//Remove an element from end of an array

// friends.pop(); //we don't need to pass any argument
// console.log(friends);

//Remove first element

// friends.shift(); //first element is removed
// console.log(friends);

// console.log(friends.indexOf('Priyu'));  //to find the location of an element in the array
// console.log(friends.indexOf('bob'));  // return is -1 because it's not pressent

// console.log(friends.includes('Priyu'));
// console.log(friends.includes('bob'));


// Tip calculator1

 function  calcTip(totalBill){

     const tip1 = totalBill*(15/100);
    const tip2 = totalBill*(20/100);

     if(totalBill>=50 && totalBill<=300){
        return tip1;
     }else 
       return tip2;
 }

 const bills = [125,555,44];
 const tips = [calcTip(bills[0]) , calcTip(bills[1]), calcTip(bills[2])];
  const total = [calcTip(bills[0]) + tips[0], calcTip(bills[1]) + tips[1], calcTip(bills[2]) + tips[2]];

 console.log(`Your bills are ${bills}, tips will be ${tips} and total amount is ${total}`);




// Tip calculator2

// function calcTip(Bills){
//     return Bills>=50 && Bills<=300 ? Bills*15/100 : Bills*20/100;
// }
// const Bills = [125,555,44];
//  const Tips = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])];

// const total = [125+Tip(125), Tips[1]+Bills[1], Tips[2]+Bills[2]];

//  console.log(`Your bills are ${Bills}, tips will be ${tip3},${tip4},${tip5} and total amount is `);



//Tip calculator3

// const calcTip = function(Bills){

//     if(Bills>=50 && Bills<=300){
//         return Bills*15/100;
//     }else{
//         return Bills*20/100;
//     }
// }

// const Bills = [125,555,44]; ///////
// const Tip = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])];
// const total = [calcTip(Bills[0]) + Tip[0], calcTip(Bills[1]) + Tip[1], calcTip(Bills[2]) + Tip[2]];
// console.log(`Your bills are ${Bills}, tips will be ${Tip} and total amount is ${total}`);


// Objects in javaScript 

const objectSamir = {
    firstName: 'Samir',
    lastName: 'Mandal',
    Job: 'Student',
    age: 2022-2002,
    friends: ['Priyu', 'prashant', 'Rahul']
}

// calling object using dot method
console.log(objectSamir);

console.log(objectSamir.firstName);      //#1 dot 

console.log(objectSamir['lastName']);        //#2 brackets

const name = ['Name'];   

console.log(objectSamir['first'+name]);
console.log(objectSamir['last'+name]);

// console.log(objectSamir['first'+name] +" "+ objectSamir['last'+name]);
// const interestedIn = prompt('What do you want to know Choose between lastName, Job, age, friends?');
 //That's Why we use brakets      
// console.log(objectSamir.interestedIn);    //this is not acceptable and output is undefined because interestedIn is not defined in The Object Database;


// // if the user chooses a wrong request which is not in the object list
// if(objectSamir[interestedIn]){
//     console.log(objectSamir[interestedIn]);
// }else{
//    alert('Wrong Request! Choose between firstName, lastName, Job, age and friends') ;
// }


// Challenge #3

const Samir = {
    firstName: 'Samir',
    lastName: 'Mandal',
    Job: 'Student',
    birthYear: 2002,
    friends: ['Priyu', 'prashant', 'Rahul'],
    hasDrivingLicense: true,
    

    // calcAge: function(birthYear){
    //     return 2022 - birthYear;
    // },
   
    // calcAge: function(){
    //     return 2022 - this.birthYear;
    // }

    calcAge: function (birthYear){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.Job}, and has ${this.hasDrivingLicense ? 'a': 'No'} driver's license`}
}

console.log(`${Samir.firstName} has ${Samir.friends.length} friends, and his best friend is ${Samir.friends[0]}.`);

console.log(Samir.calcAge());     // Using Dot method
console.log(Samir.age);     // Using Dot method
console.log(Samir.age);     // Using Dot method
console.log(Samir.age);     // Using Dot method

// console.log(Samir['calcAge'](2002));   // Using brakets method


// Challenge # 4

console.log(Samir.getSummary());



// Coding Challenge #3 BMI calculator using object 

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
    this.bmi = this.mass/(this.height * this.height)
    return this.bmi}
}


const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
    this.bmi = this.mass/(this.height * this.height)
        return this.bmi },
}
Mark.calcBMI();
John.calcBMI();
console.log(John.bmi)
console.log(Mark.bmi)


if(Mark.calcBMI > John.calcBMI){ 
    console.log(`${Mark.fullName}'s BMI (${Math.floor(Mark.bmi)}) is higher than ${John.fullName}'s ${Math.floor(John.bmi)}!`)
}else {
    console.log(`${John.fullName}'s BMI (${Math.floor(John.bmi)}) is higher than ${Mark.fullName}'s (${Math.floor(Mark.bmi)})!`)
}



// Loops in JavaScript

//for loop keep running while the condition is true

// for(let rep = 1; rep <=10; rep++){
//     console.log(`Masturbate in Day ${rep}`)
// }
// const nameYour = prompt(`Aapka kya Naam Hai? 🌝`)


// for(let repeat = 1; repeat <=10; repeat++){
//     console.log(`OK Karte raho!! Ek Surprise hai ${repeat}`);
// }
// alert(`Bass Ek Baar Aur ${nameYour}🥺`);

const yourName = prompt(`What's Your First Name? 😁`);
const yourLastName = prompt(`What's Your Last Name? 🙃`);

const surname = "GUPTA"

const arr = ['Tumhe Ek Baat Bataun', 'Sach Me Jaan na hai kya😂', 'Chalo phir bata deta hoon🥹']

for(let i = 0; i < arr.length; i++){
    alert(arr[i])
}
alert(`Kya tum apna Surname, ${yourLastName} se ${yourName.toUpperCase()} ${surname} karna chahoge 🥰`);












