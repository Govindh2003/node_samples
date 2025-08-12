let nameArray = []
let ageArray = []
let marksArray = []

function student_array(name, age, mark) {
  if (age >= 18 && age <= 30 && mark >= 0 && mark <= 50) {
    nameArray.push(name)
    ageArray.push(age)
    marksArray.push(mark)
  } else {
    console.log("U donot have all of the Requirements")
  }
  console.log(nameArray, ageArray, marksArray)
}

function average_using_while() {
  let sum = 0
  let i = 0
  while (i < marksArray.length) {
    sum += marksArray[i]
    i++
  }

}