const promotionMessages = [
    "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
    "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
    "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"
];

const msg = document.getElementById("message");

let flag = false;

let rand = Math.floor(Math.random() * 3);

var currMsg = promotionMessages[rand];
msg.innerText = currMsg;

function changeMsg() {
    rand++;
    currMsg = promotionMessages[rand % promotionMessages.length];
    msg.innerText = currMsg;
}

const videos = [
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4"
];

let vidIndex = 0;

function switchVideo() {
    vidIndex = (vidIndex + 1) % videos.length;
    const videoPlayer = document.getElementById('videoCircle');
    videoPlayer.src = videos[vidIndex];
    videoPlayer.play();
}

function nonEmpty(){
    var f1 = document.getElementById("dateInput").value.trim();
    var f2 = document.getElementById("timeInput").value.trim();
    var f3 = document.getElementById("noVisitors").value.trim();
    var warning = document.getElementById('warning');
    if (f1 == '' || f2 == '' || f3 == ''){
        warning.style.display = 'block';
        return false;
    } 
}

//Functional calls
setInterval(changeMsg, 3000);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('videoCircle').addEventListener('ended', switchVideo);
});
