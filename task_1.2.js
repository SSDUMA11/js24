let arr = [1,2,3,4,5,6,7,8,9,10]
const sumArray = (arr) => (arr.length === 0) ? 0 : arr[0] + sumArray(arr.slice(1));
console.log(sumArray(arr));