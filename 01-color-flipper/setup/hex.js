const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Need to get the place to put the color
const color = document.querySelector('.color')

// Add an event listener on the button
const button = document.getElementById('btn')

// Random Hex generator
function randomHex() {
    let hexValue = ['#']
    for (let i = 0; i < 6; i++) {
      hexValue.push(hex[Math.floor(Math.random() * hex.length)])
    }
    return hexValue.join('')
}

button.addEventListener('click', () => {
    const hexValue = randomHex()

    document.body.style.backgroundColor = hexValue

    color.textContent = hexValue
})