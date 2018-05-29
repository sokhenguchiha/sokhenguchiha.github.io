var btn = document.querySelector("#btn");
var btn1 = document.querySelector(".closebtn");
var sidenav =  document.querySelector(".sidenav");

btn1.addEventListener("click",displaySideNav);
btn.addEventListener("click",openNav);

function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
}

function displaySideNav(){
  document.querySelector(".sidenav").style.width = "0px";
}

window.onclick = function(event) {
  if(event.target == sidenav){
      sidenav.style.width = "0px";
  }
}















