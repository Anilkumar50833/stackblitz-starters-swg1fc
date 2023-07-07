const students = [
  { name: 'Anil', chemistryMarks: 80, biologyMarks: 90, dob: '01-02-1999' },
  { name: 'jashu', chemistryMarks: 85, biologyMarks: 80, dob: '15-03-2000' },
  { name: 'swathi', chemistryMarks: 90, biologyMarks: 90, dob: '25-01-1998' },
];

function compareStudents(a, b) {
  if (a.chemistryMarks + a.biologyMarks !== b.chemistryMarks + b.biologyMarks) {
    return (
      b.chemistryMarks + b.biologyMarks - (a.chemistryMarks + a.biologyMarks)
    );
  }

  if (a.biologyMarks !== b.biologyMarks) {
    return b.biologyMarks - a.biologyMarks;
  }

  return 0;
}
students.sort(compareStudents);
console.log(students);
