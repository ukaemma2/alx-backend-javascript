export default function hasValuesFormArray(set, array) {
  return array.every((elem) => set.has(elem));
}
