// ananymous function:-

let a20=function(){
    console.log("hello");
}
a20()

function demo(){
    console.log("naughty class");
}
demo()

// named function:-

function demo(){
    console.log("wwwwwwww");
}
// console.log(demo);
// console.log(demo());
demo()



// first class function:-
let s=function(){
    console.log("abcd");
    
}
s()

// function with expression:-

let d1=function()
{
    console.log("xyz");
}
d1()

// arrow function

let s1=()=>{
    console.log("Good afternoon");
}
s1()
console.log(typeof s1);


// iife

(function(){
    console.log("i am iife");
})()


// hof

function hof(a,b,task){
    res=task(a,b);
}
let add=(20,20,function(a,b){
    return 20+20;
})
console.log(add());


let sub=(60,80,function(a,b){
    return 60-80;
})
console.log(sub());

let mul=(20,30,function(a,b){
    return 20*30;
})
console.log(mul());


let div=(10,20,function(a,b){
    return 10/20;
})
console.log(div());

// nested function

function one(){
    var a=10;
    function two(){
        var b=25;
        console.log(a);
        console.log(b);
    
    function three()
    {
        var c=35;
        console.log(b);
        console.log(c);
    }
    return three;
}
return two;
}

one()()()
