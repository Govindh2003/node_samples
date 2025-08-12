
function feb(n){
    let n1=0
    let n2=1
  
    for(i=3;i<=n;i++){
        let n3=n1+n2
        console.log(n3)
        n1=n2
        n2=n3
    
}
}

feb(11)