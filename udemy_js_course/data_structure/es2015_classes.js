class Student {
  constructor(firstname, lastName) {
    this.Name = firstname;
    this.Surname = lastName;
    this.scores = [];
  }

  fullName() {
    return `Your full Name is ${this.Name} ${this.Surname}`;
  }

  addScore(score) {
    this.scores.push(score);
  }
  calculateAvg() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });

    return this.scores.length > 0 ? sum / this.scores.length : 0;
  }

  //nothing to do with single instance.
  static enrollStudents() {
    return "Enrolling";
  }
}
let f = new Student("Inno", "Zvovu");
//f.addScore(99);
//f.addScore(87);

console.log(Student("Inno", "Zvovu").enrollStudents());
