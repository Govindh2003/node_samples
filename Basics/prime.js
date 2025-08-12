function Prime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


console.log(Prime(2));  
console.log(Prime(1));  
console.log(Prime(6));  
console.log(Prime(8));  