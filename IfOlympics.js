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

 