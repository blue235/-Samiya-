// 🌸 Fade In Animation

document.body.style.opacity = "0";

window.onload = function(){

document.body.style.transition = "opacity 0.8s";

document.body.style.opacity = "1";

};



// ✨ Mouse Sparkles

document.addEventListener("mousemove",function(e){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.classList.add("mouseSparkle");

sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},900);

});



// 💖 Hearts when clicking

document.addEventListener("click",function(e){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.classList.add("heart");

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1200);

});



// 🌸 Falling Petals

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.classList.add("petal");

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=(Math.random()*4+4)+"s";

petal.style.fontSize=(Math.random()*15+20)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},8000);

}

setInterval(createPetal,600);



// 🫧 Floating Bubbles

function createBubble(){

const bubble=document.createElement("div");

bubble.classList.add("bubble");

bubble.style.left=Math.random()*window.innerWidth+"px";

bubble.style.width=(Math.random()*20+10)+"px";

bubble.style.height=bubble.style.width;

document.body.appendChild(bubble);

setTimeout(()=>{

bubble.remove();

},8000);

}

setInterval(createBubble,1000);