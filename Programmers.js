// class used to create programmers objects
class Programmer {
  constructor(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }

  // creates the printInfo method and applies it to all programmer objects
  printInfo() {
    console.log(`
    Name: ${this.name}
    Position: ${this.position}
    Age: ${this.age}
    Languages: ${this.language}
    `);
  };
}

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
const bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");
const joe = new Programmer("Joe Doe", "Senior Programmer", 28, "JavaScript");
const jane = new Programmer("Jane Doe", "Tech Lead", 42, "Java")
const babyDoe = new Programmer("Baby Doe", "Junior Programmer", 4, "Scratch")


// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();
joe.printInfo();
jane.printInfo();
babyDoe.printInfo();


module.exports = Programmer;