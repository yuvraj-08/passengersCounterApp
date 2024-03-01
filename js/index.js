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

function saveFunc(){
    saveEle.style.display = "block";
    let countStr = count + " - ";
    saveEle.textContent += countStr;
    total += count;
    //setting count = 0 to count the passengers of next batch from 0
    count = 0;
    counter.textContent = 0;
}

function totalFunc(){
    totalContainer.style.display = "block";
    console.log(total);
    totalContainer.textContent = "Total Passengers : " + total;
}