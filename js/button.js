var myVideo = document.getElementById("myVideo");
var bgVideo = document.getElementById("bgVideo");
function playPause(){
    if(myVideo.paused){
        bgVideo.src = "";
        myVideo.play();
} else {
    myVideo.pause();
}
}
    
function playMusic(a){
    myVideo.src = a;
    bgVideo.src = "";
    myVideo.play();
}

function stopMusic(){
    myVideo.src = "";
    bgVideo.src = "video/video.mp4"
    bgVideo.play();
}    
