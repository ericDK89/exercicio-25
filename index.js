const arr = [
  {
    name: "Aluno 1",
    grade: 5,
  },
  {
    name: "Aluno 2",
    grade: 7,
  },
  {
    name: "Aluno 3",
    grade: 10,
  },
  {
    name: "Aluno 4",
    grade: 3,
  },
  {
    name: "Aluno 5",
    grade: 6,
  },
];

const studentsWhoPassed = () => {
  console.log(arr.filter((student) => student.grade >= 6));
};

studentsWhoPassed();
