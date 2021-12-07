
function preload(){

}
function setup(){
    function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        video =createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video,modelloaded);
        poseNet.on("pose",gotposes);
        }
}
function draw(){
    image(video,0,0,300,300);
    }
    function take_snapshot(){
        
    }
    function modelloaded(){
        console.log("poseNet is initialized");
    }
    function gotposes(result){
        if(result.length>0){
            console.log(result);
            console.log("nose x = "+result[0].pose.nose.x);
            console.log("nose y = "+result[0].pose.nose.y);
        }
    }