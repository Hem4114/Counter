let x=0;
document.getElementById("p1").innerHTML="0";

function restart(){
    alert("Are you sure want to reset?");
    x=document.getElementById("p1").textContent;
    x=0;
    document.getElementById("p1").innerHTML=x;
}
function counter(){
    x=document.getElementById("p1").textContent;
    x++;
    document.getElementById("p1").innerHTML=x;
}