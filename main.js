x=0;
y=0;

circle_1="";
rectangle_1="";

var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML="Status:updating";
    recognition.start();
 
}
recognition.onResult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Status:"+content;

    if(content=="circle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Status: Circle is drawn";
        circle_1="set";
    }
    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Status: Rectangle is drawn";
        rectangle_1="set";
    }


}

function setup()
{
    canvas=createCanvas(900,600);
}

function draw()
{
    if(circle_1=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        circle_1="";
    }
    if(rectangle_1=="set")
    {
        height=Math.floor(Math.random()*100);
        width=Math.floor(Math.random()*100);
        rectangle(x,y,height,width);
        rectangle_1="";
        
    }
}
