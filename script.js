let display=document.getElementById("display");
function numShow(num){
    display.value+=num;
}
function ClearAll(){
   display.value="";
}

function calculate(){
    let x=display.value;
    let y= eval(x);
    display.value=y;
}