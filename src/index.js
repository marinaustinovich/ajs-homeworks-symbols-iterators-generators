import './css/style.css';
import Team from './js/Sympols&Iterators/iterators';
import Character from "./js/Sympols&Iterators/Character";
import TeamWithGenerator from "./js/Sympols&Generators/generators";
import canIterate from "./js/Generators/app";

// for the first task
const myTeam = new Team();
const first = new Character('Marina', 'Bowerman', 50, 50);
const second = new Character('Ann', 'Daemon', 40, 20);
const third = new Character('John', 'Daemon', 40, 20);
const fourth = new Character('Jane', 'Bowerman', 50, 50);
myTeam.addAll(first, second, third, fourth);

/* eslint-disable-next-line */
for (const person of myTeam) {
  /* eslint-disable-next-line */
  console.log('person of myTeam ', person);
}




// for the second task
const twoTeam = new TeamWithGenerator();
twoTeam.addAll(first, second, third);

/* eslint-disable-next-line */
for (const person of twoTeam) {
  /* eslint-disable-next-line */
  console.log('person of myTeam with generator', person);
}

// for the third task
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
