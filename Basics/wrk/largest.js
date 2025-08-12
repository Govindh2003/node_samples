
let array=[11,2,3,8,4,5,6,9]
function largestNum(){
  let maximum=array[0]
  for (i=0;i<array.length;i++){
    if(maximum<array[i]){
      maximum=array[i]
    }
}
console.log(maximum)
}
largestNum()


////////////max()


function largest(){
  let maximum=Math.max(array)
  console.log(maximum)
}
largest()