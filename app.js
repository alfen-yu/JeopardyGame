const game = document.getElementById('game');

const jeopardyCategories = [
    {
        genre: "Physics", questions: [
            { question: "What is the charge of Electron?", answer: "negative", level: 10 },
            { question: "What is the charge of Electron?", answer: "negative", level: 20 },
            { question: "What is the charge of Electron?", answer: "negative", level: 30 },
            { question: "What is the charge of Electron?", answer: "negative", level: 40 },
            { question: "What is the charge of Electron?", answer: "negative", level: 50 },
            { question: "What is the charge of Electron?", answer: "negative", level: 60 },
        ]
    },
    {
        genre: "Biology", questions: [
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 10 },
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 20 },
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 30 },
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 40 },
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 50 },
            { question: "Which Bone is the longest in the Human Body?", answer: "The Femur", level: 60 },
        ]
    },
    {
        genre: "Mathematics", questions: [
            { question: "What is the value of pie?", answer: 3.142, level: 10 },
            { question: "What is the value of pie?", answer: 3.142, level: 20 },
            { question: "What is the value of pie?", answer: 3.142, level: 30 },
            { question: "What is the value of pie?", answer: 3.142, level: 40 },
            { question: "What is the value of pie?", answer: 3.142, level: 50 },
            { question: "What is the value of pie?", answer: 3.142, level: 60 },
        ]
    },
    {
        genre: "Chemistry", questions: [
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 10 },
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 20 },
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 30 },
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 40 },
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 50 },
            { question: "Which two elements are combined to produce Salt and Water?", answer: "Sodium & Chlorine", level: 60 },
        ]
    },
    {
        genre: "Computer Science & Tech", questions: [
            { question: "Who created Apple?", answer: "Steve Jobs", level: 10 },
            { question: "Who created Apple?", answer: "Steve Jobs", level: 20 },
            { question: "Who created Apple?", answer: "Steve Jobs", level: 30 },
            { question: "Who created Apple?", answer: "Steve Jobs", level: 40 },
            { question: "Who created Apple?", answer: "Steve Jobs", level: 50 },
            { question: "Who created Apple?", answer: "Steve Jobs", level: 60 },
        ]
    },
    {
        genre: "Mystery", questions: [
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 10 },
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 20 },
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 30 },
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 40 },
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 50 },
            { question: "What is the deepest part of the ocean?", answer: "Mariana Trench", level: 60 },
        ]
    }
];

function addCategory(category) {
    const column = document.createElement('div');
    column.classList.add('genre-column');

    const genreTitle = document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerHTML = category.genre;

    column.appendChild(genreTitle);
    game.append(column);

    category.questions.forEach(question => {
        const card = document.createElement('div');
        card.classList.add('card');
        column.append(card);

        switch (question.level) {
            case 10:
            case 20:
            case 30:
            case 40:
            case 50:
            case 60:
                card.innerHTML = question.level;
                break;
            default:
                break;
        }

        card.setAttribute('data-question', question.question);
        card.setAttribute('data-answer', question.answer);
        card.setAttribute('data-value', card.getInnerHTML());

        card.addEventListener('click', flipCard);
    });
}

function flipCard() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () {
        modal.remove();
    });
    content.appendChild(closeBtn);

    const questionText = document.createElement('div');
    questionText.classList.add('modal-text');
    questionText.innerHTML = this.getAttribute('data-question');

    // Add this code to get a reference to the card
    const card = this;

    // Check if the card has already been clicked
    if (!card.classList.contains('clicked')) {
        card.classList.add('clicked');

        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-button');
        answerButton.innerHTML = "Show Answer";
        answerButton.setAttribute('data-answer', this.getAttribute('data-answer'));

        answerButton.addEventListener('click', function () {
            questionText.style.display = 'none';
            answerButton.style.display = 'none';

            const answerText = document.createElement('div');
            answerText.classList.add('modal-text');
            const answer = answerButton.getAttribute('data-answer');
            answerText.innerHTML = answer;

            content.appendChild(answerText);
        });

        content.appendChild(questionText);
        content.appendChild(answerButton);

        modal.appendChild(content);
        document.body.appendChild(modal);
    }
}

jeopardyCategories.forEach(category => addCategory(category));