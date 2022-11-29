function combine(...objectArr) {
   const objKeysArr = objectArr.map(obj => Object.entries(obj));
   const resultObj = {};

   for (let i = 0; i < objKeysArr.length; i++) {
      if (objKeysArr.includes(objKeysArr[i])) {
         resultObj += objKeysArr[i]
      }
   }
}


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB)