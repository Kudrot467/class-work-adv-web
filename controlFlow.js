let age=19;
if(age >= 18){
    console.log("Adult");
}else if(age>=13){
    console.log('Teenager');
}else{
    console.log("Minor");
}
let age2=19;
let status;
switch(true){
    case age2 >=18:
        status="Adult";
        break;
    case age2 >=13:
        status="Teenager";
        break;
        default:
            status="Minor";
}
console.log(status);