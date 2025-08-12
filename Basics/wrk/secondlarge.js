function seclarge(num){

let largest=num[0]

let secondlarge=[]

for(i=0;i<num.length;i++){
    if(largest<num[i]){
        secondlarge=largest
        largest=num[i]
    }
   
}
 console.log("second Largest",secondlarge)
}
seclarge([1,2,4,5,77,65])