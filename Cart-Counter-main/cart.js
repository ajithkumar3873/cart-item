const incrementVal = document.getElementById("inc");
const decrementVal = document.getElementById("dec");
const countVal = document.getElementById("count");
const resetBtn = document.querySelector("#reset");

let count = 0;

function updateCount(){
    countVal.textContent = count;
}

incrementVal.addEventListener("click",()=> {
count++;
updateCount();
});

decrementVal.addEventListener("click",()=> {
    if (count > 0){
        count--;
}
    updateCount();
    });


updateCount();

resetBtn.addEventListener('click', reset);
  
function reset() {
    count = 0;
    countVal.innerHTML = count;
}

