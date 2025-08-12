// const rectangle = {
//   length: 20,
//   width: 20
// }
// console.log(rectangle) 

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//   ],
//   isMarried: true
// }
// console.log(person)



// const person = {
//   firstName: 'G',
//   lastName: ' P',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//   ],
//   getFullName: function() {
//     return `${this.firstName}${this.lastName}`
//   },
//   'phone number': '+91 8139070361'
// }


// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location)
// console.log(person.getFullName())
// console.log(person['phone number'])



// let a = 5
// let b = 10

// console.log("Before swap: a =", a, "b =", b)

// [a, b] = [b, a]; 

// console.log("After swap: a =", a, "b =", b)

// function checkNumber(num) {
//   if (num > 0) {
//     console.log("The number is positive.")
//   } else if (num < 0) {
//     console.log("The number is negative.")
//   } else {
//     console.log("The number is zero.")
//   }
// }

// checkNumber(-2)

// let num = 123
// let str = num.toString()
// console.log(str)       
// console.log(typeof str)



// let num = 15

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Number is divisible by both 3 and 5")
// } else {
//   console.log("Number is not divisible by both 3 and 5")
// }



// function containsLetter(str, letter) {
//   if (str.includes(letter)) {
//     console.log(`The letter '${letter}' is found in '${str}'`)
//   } else {
//     console.log(`The letter '${letter}' is NOT found in '${str}'`)
//   }
// }


// containsLetter("javascript", "s")



// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverseString("javascript"))  

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1
// }


// console.log(getRandomNumber())



// let array = [1, 2, 3, 4, 5]
// let sum = 0

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     sum += array[i]
//   }
// }

// console.log("Sum of even numbers:", sum)



let array = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < array.length; i++) {
  sum += array[i]
}

let average = sum / array.length

console.log("Average:", average)


