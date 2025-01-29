let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
    // count = 0;
}
function save(){
    let countStr = " "+ count + " - ";
    saveEl.innerText += countStr;
   count = 0;
   countEl.innerText = 0;

}