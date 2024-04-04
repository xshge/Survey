let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let W = canvas.width;
let x = [20,200,W*0.3, W/5, W/2, W-30, Math.floor(Math.random()*W), Math.floor(Math.random()*W), Math.floor(Math.random()*W), Math.floor(Math.random()*W), Math.floor(Math.random()*W), Math.floor(Math.random()*W)]
let y = 10;
let ballRadius = 3;
let Dy = 0.5;
let DX = 0.1;
let Gravity = 0.1;
let Weight = 10;
let bounceCount = 0;
let setInter;

function startBounce(){
    var firstT = Number(pg1Time);
    var secT = Number(pg2Time);
    var thirT = Number(pg3Time);

    if(!setInter){
        if(sessionStorage.length == 3){
            setInter= setInterval(draw, 10);
            
        }
        
    }
    if(firstT + secT + thirT >= 110){
        canvas.style.height = "264vh";
        console.log("Changed Height!");
    }
}

function drawBall(){
    ctx.fillStyle = "#f2e7c9";
    ctx.beginPath();
    for(var i = 0; i < x.length; i++){
        ctx.moveTo(x[i], y);
        ctx.arc(x[i], y, ballRadius, 0, Math.PI * 2, true);
    }
    
    ctx.fill();
    ctx.strokeStyle = "pink";
    ctx.stroke();
   
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

     drawBall();   
     for(var i = 0; i < x.length; i++){


            x[i] += DX;

            if( x[i]+ DX > canvas.width || x[i]+ DX <= 0){
                DX = -DX;
            }

        }
        
        
        Dy += Gravity * Weight;
        y += Dy;
        

        if(y + Dy > canvas.height || y + Dy <= 0 ){

            Dy = -Dy;
        }

        if ( y + Dy > canvas.height){

            bounceCount++;

            if(bounceCount >= 5){
                y = canvas.height;
                Dy = 0;
                Gravity = 0;
            }
            //for debug
            // console.log(bounceCount);
        }
}
function stopBounce(){
    console.log("clicked!");

    clearInterval(setInter);
    canvas.style.display = "none";
    setInter = null;

}

document.addEventListener("DOMContentLoaded", startBounce);

let Bn = document.querySelector('button');

canvas.addEventListener("click", stopBounce);
