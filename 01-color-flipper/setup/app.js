const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

const getRandomNumber = () => Math.floor(Math.random() * colors.length)

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber()
    // console.log(randomNumber)

    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
