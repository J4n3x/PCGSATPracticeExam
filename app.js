const EXAM_COUNT = 60
const PASSING_SCORE = 0.80

let questions = questionBank.sort(() => 0.5 - Math.random()).slice(0, EXAM_COUNT)
let current = 0
let answers = new Array(EXAM_COUNT)
let time = 16 * 60
let timerInterval = null
const questionBox = document.getElementById("questionBox")
const submitBtn = document.getElementById("submitBtn")

submitBtn.style.display = "none" // hide submit initially
submitBtn.innerText = "Submit Exam"

// Render question
function render() {
    const q = questions[current]
    let html = `<div class="card">
        <h3>${current + 1}. ${q.q}</h3>`
    q.choices.forEach((c, i) => {
        html += `<label class="choice">
        <input type="radio" name="choice" value="${i}" ${answers[current] == i ? "checked" : ""}>
        ${c}
        </label>`
    })
    html += `</div>`
    questionBox.innerHTML = html

    document.getElementById("progress").innerText = `Question ${current + 1} / ${EXAM_COUNT}`
    document.getElementById("progressFill").style.width = ((current + 1) / EXAM_COUNT * 100) + "%"

    // Show submit button only on last question
    submitBtn.style.display = (current === EXAM_COUNT - 1) ? "inline-block" : "none"
}

// Save selected answer
document.addEventListener("change", e => {
    if (e.target.name === "choice") answers[current] = Number(e.target.value)
})

// Navigation
document.getElementById("nextBtn").onclick = () => {
    if (current < EXAM_COUNT - 1) {
        current++
        render()
    }
}
document.getElementById("prevBtn").onclick = () => {
    if (current > 0) {
        current--
        render()
    }
}

// Submit / Retake button click
submitBtn.onclick = () => {
    if (submitBtn.innerText === "Submit Exam") {
        // Stop timer
        clearInterval(timerInterval)

        // Calculate score and show explanations
        let score = 0
        let reviewHTML = ""
        questions.forEach((q, i) => {
            const correct = answers[i] === q.answer
            if (correct) score++
            reviewHTML += `
            <div class="explanation-card">
                <strong>Q${i + 1} ${correct ? "Correct ✅" : "Wrong ❌"}</strong><br>
                Your Answer: ${answers[i] != null ? q.choices[answers[i]] : "No Answer"}<br>
                Correct Answer: ${q.choices[q.answer]}<br>
                Explanation: ${q.explanation}
            </div>`
        })
        const percent = score / EXAM_COUNT
        const pass = percent >= PASSING_SCORE

        document.getElementById("result").innerHTML =
            `<h2>Score: ${score}/${EXAM_COUNT}</h2>
             <h2>${pass ? "PASSED 🎉" : "FAILED ❌"}</h2>
             <p>PCG Passing Score: 80%</p>
             ${reviewHTML}`

        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight)
    } else {
        // Change button to Retake
        submitBtn.innerText = "Retake Exam"

        // Retake exam
        questions = questionBank.sort(() => 0.5 - Math.random()).slice(0, EXAM_COUNT)
        current = 0
        answers = new Array(EXAM_COUNT)
        time = 16 * 60
        document.getElementById("result").innerHTML = ""
        render()
        startTimer()
        submitBtn.innerText = "Submit Exam"
    }
}

// Timer
function startTimer() {
    clearInterval(timerInterval)
    document.getElementById("timer").innerText = formatTime(time)
    timerInterval = setInterval(() => {
        time--
        document.getElementById("timer").innerText = formatTime(time)
        if (time < 0) {
            clearInterval(timerInterval)
            submitBtn.click() // auto submit
        }
    }, 1000)
}

// Format time
function formatTime(seconds) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
}

// Initial render & timer
render()
startTimer()