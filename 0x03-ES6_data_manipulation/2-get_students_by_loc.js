export default function getStudentsByLocation(city) {
  return getListStudents().filter(elem, elem.city = city)
}
