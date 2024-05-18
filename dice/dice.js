myCanvas = document.getElementById("myCanvas");
const result=document.getElementById("result");

const space=" ";

myCanvas.width=600;
myCanvas.height=400;


const ctx=myCanvas.getContext('2d');

ctx.moveTo(100,270);
ctx.lineTo(270,270);
ctx.stroke();

ctx.moveTo(100,270);
ctx.lineTo(100,120);
ctx.stroke();

ctx.moveTo(100,120);
ctx.lineTo(270,120);
ctx.stroke();

ctx.moveTo(270,120);
ctx.lineTo(270,270);
ctx.stroke();

ctx.moveTo(100,120);
ctx.lineTo(120,100);
ctx.stroke();

ctx.moveTo(120,100);
ctx.lineTo(290,100);
ctx.stroke();

ctx.moveTo(290,100);
ctx.lineTo(290,250);
ctx.stroke();

ctx.moveTo(290,250);
ctx.lineTo(270,270);
ctx.stroke();

ctx.moveTo(270,120);
ctx.lineTo(290,100);
ctx.stroke();





const action=(event)=>{
    const pressed=event.key
    if(space.includes(pressed)){
        const random_num = parseInt((Math.random()*6)+1);
        ctx.clearRect(20,130,150,180);
        ctx.font='10px Arial';
        ctx.fillText(random_num,130,130);
        result.innerHTML=`The dice pointing number is : ${random_num}`;
    }
}

document.addEventListener('keydown',action);
