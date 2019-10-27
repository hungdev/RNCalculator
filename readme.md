1. Functional programming

  ```
const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];
```

Use es6 built -in functional method(map, filter, sort, reduce, etc) to:

a.Sum of all odd number in array

b.Sum of all unique odd number in array

  ```
function getSumOfOddNum(arr) {
  return arr.reduce((acc, cur) => cur % 2 ? (acc + cur) : acc, 0);
}
```

Part a

  ```
const oddArr = getSumOfOddNum(numbers);
console.log(oddArr);
```

Part b

  ```
const uniqArr = getSumOfOddNum(Array.from(new Set(numbers)));
console.log(uniqArr);
```

2. App programming