
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
    let arr=[]
    for(i=2;i<num;i++){
        if(isprime(i)){
            arr.push(i)
            
        }
        
    }
    console.log(arr)
}


  prime(50)