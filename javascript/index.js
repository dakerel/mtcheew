
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    
    count = count + 1;
    countEl.innerText = count
    console.log(count);
}
function save() {
    let dash = count + " -";
    saveEl.textContent += dash
    countEl.textContent = 0
    count = 0
}