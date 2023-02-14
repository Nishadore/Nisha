// key events

let key=document.getElementById('demo');
key.addEventListener('keydown',()=>{
    console.log('keydown');
})


let key1=document.getElementById('demo');
key1.addEventListener('keyup',()=>{
    console.log('keyup');
})


let key2=document.getElementById('demo');
key2.addEventListener('keypress',()=>{
    console.log('keypress');
})


let d=document.querySelector('button');
d.addEventListener('mousedown',()=>{
    document.body.style.padding="20px";
    document.body.style.border="10px groove red";
    document.body.style.background="yellow";
})