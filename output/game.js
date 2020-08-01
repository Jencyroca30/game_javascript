"use strict";

var container = document.querySelector(".container");
var startGame = document.getElementById('startgame');
var scoreArea = document.querySelector(".score");
var player = {
  score: 0
}; //console.log(startGame);

startGame.addEventListener("click", function () {
  startGame.style.display = "none";
  var ranTime = Math.random() * 2000 + 1000;
  setTimeout(makeItem, ranTime); //console.log(ranTime);
});

function makeItem() {
  var boundary = container.getBoundingClientRect();
  console.log(boundary);
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = Math.random() * boundary.width + "px";
  div.style.top = Math.random() * boundary.height + "px";
  div.style.width = Math.random() * 10 + 40 + "px";
  div.style.height = Math.random() * 10 + 40 + "px";
  div.style.borderRadius = "10%";
  div.style.cursor = "pointer";
  div.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
  div.toString(16).substring(-6);
  div.style.border = "1px solid black";
  div.startTime = Date.now();
  div.addEventListener("click", function () {
    var endTime = Date.now();
    var diff = (endTime - div.startTime) / 1000;
    scoreArea.innerHTML = "Clicked in:" + " " + diff + " " + "seconds"; //startGame.style.display="block"; 

    clearTimeout(div.timer);
    makeItem();
    container.removeChild(div);
  });
  div.timer = setTimeout(function () {
    container.removeChild(div);
    makeItem();
  }, 1000);
  container.appendChild(div);
  container.appendChild(div);
  console.log(div);
}