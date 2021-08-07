noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/JnGdjZgx/istockphoto-851634552-612x612-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(720,320);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
    console.log("Posenet is Active!😎");
    poseNet.on("pose", IGTPose);
}

function IGTPose(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video,0,0,500,400);
    fill (255,0,0);
    stroke (255,0,0);
    image(clown_nose,noseX-40,noseY-40,80,80);
}

function snap(){
    save ('clownNose.png');
}