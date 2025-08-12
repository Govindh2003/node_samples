
function isprime(num){
    if(num<=1){
        return false
    }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
    
  }return true
}
function prime(num){
    for(i=2;i<num;i++){
        if(isprime(i)){
            console.log(i)
        }
    }
}

  prime(50)