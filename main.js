function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
      
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on('pose', gotPose);
}
function draw(){
background("#00fbff");
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPose(Results){
if(Results.length > 0)
{
    console.log(results);
}
}