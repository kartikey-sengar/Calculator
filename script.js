// Todo: Make M+ M- and MC functional
let screen=document.getElementById("screen");
let string="";
let memory=0;

function addToScreen(value){
    string=string+value;
    screen.value=string;
}

document.getElementById("btn0").addEventListener("click",()=>{
    addToScreen("0");
})
document.getElementById("btn1").addEventListener("click",()=>{
    addToScreen("1");
})
document.getElementById("btn2").addEventListener("click",()=>{
    addToScreen("2");
})
document.getElementById("btn3").addEventListener("click",()=>{
    addToScreen("3");
})
document.getElementById("btn4").addEventListener("click",()=>{
    addToScreen("4");
})
document.getElementById("btn5").addEventListener("click",()=>{
    addToScreen("5");
})
document.getElementById("btn6").addEventListener("click",()=>{
    addToScreen("6");
})
document.getElementById("btn7").addEventListener("click",()=>{
    addToScreen("7");
})
document.getElementById("btn8").addEventListener("click",()=>{
    addToScreen("8");
})
document.getElementById("btn9").addEventListener("click",()=>{
    addToScreen("9");
})
document.getElementById("dot").addEventListener("click",()=>{
    addToScreen(".");
})
document.getElementById("add").addEventListener("click",()=>{
    addToScreen("+");
})
document.getElementById("minus").addEventListener("click",()=>{
    addToScreen("-");
})
document.getElementById("multiply").addEventListener("click",()=>{
    addToScreen("*");
})
document.getElementById("divide").addEventListener("click",()=>{
    addToScreen("/");
})
document.getElementById("percent").addEventListener("click",()=>{
    addToScreen("%");
})
document.getElementById("equal").addEventListener("click", ()=> {
    try {
        string = eval(string).toString();
        screen.value = string;
    } catch (error) {
        screen.value = "Error";
        string = "";
    }
})
document.getElementById("clear").addEventListener("click",() => {
    string = "";
    screen.value = "";
});