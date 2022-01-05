let ball=document.querySelector(".ball");
let main=document.querySelector(".outer");
let box=document.querySelector(".box");
let box2=document.querySelector(".box2")
let outer=main.getBoundingClientRect();
let x=true;
let y=true;
let buttons=document.querySelector(".buttons");
let lost=document.querySelector(".lose")
let lost2=document.querySelector(".lose2")


function move(box,val){
    // let boxmove2=box2.getBoundingClientRect();
    let boxmove=box.getBoundingClientRect();
    if(boxmove.left+val>=outer.left && boxmove.right+val<=outer.right){
        box.style.left=boxmove.left+val+"px";
    // }if(boxmove2.left+val>=outer.left && boxmove2.right+val<=outer.right){
    //     box.style.left=boxmove2.left+val+"px";
    }
}


function movebox(e){
    if(e.key == "ArrowLeft"){
        move(box,-window.innerWidth*0.03)
    } else if(e.key == "ArrowRight"){
        move(box,window.innerWidth*0.03)
    }
    else if(e.key == "a"){
        move(box2,-window.innerWidth*0.05)
    }
    else if(e.key == "d"){
        move(box2,window.innerWidth*0.05)
    }
}

document.addEventListener("keydown",movebox)



function movement(){
let ballmove=ball.getBoundingClientRect();
let ballleft=ballmove.left;
let balltop=ballmove.top;
let ballbottom=ballmove.bottom;
let ballright=ballmove.right;
let boxmove=box.getBoundingClientRect();
let boxtop=boxmove.top;
let boxleft=boxmove.left;
let boxbottom=boxmove.bottom;
let boxright=boxmove.right;

let boxmove2=box2.getBoundingClientRect();
let boxtop2=boxmove2.top;
let boxleft2=boxmove2.left;
let boxbottom2=boxmove2.bottom;
let boxright2=boxmove2.right;

if(ballleft<=outer.left||ballright>=outer.right){
    x=!x
}
if(balltop-20<=boxtop2 && ballbottom>=boxbottom2 && ballleft+40>=boxleft2 && ballright-40<=boxright2){
    y=!y
}

if(balltop<=boxtop && ballbottom+20>=boxbottom && ballleft+40>=boxleft && ballright-40<=boxright||balltop<=outer.top){
    y=!y
}
if(balltop<=outer.top){
    lost2.style.display="flex"
    return;

}
if(ballbottom>=outer.bottom){
    
   lost.style.display="flex"
   return;
}

if(y==true){
    ball.style.top=balltop+2+"px"
}else{
    ball.style.top=balltop-2+"px"
}
if(x==true){
    ball.style.left=ballleft+2+"px"
}else{
    ball.style.left=ballleft-2+"px"
}


requestAnimationFrame(movement)

}
requestAnimationFrame(movement);

function refresh(){
    document.location.reload();
}


buttons.addEventListener("click",refresh)
