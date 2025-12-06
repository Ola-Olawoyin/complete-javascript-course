// function logger() {
//     console.log('my name is Ola')
// }

//Invoking/Calling/Running the function
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const fruitJuice = fruitProcessor(3, 4)
// console.log(fruitJuice)

// const orangeJuice = fruitProcessor(0, 4)
// console.log(orangeJuice)

/*
  A function is like a machine that can both accept input and return a value
  The input are called parameters or arguments. These are variables specific to the function

  Function Declaration
  ---------------------
  A declared function can be called/invoked before they are declared
  This happens because of a process called hoisting!
*/
// function calcAgeOne(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
// const myAge = calcAgeOne(1982)
// console.log(myAge)

/*
  Function Expression
  --------------------
  A function without a name is called an anonympus function
  Functions are just values so they can be stored in a variable
  Below calcAgeTwo is a variable
  An expressed function cannot be called/invoked before they are expressed
*/
// const calcAgeTwo = function (birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
// const adeAge = calcAgeOne(1983)
// console.log(adeAge)

// 
/*
Arrow functions
-----------------
The arrow function does not take a this keyword!
*/

// const yearsUntilRetirment = (birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age
//     return retirement
// }
// const retires = yearsUntilRetirment(2013)
// console.log(retires)

/*
functions calling function
*/

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = ` Fruit Juice made with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`
//     return juice;
// }

// console.log(fruitProcessor(3, 4))

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// const yearsUntilRetirment = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age
//     if (retirement > 0) {
//         return `${firstName} retires ${retirement} years`
//     }
//     else {
//         return `${firstName} already retired ${-retirement} years ago`
//     }
// }

// console.log(yearsUntilRetirment(1982, 'Ola'))
// console.log(yearsUntilRetirment(1970, 'Sola'))

// const calcAverage = (scoreOne, scoreTwo, ScoreThree) => (scoreOne + scoreTwo + ScoreThree) / 3


// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// //console.log(scoreDolphins, scoreKoalas)

// const checkWinner = (scoreDolphins, scoreKoalas) => {

//     if (scoreDolphins >= scoreKoalas * 2) {
//         return console.log(`Dolphin win (${scoreDolphins} vs ${scoreKoalas})`)
//     }
//     else if (scoreKoalas >= scoreDolphins * 2) {
//         return console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
//     }
//     else { return console.log(`No team wins (${scoreDolphins} vs ${scoreKoalas})`) }

// }

// checkWinner(scoreDolphins, scoreKoalas)

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas)

const bioData = {
  firstName: 'Ola',
  lastName: 'Adewale',
  birthYear: 1985,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false
  // calcAge: function () {
  //   return 2025 - this.birthYear
  // },
  // getSummary: function () {
  //   return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  //}

}
//const interestedIn = prompt('What do you want to know about me? Choose between my first name, last name, age, job and friends')

//console.log(bioData[interestedIn])

// bioData.location = 'London';
// bioData['twitter'] = '@olawoyin'
// console.log(bioData)

// Challenge
// "Ola has 3 friends, and his best friend is called Michael"

//console.log(`${bioData.firstName} has ${bioData.firstName.length} friends, and his best friend is called ${bioData.friends[0]}.`)

//console.log(bioData.getSummary())
// for (let key in bioData) {
//   console.log(bioData[key])
// }

const getLottoNums = function () {
  const nums = []

  while (nums.length < 6) {
    let randomNum = Math.ceil(Math.random() * 47)

    if (randomNum !== 17 && randomNum !== 39) {
      continue
    }
    else if (!nums.includes(randomNum)) {
      nums.push(randomNum)
    }
  }
  return nums
}

console.log(getLottoNums())