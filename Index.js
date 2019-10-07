const Team = require("./Team.js");

let team = new Team("Nayely");

// read the file input
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

lineReader
    .on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        team.addNew(member[0], member[1], member[2], member[3]);
    })
    .on('close', process);


for (let i = 0; i < Team.returnTeamCount(); i++) {
    console.log(Team.programmers[i])
};

const Nayely = new Programmer("Nayely", "Master Programmer", 92, "JavaScript");
const fs = require("fs");

console.log("There are ", Team.returnTeamCount(), " team members.")