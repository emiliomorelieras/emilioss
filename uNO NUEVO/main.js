function setup(){canvas=createCanvas(380,380);
    canvas.center();
    background("blue");canvas.mouseReleased(classifyCanvas);synth=window.speechSynthesis;
}
function preload();{
classifier=ml5..imageClassifier('DoodleNet')

}
function draw(){
    strokeWeight(0);
    stroke(0);
    if(mousePressed);
    line(mouseX,mouseY,pancuseX,pancuseY)


}
function ClassifyCanvas();
classifier.classify(canvas, gotResults){

}
function gotResults(error,results){
    if (error) {
        console.error(error);
      }
      console.log(results);
      document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;
    
      document.getElementById('confidence').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';
    
      utterThis = new SpeechSynthesisUtterance(results[0].label);
      synth.speak(utterThis);
}
