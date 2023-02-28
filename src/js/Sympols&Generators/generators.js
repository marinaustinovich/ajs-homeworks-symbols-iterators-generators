import Character from '../Sympols&Iterators/Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    this.toArray();
    for (let i = 0; i < this.members.length; i += 1) {
      yield this.members[i];
    }
  }

  add(newPerson) {
    const { size } = this.members;
    this.members.add(newPerson);

    if (size === this.members.size) {
      throw new Error('The value isn`t unique');
    }
  }

  addAll(...newPeople) {
    newPeople.forEach((size) => this.members.add(size));
  }

  toArray() {
    this.members = [...this.members];
  }
}

const myTeam = new Team();
const first = new Character('Marina', 'Bowerman', 50, 50);
const second = new Character('Ann', 'Daemon', 40, 20);
const third = new Character('John', 'Daemon', 40, 20);

myTeam.addAll(first, second, third);

/* eslint-disable-next-line */
for (const person of myTeam) {
  /* eslint-disable-next-line */
  console.log('person of myTeam with generator', person);
}
