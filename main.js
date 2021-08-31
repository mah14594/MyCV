function opennav() {
    document.getElementById("open").style.visibility = "hidden";
if (screen.width <= 768){
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
}
else {
    document.getElementById("sidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}

}
function closenav() {
    document.getElementById("sidenav").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("open").style.visibility = "visible";

}
var skills=document.getElementById("skills");
var details=skills.querySelectorAll("i");
for (i=0;i<details.length;i++){
    details[i].classList.add("fa-plus");
}
function showskills(elem) {
    var id=elem.id;
   //for loop to give a sequence of transition for the skills details 
    var det=document.querySelectorAll("#"+id+"skills"+" "+"p:nth-child(n)") //select all p elements in this
    for (var i=0;i<det.length;i++){
        console.log(det[i]);
        det[i].style.transition=((i+1)/20)+"s ease"
    }
    console.log(det);
    if (document.getElementById(id).className == "fa fa-plus") {
        document.getElementById(id).className = "fa fa-times";
        document.getElementById(id+"skills").style.height = "100%";
    }
    else {
        document.getElementById(id).className = "fa fa-plus";
        document.getElementById(id+"skills").style.height = "0";

    }

}
