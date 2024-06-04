export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
    return [];
  }
  const index = objectsArray.map((x) => x.id);
  return index;
}
