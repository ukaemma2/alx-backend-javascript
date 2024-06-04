export default function getStudentsByLocation(data, city) {
  const studentsInCity = data.filter((x) => x.location === city);
  return studentsInCity;
}
