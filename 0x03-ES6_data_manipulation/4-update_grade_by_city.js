function getGrade(grades, id) {
  const grade = grades.find((g) => g.studentId === id);
  return grade ? grade.grade : 'N/A';
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((s) => s.location === city)
    .map((s) => ({ ...s, grade: getGrade(newGrades, s.id) }));
}
