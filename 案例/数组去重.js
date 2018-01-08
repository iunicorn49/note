const arr = [1,1,2,2,3,3]
function del(arr) {
  console.log(Array.from(new Set(arr)))
}
del(arr)  //  [1,2,3]
