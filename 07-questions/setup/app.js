//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('show-text')
            }

            question.classList.toggle('show-text')

        })

    })
})


// traversing the dom going from question-btn to question-title to the div with the class question
// const questions = document.querySelectorAll('.question-btn')

// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         const questionBox = event.currentTarget.parentElement.parentElement

//         questionBox.classList.toggle('show-text')
//     })
// })