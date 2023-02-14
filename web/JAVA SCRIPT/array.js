let a=[1,"hello",true,false,undefined,null,function(){}]
console.log(a);
console.log(typeof a);
console.log(Array.isArray(a));

// array methhods

// push
let array=[100,200,300,400]
console.log(array.push(500,"hi"));
console.log(array);

// unshift

let array1=[100,200,300,400]
console.log(array1.unshift("000"));
console.log(array1);

// pop

let array2=[100,200,300,400];
console.log(array2.pop());  //no need to put parameters
console.log(array2);

// shift

let array3=[100,200,300,400];
console.log(array3.shift());
console.log(array3);


// slice

let array4=[200,400,650,700];
console.log(array4.slice(1,4));  //include starting index excludes ending index
console.log(array4);

// splice

let array5=[300,200,400,800,900,100]
console.log(array5.splice(2,3,"hi","hello","how"));
console.log(array5);

//fill

let array6=[1,2,3,4,5]
console.log(array6.fill(10));
console.log(array6);

//concat

let array7=[2,4,6,8,10]
let array8=["hii","bye"]
console.log(array7.concat(array8));

//includes
let array9=[2,4,6,8,10]
console.log(array9.includes(10));


//join

let array10=[2,4,6,8,10]
console.log(array10.join(""));

//reverse

let arr11=[2,4,6,8,10]
console.log(arr11.reverse());



array126=[1,2,3,4,5,6];
console.log(array126);
console.log(array126.length);
console.log(array126[9]);

array126[0]="sudeep";
console.log(array126);
array126[8]="last element";
console.log(array126);

delete array126[2];
console.log(array126);



let num=[1,2,3,4];
let dn1=num.filter(n=>n>1);
console.log(dn1);

let num1=[1,2,3,4];
let dn2=num1.filter(n=>n*2);
console.log(dn2);


let n3=[1,2,3,4,5];
let initialValue=0;
let result=n3.reduce((accu,value)=>value+accu,initialValue);
console.log(result);


console.log(Math.ceil(431.8));
console.log(Math.floor(102.6));
console.log(Math.sqrt(5));




let radCOL=Math.ceil(Math.random()*100000).toString(26);






//date

let dt=new Date();
console.log(dt);

console.log(dt.getDate());
console.log(dt.getFullYear());
console.log(dt.getDay());
console.log(dt.getMilliseconds());
console.log(dt.getMonth());


//time object
setTimeout(()=>{
    console.log("hi");

},4000)
setTimeout(()=>{
    console.log("hello");
},2000)
setInterval(()=>{
    console.log("crazy");
},3000)
setInterval(()=>{
    console.log("lazy");
},6000)

