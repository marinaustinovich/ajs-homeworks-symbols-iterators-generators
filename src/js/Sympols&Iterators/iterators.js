import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    this.toArray();
    const arrayPerson = this.members;
    let start = -1;
    const end = this.members.length - 1;

    return {
      next() {
        if (start < end) {
          start += 1;
          return {
            done: false,
            value: arrayPerson[start],
          };
        }

        return {
          done: true,
        };
      },
    };
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
const fourth = new Character('Jane', 'Bowerman', 50, 50);
myTeam.addAll(first, second, third, fourth);

/* eslint-disable-next-line */
for (const person of myTeam) {
  /* eslint-disable-next-line */
  console.log('person of myTeam ', person);
}
