let incrButt = document.querySelector("#incrButton");
let counter = document.querySelector("#Counter");
let reset = document.querySelector("#resetButton");
let count = 0;
let saveEle = document.getElementById("save-ele");
let saveText = saveEle.innerText;
let totalContainer = document.getElementById("total");
let total = 0;

incrButt.addEventListener("click",incrFunc);
reset.addEventListener("click",resetFunc);

function incrFunc(){
    count += 1;
    counter.textContent = count;
    console.log(count);

}

function resetFunc(){
    count = 0
    counter.textContent = 0;
    saveEle.innerText = saveText;
    total = 0;
    totalContainer.style.display = "none";
    saveEle.style.display = "none";
}
let saveCount = 0;

function saveFunc(){
    saveCount += 1;
    saveEle.style.display = "block";
    let countStr = count + " - ";
    saveEle.textContent += countStr;
    total += count;
    //setting count = 0 to count the passengers of next batch from 0
    count = 0;
    counter.textContent = 0;
    if(saveCount <=1){
          // Get the snackbar DIV
    let snack = document.getElementById("snackbar");

    // Add the "show" class to DIV
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
    }
   
}

function totalFunc(){
    totalContainer.style.display = "block";
    console.log(total);
    totalContainer.textContent = "Total Passengers : " + total;
}

let mode =  document.getElementById("mode-changer");
let bodyEle = document.body;
const inner =  document.getElementById("mode-changer").innerHTML

function changeMode(){
    if(mode.textContent == inner){
        mode.textContent = "🌑";
    }
    else{
        mode.textContent = inner;
    }
    bodyEle.classList.toggle("dark-mode");
    
}
