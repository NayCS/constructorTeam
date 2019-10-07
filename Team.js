const Programmer = require("./Programmers.js");


class Team {
    //A string value that stores the name of the project the team is completing

    constructor(project) {
        this.project = project;
        const programmers = []
    }


    addNew(name, position, age, language) {
        this.programmers.push(new Programmer(name, position, age, language))
    }

    returnTeamCount() {
        return this.programmers.length;
    }
}


