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
