
let string='govindh'
function vowels(){


let count=0

let abb='aeiouAEIOU'
for(i=0;i<=string.length;i++){
    if(abb.includes(string[i])){
        count++
    }
    

}
console.log(count)
}

vowels()