music1 = "";
music2 = "";
function preload(){
    music1 = loadSound("1music.mp3");
    music2 = loadSound("2music.mp3");
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    canvas = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}