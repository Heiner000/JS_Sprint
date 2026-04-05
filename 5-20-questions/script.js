/*
## Day 5 — 20 Questions (Animal Theme)

### Objective
Build a simple decision tree game

### Features
- Yes / No buttons only
- Hardcoded questions
- Final guess output

### Constraints
- No free text input
- Use branching logic

### Pseudocode
- Track current question node
- On answer → move to next node
- Render question or result

### Done When
- Game flows correctly
- Logic is understandable
*/

let currentNode = "start";
let questionsCountdown = 20;
let transcript = [];

const questionsLeft = document.querySelector("#questions-left");
const questionText = document.querySelector("#question-text");
const transcriptList = document.querySelector("#transcript-list");
const resultPanel = document.querySelector("#result-panel");
const resultText = document.querySelector("#result-text");
const answerButtons = document.querySelectorAll(".answer-btn");
const resetButton = document.querySelector(".btn-danger");

const tree = {
    start: {
        question: "Is it a mammal?",
        yes: "pet",
        no: "water",
    },
    pet: {
        question: "Is it commonly kept as a pet?",
        yes: "dog",
        no: "elephant",
    },
    water: {
        question: "Does it live mostly in water?",
        yes: "fish",
        no: "eagle",
    },
    dog: { guess: "I think it's a dog." },
    elephant: { guess: "I think it's an elephant." },
    fish: { guess: "I think it's a fish." },
    eagle: { guess: "I think it's an eagle." },
};

function renderGame() {
    const node = tree[currentNode];

    questionsLeft.textContent = questionsCountdown;

    if (node.guess) {
        questionText.textContent = "Game complete.";
        resultText.textContent = node.guess;
        resultPanel.classList.remove("hidden");

        answerButtons.forEach((button) => {
            button.disabled = true;
        });

        return;
    }

    questionText.textContent = node.question;
    resultPanel.classList.add("hidden");

    answerButtons.forEach((button) => {
        button.disabled = false;
    });

    renderTranscript();
}

function handleAnswer(answer) {
    const node = tree[currentNode];

    if (!node.yes && !node.no) {
        return;
    }

    transcript.push({
        question: node.question,
        answer: answer,
    });

    currentNode = node[answer];
    questionsCountdown--;

    renderGame();
}

function renderTranscript() {
    transcriptList.innerHTML = "";

    transcript.forEach((entry, index) => {
        const item = document.createElement("li");
        item.className = "list-item transcript-entry";

        item.innerHTML = `
        <span class="entry-number">${index + 1}.</span>
        <div class="entry-content">
            <p class="entry-question">${entry.question}</p>
            <p class="entry-answer">Answer: ${entry.answer}</p>
        </div>
        `;

        transcriptList.appendChild(item);
    });
}

answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.dataset.answer;
        handleAnswer(answer);
    });
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
    currentNode = "start";
    questionsCountdown = 20;
    transcript = [];
    renderGame();
}

renderGame();
