let numArray= []

function numberClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('number')) {
        numArray.push(parseInt(event.target.innerText));
    }
}

document.addEventListener('click', numberClick)

let operatorArray= [];
function operators(event) {
    event.preventDefault();
    if (event.target.classList.contains('operator') && numArray.length > 0) {
        operatorArray.push(event.target.innerText)
    }
}

document.addEventListener('click', operators)