const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];
const trtstudents = students.map(stud => stud.courses);
console.log(trtstudents);

const fbfbcourses = students.flatMap(st => st.courses);
console.log(fbfbcourses);

