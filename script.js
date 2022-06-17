function getLongerNmae(...str) {
   let min = str[0]
   for (let car of str) {
      if (car.length > min.length) {
         min = car;
      }
   }
   console.log(min);
}

getLongerNmae('Alex', 'jordan', 'michael', 'morgenshtern')



function min(a, b) {
   if (typeof a === 'number') {
      console.log(Math.min(a));
   }
   // if (Array.isArray(a)) {
   //    console.log(Math.min(...a));
   // }
   if(typeof a === 'object') {
      let value = Object.values(a)
      console.log(Math.min(...value));
   }
   if (typeof a === 'object' && typeof b === 'object') {
      let value = Object.values(a)
      let values = Object.values(b)
      console.log(Math.min(...value), Math.min(...values));
   }
}

min(1, 2)
min([1, 2])
min({ a: 1, b: 2})
min({ a: 1, b: 2}, { a: 11, b: 12})