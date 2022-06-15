let counter = 0
let value = document.getElementById('value')
let btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', changeValue))


function changeValue() {
    console.log('button clicked')
    let valueChecker = event.currentTarget.classList

    if (valueChecker.contains('increase')) {
        counter++
    } else if (valueChecker.contains('decrease')) {
        counter--
    } else {
        counter = 0
    }

    if (counter > 0) {
        value.style.color = 'green'
    }

    if (counter < 0) {
        value.style.color = 'red'
    }

    if (counter === 0) {
        value.style.color = 'hsl(209, 61%, 16%)'
    }

    value.textContent = counter
}