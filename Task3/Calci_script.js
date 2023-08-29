// func to clear all values on the dispaly screen
function clearScreen(){
    document.getElementById("result").value="";
}

//func to display values
function display(val){
    document.getElementById("result").value +=val;
}

//function evaluates any arithematic expression and returns result
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}
