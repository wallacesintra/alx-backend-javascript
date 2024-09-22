export default function getListStudentIds(arr) {
  let idArr = [];
  if (arr instanceof Array) {
    idArr = arr.map((item) => item.id);
  }

  return idArr;
}
