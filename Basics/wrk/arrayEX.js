
// 1. Creating an Empty Array
let emptyArray = [];
let anotherEmptyArray = new Array();
console.log("Empty Arrays:", emptyArray, anotherEmptyArray);

// 2. Array with Values
let numbers = [1, 2, 3, 4];
let fruits = ['apple', 'banana', 'mango'];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// 3. Using split()
let text = "Welcome to JavaScript";
let words = text.split(" ");
console.log("Split Words:", words);

// 4. Accessing Items
let myArray = [10, 20, 30];
console.log("First Item:", myArray[0]);

// 5. Modifying an Array Element
myArray[1] = 25;
console.log("Modified Array:", myArray);

// 6. Using Array Constructor
let arr = new Array(5);
console.log("Array Constructor:", arr);

// 7. Creating Static Values with fill()
let filledArray = new Array(3).fill(0);
console.log("Filled Array:", filledArray);

// 8. Concatenating Arrays
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log("Concatenated Array:", c);

// 9. Getting Length
let arrayLength = ['a', 'b', 'c'];
console.log("Length:", arrayLength.length);

// 10. indexOf()
let colors = ['red', 'blue', 'green'];
console.log("Index of 'blue':", colors.indexOf('blue'));

// 11. lastIndexOf()
let nums = [1, 2, 3, 2];
console.log("Last Index of 2:", nums.lastIndexOf(2));

// 12. Array.isArray()
console.log("Is Array [1, 2, 3]:", Array.isArray([1, 2, 3]));
console.log("Is Array {a:1}:", Array.isArray({a: 1}));

// 13. toString()
let arrStr = ['a', 'b', 'c'];
console.log("Array to String:", arrStr.toString());

// 14. join()
console.log("Joined with - :", arrStr.join('-'));

// 15. slice()
let arrSlice = [1, 2, 3, 4, 5];
console.log("Slice (1,3):", arrSlice.slice(1, 3));

// 16. splice()
let arrSplice = [1, 2, 3, 4];
arrSplice.splice(1, 2);
console.log("After Splice:", arrSplice);

// 17. push()
let pushArr = [1, 2];
pushArr.push(3);
console.log("After Push:", pushArr);

// 18. pop()
let popArr = [1, 2, 3];
popArr.pop();
console.log("After Pop:", popArr);

// 19. shift()
let shiftArr = [1, 2, 3];
shiftArr.shift();
console.log("After Shift:", shiftArr);

// 20. unshift()
let unshiftArr = [1, 2];
unshiftArr.unshift(0);
console.log("After Unshift:", unshiftArr);

// 21. reverse()
let revArr = [1, 2, 3];
revArr.reverse();
console.log("Reversed:", revArr);

// 22. sort()
let sortArr = [5, 2, 9];
sortArr.sort();
console.log("Sorted:", sortArr);

// 23. Array of Arrays
let matrix = [[1, 2], [3, 4]];
console.log("Nested Array Value [1][1]:", matrix);