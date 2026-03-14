const EXAM_COUNT = 60;
const PASSING_SCORE = 0.80;

let questions = questionBank.sort(() => 0.5 - Math.random()).slice(0, EXAM_COUNT);
let current = 0;
let answers = new Array(EXAM_COUNT);
let time = 16 * 60;
let timerInterval = null;

const questionBox = document.getElementById("questionBox");
const submitBtn = document.getElementById("submitBtn");
const retakeContainer = document.getElementById("retakeContainer");
const resultBox = document.getElementById("result");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

submitBtn.style.display = "none"; // hide initially

// Render question
function render() {
    questionBox.style.display = "block";

    const q = questions[current]

    let html = `<div class="card">
    <h3>${current+1}. ${q.q}</h3>`

    if(q.image){
        html += `<img src="${q.image}" class="question-image">`
    }

    q.choices.forEach((c,i)=>{
        html += `
        <label class="choice">
        <input type="radio" name="choice" value="${i}" ${answers[current]==i?"checked":""}>
        ${c}
        </label>`
    })

    html += `<div id="explanationArea" class="explanation-card" style="display:none;"></div>`
    html += `</div>`

    questionBox.innerHTML = html

    document.getElementById("progress").innerText = `Question ${current + 1} / ${EXAM_COUNT}`;
    document.getElementById("progressFill").style.width = ((current + 1) / EXAM_COUNT * 100) + "%";

    // Show submit button only on last question
    submitBtn.style.display = (current === EXAM_COUNT - 1) ? "inline-block" : "none";

    
}

// Show explanation immediately
document.addEventListener("change", e => {
    if (e.target.name === "choice") {
        const selected = Number(e.target.value);
        answers[current] = selected;

        const q = questions[current];
        const correct = selected === q.answer;
        const explanationArea = document.getElementById("explanationArea");
        explanationArea.style.display = "block";
        explanationArea.innerHTML = `
            <strong>${correct ? "Correct ✅" : "Wrong ❌"}</strong><br>
            Your Answer: ${q.choices[selected]}<br>
            Correct Answer: ${q.choices[q.answer]}<br>
            Explanation: ${q.explanation}`;

        // Disable all choices after answering
        const inputs = document.querySelectorAll('input[name="choice"]');
        inputs.forEach(input => input.disabled = true);
    }
});

// Navigation
nextBtn.onclick = () => {
    if (current < EXAM_COUNT - 1) {
        current++;
        render();
    }
};
prevBtn.onclick = () => {
    if (current > 0) {
        current--;
        render();
    }
};

// Submit button click
submitBtn.onclick = () => {
    clearInterval(timerInterval); // stop timer

    let score = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.answer) score++;
    });
    const percent = score / EXAM_COUNT;
    const pass = percent >= PASSING_SCORE;

    // Hide question and buttons
    questionBox.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";

    // Show result in the middle
    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <h2 style="text-align:center;">Score: ${score}/${EXAM_COUNT}</h2>
        <h2 style="text-align:center;">${pass ? "PASSED 🎉" : "FAILED ❌"}</h2>
        <p style="text-align:center;">PCG Passing Score: 80%</p>`;

    // Show Retake button
    retakeContainer.style.display = "block";
    retakeContainer.style.textAlign = "center";
    retakeContainer.innerHTML = `<button id="retakeBtn">Retake Exam</button>`;
    document.getElementById("retakeBtn").onclick = retakeExam;

    window.scrollTo(0, resultBox.offsetTop - 50);
};

// Timer
function startTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = formatTime(time);
    timerInterval = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = formatTime(time);
        if (time < 0) {
            clearInterval(timerInterval);
            submitBtn.click();
        }
    }, 1000);
}

// Format time
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

// Retake exam
function retakeExam() {
    questions = questionBank.sort(() => 0.5 - Math.random()).slice(0, EXAM_COUNT);
    current = 0;
    answers = new Array(EXAM_COUNT);
    time = 16 * 60;

    // Reset UI
    resultBox.style.display = "none";
    retakeContainer.innerHTML = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    prevBtn.style.display = "inline-block";

    render();
    startTimer();
}

// Initial render & timer
render();
startTimer();