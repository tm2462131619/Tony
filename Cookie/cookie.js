var c = document.getElementById("mycanvas");
var ctx = c.getContext('2d'); 

var increment = 1;
var cookies =0;
var s =document.getElementById("score");
s.innerHTML = cookies

c.addEventListener("click",draw,true);

function draw(event) {
    cookies = cookies + increment;
    s.innerHTML=cookies;
    
    if (cookies == 20) {
        increment =2;
        award(increment,"grey");
    } else if(cookies==30){
        increment =3;
    } 
    
    if (cookies > 30) {
        c.style.backgroundImage="url('cook_bite.svg')";
    }
    
    var alpha = 1.0;
    interval = setInterval(function() {
    ctx.globalAlpha = alpha;
    ctx.font = "normal 60px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("+" + increment,event.clientX,event.clientY);
        console.log(alpha);
        alpha=alpha - 0.05;
        if (alpha <=0){
            ctx.clearRect(0,0,584,600);
            clearInterval(interval);
        }
    }, 5);
    
    
}

function award(increment,colour){
    mytab = "<table><tr>";
    mytab = mytab + "<td style='background-color:" + colour +";padding:25px;'>";
    mytab = mytab + "Congradulations! x" + increment + " cursor";
    mytab = mytab + "</td>";
    mytab = mytab + "</tr></table>";
    
    mydiv = document.getElementById("store");
    mydiv.innerHTML = mytab;
}