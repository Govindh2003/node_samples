let array=[]
function arIndex (name)
{

if (array.indexOf (name)==-1){
    array.push(name)
    console.log(array)
}
else{
    console.log(name,"ALREADY EXIST")
}
}
arIndex("GOVINDH")
arIndex("SHIVA")
arIndex("ATHULYA")
arIndex("GOVINDH")