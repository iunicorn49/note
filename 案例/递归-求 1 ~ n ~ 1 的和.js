function add(og, num) {
  let n = num ? num : 0
  n += (og - 1) * 2 + 1
  return og === 1 ? n : add(og - 1, n)
}
console.log(add(10));
