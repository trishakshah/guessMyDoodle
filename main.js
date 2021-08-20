function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyDrawing);
}

function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(8);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function erase(){
    background("white");
}

function classifyDrawing(){
    classifier.classify(canvas,guess);
}

function guess(error,result){
    if (error){console.error(error);}
    else {console.log(result);
    document.getElementById("output").innerHTML=result[0].label;
    confidence=result[0].confidence*100;
    document.getElementById("confidence").innerHTML=confidence+"%";
    }
}