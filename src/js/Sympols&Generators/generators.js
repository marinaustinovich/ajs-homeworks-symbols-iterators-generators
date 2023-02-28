export default class TeamWithGenerator {
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
