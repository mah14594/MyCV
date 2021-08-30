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
console.log(details)
for (i=0;i<details.length;i++){
    details[i].classList.add("fa-plus");
}
function showskills(elem) {
    var id=elem.id;
    if (document.getElementById(id).className == "fa fa-plus") {
        document.getElementById(id).className = "fa fa-times";
        document.getElementById(id+"skills").style.height = "100%";
    }
    else {
        document.getElementById(id).className = "fa fa-plus";
        document.getElementById(id+"skills").style.height = "0";

    }

}
