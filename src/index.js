import './css/style.css';
import Team from './js/Sympols&Iterators/Team';
import Character from './js/Sympols&Iterators/Character';
import TeamWithGenerator from './js/Sympols&Generators/TeamWithGenerator';
import canIterate from './js/Generators/canIterate';

// for the first task
const team1 = new Team();
const first = new Character('Marina', 'Bowerman');
const second = new Character('Ann', 'Daemon');
const third = new Character('John', 'Daemon');
const fourth = new Character('Jane', 'Bowerman');
team1.addAll(first, second, third, fourth);

// eslint-disable-next-line no-restricted-syntax
for (const person of team1) {
  /* eslint-disable-next-line */
  console.log('person of team1 ', person);
}

// for the second task
const team2 = new TeamWithGenerator();
team2.addAll(first, second, third);

// eslint-disable-next-line no-restricted-syntax
for (const person of team2) {
  /* eslint-disable-next-line */
  console.log('person of team2 with generator', person);
}

// for the third task
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
