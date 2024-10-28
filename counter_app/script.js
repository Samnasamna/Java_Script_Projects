let count=0;

document.getElementById("increment").onclick = function(){
    count++;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("decrement").onclick = function(){
    count-=1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    document.getElementById("count").innerHTML = 0;
}
