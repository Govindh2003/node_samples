function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"))

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("malayalam"))

let arr=[10,20,30,40,50]


function findLargestNumber(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.max(...arr);
}

console.log(findLargestNumber(arr))




function removeFirstElement(arr) {
    
    return arr.slice(1);
}
console.log(removeFirstElement(arr))


function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}





function findMinimumValue(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.min(...arr);
}

console.log(findMinimumValue(arr))




function findMinimumValue(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.min(...arr);
}
console.log(findMinimumValue(arr))


let str=['g','o','v','i','n','d','h']

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
     
console.log(countVowels(str))




function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers(arr))



function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumPositiveNumbers(arr))



function findSecondHighest(arr) {
    if (arr.length < 2) {
        return undefined; 
    }
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length >= 2 ? uniqueSorted[1] : undefined;
}

console.log(findSecondHighest(arr))





