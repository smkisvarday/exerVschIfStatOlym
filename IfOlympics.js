if(5>3){
    console.log("is greater than")
}

var animal = "cat"

if(animal.length === 3){
    console.log("is the length")
}

if(animal == "dog"){
    console.log("is the same")
} else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

  if (person.age >= 18) {
      console.log(person.name + " is allowed to go to the movie")   
  } else {
      console.log( person.name + " is NOT allowed to go to the movie")
  }

  if (person.name.charAt(0)==="B") {
    console.log(person.name + " is allowed to go to the movie")   
  } else {
    console.log( person.name + " is NOT allowed to go to the movie")
  }
  
  if (person.name.charAt(0)==="B" && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")   
  } else {
    console.log( person.name + " is NOT allowed to go to the movie")
  } 

  if (1==="1") {
      console.log("strict")
  } else if (1=="1") {
      console.log("loose")
  } else {
      console.log("not equal at all")
  }


  if (1 <= 2 && 2 === 4) {
      console.log("yes")
  } else {
      console.log("no")
  }

  if (typeof "dog" === 'string') {
      console.log("this is a string")
  } else {
    console.log("this is NOT a string")
  }

  if (typeof "true" === 'boolean') {
    console.log("this is a boolean")
  } else {
    console.log("this is NOT a boolean")
  }

  if (typeof animal !== "undefined") {
    console.log("this variable has been defined")
  } else {
    console.log("this variable has NOT been defined")
  }

  if ("s" > 12) {
      console.log("true")
  } else {
    console.log("false")
  }

  number = 455

  if (number % 2 == 0) {
      console.log("The number is even.")
  } else {
    console.log("The number is odd.")
  }