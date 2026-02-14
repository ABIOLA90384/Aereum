// explore button
var exploreBtn = document.querySelector(".explore");
if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        bclick(this.id);
    });
}

// first card buttons
var firstButtons = document.querySelectorAll(".j");
firstButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        bclick(this.id);
    });
});

// second card buttons
var blogButtons = document.querySelectorAll(".blog");
blogButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        bclick(this.id);
    });
});

// rooms js
var roomButtons = document.querySelectorAll(".room-button");
roomButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        bclick(this.id);
    });
});

// All button animation
function bclick(target) {
    var elim = document.querySelector("#" + target);
    elim.classList.add("pressed");
    setTimeout(function () {
        elim.classList.remove("pressed");
    }, 200);

    alert("Developing...");
}


//explore button
// document.querySelector(".explore").addEventListener("click", function () {
//      bclick(this.id);
// });
//first card buttons
// var nbutton=document.querySelectorAll(".j").length;
// for(var i=0;i<nbutton;i++){
// document.querySelectorAll(".j")[i].addEventListener("click",function(){
//      bclick(this.id);
// });}

//second card buttons
// var nbutton=document.querySelectorAll(".blog").length;
// for(var i=0;i<nbutton;i++){
// document.querySelectorAll(".blog")[i].addEventListener("click",function(){
//      bclick(this.id);
// });}

//rooms js
// var nbutton=document.querySelectorAll(".room-button").length;
// for(var i=0;i<nbutton;i++){
// document.querySelectorAll(".room-button")[i].addEventListener("click",function(){
//      bclick(this.id);
// });}


//All button animation
// function bclick(terget) {
//      document.querySelector("#"+terget).classList.add("pressed");
//     setTimeout(function () {
//         document.querySelector("#"+terget).classList.remove("pressed");
//     }, 200);
//     alert("Developing...");

// }







