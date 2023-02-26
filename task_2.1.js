 function deepCount(arr) {
    let count = 0;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        count += deepCount(item); 
      }
      count++; 
    });
    return count;
}
console.log(deepCount ([]));
console.log(deepCount ([1,2,3]));
console.log(deepCount (["x","y",["z"]]));
console.log(deepCount ([1,2, [3,4, [5]]]));
console.log(deepCount ([[[[]]]]));