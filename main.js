
lipx=0;
lipsy=0;
function preload(){
img=loadImage("https://postimg.cc/21VQssFW");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video =createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);
}
function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(nosex,nosey,20);
image(img,nosex,nosey,30,30);
}
function take_snapshot(){
    save("filterimg.png");
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        console.log("lip x = "+result[0].pose.lip.x);
        console.log("lip y = "+result[0].pose.lip.y);
        lipx=result[0].pose.nose.x-10;
        lipy=result[0].pose.nose.y-10;
    }
}