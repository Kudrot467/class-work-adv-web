let x=['a','b','c','d','e'];
for (let i=0;i<3;i++){
    console.log(x[i]);
}
let w=0;
while(w<4){
    console.log(x[w]);
    w++;
}
let j=0;
do{
    console.log(x[j]);
    j++;
}while(j<2);

for(let i in x){
    console.log(x[i]);
}
for(let i of x){
    console.log(i);
}