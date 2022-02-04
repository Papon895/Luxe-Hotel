
let menuIc = document.querySelector("#menuic");
let menu = document.querySelector(".menu");
menuIc.addEventListener("click", function() {
  if (menu.style.display == "block"){
    menu.style.display = "none";
  }else {
    menu.style.display = "block";
  }
});
let homeic = document.querySelector("#home-ic");
let nestedHome = document.querySelector(".nested-home");
function nestedIcon1() {
    if (nestedHome.style.display == "block"){
    nestedHome.style.display = "none";
    document.querySelector(".menu .home").innerHTML = 'Home <i onclick="nestedIcon1()" id="home-ic" class="fas fa-chevron-down"></i>';
  }else {
    nestedHome.style.display = "block";
    document.querySelector(".menu .home").innerHTML = 'Home <i onclick="nestedIcon1()" id="home-ic" class="fas fa-chevron-up"></i>';
  }
}
let roomic = document.querySelector("#room-ic");
let nestedroom = document.querySelector(".nested-room");
function nestedIcon2() {
    if (nestedroom.style.display == "block"){
    nestedroom.style.display = "none";
    document.querySelector(".menu .room").innerHTML = 'Rooms <i onclick="nestedIcon2()" class="fas fa-chevron-down"></i>';
  }else {
    nestedroom.style.display = "block";
    document.querySelector(".menu .room").innerHTML = 'Rooms <i onclick="nestedIcon2()" class="fas fa-chevron-up"></i>';
  }
}