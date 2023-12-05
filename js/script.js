var a1=false;
var a2=false;
var a3=false;
var a4=false;
var a5=false;
var a6=false;
var j;
var c=["#ff0000", "#00b400","#0000ff","#00ffff","#ff00ff","#ffff00","#000000","#ffffff"];
$("#box1").on("click", function(){
    console.log('1');
     if(a1==true){
        $(this).css("transform", "translate(-100px, -100px)");
        a1=false;
    }
    else{
        $(this).css("transform", "translate(150px, 150px)");
        a1=true;
    }
});
$("#box2").on("click", function(){
    console.log('2');
    if(a2==true){
        $(this).css("transform", "translate(0px, -100px)");
        a2=false;
    }
    else{
        $(this).css("transform", "translate(0px, 100px)");
        a2=true;
    }
});
$("#box3").on("click", function(){
    if(a3==true){
        $(this).css("transform", "translate(100px, -100px)");
        a3=false;
    }
    else{
        $(this).css("transform", "translate(-100px, 100px)");
        a3=true;
    }
});
$("#box4").on("click", function(){
    if(a4==true){
        $(this).css("transform", "translate(0px, 100px)");
        a4=false;
    }
    else{
        $(this).css("transform", "translate(0px, -100px)");
        a4=true;
    }
});
$("#box5").on("click", function(){
    if(a5==true){
        $(this).css("transform", "translate(-100px, 100px)");
        a5=false;
    }
    else{
        $(this).css("transform", "translate(100px, -100px)");
        a5=true;
    }
});
$("#box6").on("click", function(){
    if(a6==true){
        $(this).css("transform", "translate(100px, 100px)");
        a6=false;
    }
    else{
        $(this).css("transform", "translate(-100px, -100px)");
        a6=true;
    }
});
$(Document).on("keypress", function (e) {
    if (e.key == ' ') {
        j=Math.floor(Math.random()*c.length);
        $("body").css("background-color", c[j]);
    }
});