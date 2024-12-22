//javascript basics 
//non primitive datatypes
const student={
    fullName : "sowmya",
    age :19,
    grade: 9.2,
    ispass : true
};
console.log(student.age);
console.log(student);

//operators in js
let a= 10;
let b=15;
console.log("a=",a,"&b=",b)

console.log("a+b=",a+b);

console.log("a-b",a-b);
console.log(a*b)

console.log(a**2);

console.log(a++,b--);

console.log("a=",a,"&b=",b);
//assignment operators
console.log(a+=a);
let age=19;
age >= 18 ? "vote":"can't vote";
//alert
// alert("hello!!!");
// //promt -- can also take input from user
// let name=prompt("hello!!!")
// console.log(name);

// //check a num user entered is a mutliple of 5
// let num = prompt("enter a number:");
// if(num%5 == 0){
//     console.log(num,"multiple of 5");
// }
// else{
//     console.log(num,"not a multiple of 5");
// }

let score=89;
if(score>=80 && score<=100){
    console.log("A");
}
else if(score>=70 && score<=79){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=50 && score<=59){
    console.log("D");
}
else{
    console.log('F');
}

//loops in js
//for loop 
for(let i=1;i<=50;i++){
    console.log("js");
}
//calculate sum of first n numbers 
let sum =0;
let n=prompt("enter a num:");
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("sum:",sum);
//while loop 
let i=0;
while(i<=5){
    console.log(i);
    i++;
}
//do while loop
let j=20;
do{
    console.log(j);
    j++;
}while(j<=10);
//here it prints one time and then start cheking the condition in while loop if falde stop execution orelse executes again
//for in
console.log("new ");
let str="sowmya";
for( let i of str){
    console.log(i);
}
//for of
let students={
    name:"sowmya",
    age:19,
    cgpa:9.1,
    isPass:true,
};
for(let k in students){
    console.log(k,students[k]);
}
//to print all even numbers from 1 to 100
for(let num=0;num<=10;num++){
    if(num%2===0){
        console.log(num);
    }
}

//use strings 
//take an input name from user without spaces and make it an username(@ at first and then fullname and length of fullname)
let fullName=prompt("enter name:");
console.log("@",fullName,fullName.length);


//array
//calc avg marks of students in an array
let marks=[85,97,44,37,76,60];
let total=0;
for (let i of marks){
    total+=i;
   
}
console.log(total/marks.length);
//change the offer of array to 10% 
let items=[250,645,300,900,50];
for (let i of items){
   let offer=i*0.1;
    i-=offer;
    console.log(`price of each item ${i}`);
}
console.log(items);
