const game = document.getElementById('game');

const jeopardyCategories = [
    {
        genre: "Physics", questions: [
            { question: "The Doppler effect is the change in frequency of a wave due to the motion of the source or observer of the wave. (True/False)", answer: "True", options: ["True", "False"], level: 10 },
            { question: "What is the photoelectric effect?", answer: "The emission of electrons from a metal surface when light is shone on the surface.", options: [], level: 20 },
            { question: "What is nuclear fusion?", answer: "The process by which two or more atomic nuclei join together to form a heavier nucleus.", options: [], level: 30 },
            { question: "A transistor works by amplifying electronic signals. (True/False)", answer: "True", options: ["True", "False"], level: 40 },
            { question: "The uncertainty principle states that it is impossible to know both the energy and velocity of a particle with perfect accuracy. (True/False)", answer: "False", options: ["True", "False"], level: 50 },
            {
                question: "What best defines the Theory of Relativity?",
                answer: "A) Space, time, and gravity",
                options: [
                    "A) Space, time, and gravity",
                    "B) Behavior of matter at atomic level",
                    "C) Origin and evolution of the universe",
                    "D) Linear Superposition"
                ],
                level: 60,
            },
        ]
    },
    {
        genre: "Biology", questions: [
            { question: "What is the process in which water molecules move from an area of higher concentration to an area of lower concentration through a semipermeable membrane?", answer: "B) Osmosis", options: ["A) Diffusion", "B) Osmosis", "C) Active transport", "D) Filtration"], level: 10 },
            { question: "Gluconeogenesis refers to the process of synthesizing glucose from non-carbohydrate precursors in the body. (True/False)", answer: "True", options: ["True", "False"], level: 20 },
            { question: "Which of the following food tests is used to detect the presence of reducing sugars, such as glucose and maltose, in a food sample?", answer: "A) Benedict's test", options: ["A) Benedict's test", "B) Biuret test", "C) Iodine test", "D) Sudan III test"], level: 30 },
            { question: "Fungi is the third domain of life, distinct from Bacteria and Eukarya. (True/False)", answer: "False", options: ["True", "False"], level: 40 },
            { question: "Which of the following genetic technologies is used to selectively amplify a specific DNA sequence and create many copies of it?", answer: "A) PCR (Polymerase Chain Reaction)", options: ["A) PCR (Polymerase Chain Reaction)", "B) Gel Electrophoresis", "C) DNA Sequencing", "D) Southern Blotting"], level: 50 },
            { question: "Down syndrome is primarily caused by the presence of an extra copy of which chromosome?", answer: "A) Chromosome 21", options: ["A) Chromosome 21", "B) Chromosome 1", "C) Chromosome 13", "D) Chromosome 7"], level: 60 },
        ]
    },
    {
        genre: "Mathematics", questions: [
            { question: "For the matrix A = |4 -1|, find A^2.              |1 3|", answer: "|15 -7|               |7 8|", options: [], level: 10 },
            { question: "Consider the circle with the equation (x−2)^2 + (y+3)^2 = 25. What are the coordinates of the center of this circle?", answer: "A) (2, -3)", options: ["A) (2, -3)", "B) (-2, 3)", "C) (2, 3)", "D) (-2, -3)"], level: 20 },
            { question: "The curve with the equation x^2 + y^2 = 25. What will be the area bounded by the x-axis?", answer: "(25/2)𝝅 or 39.26", options: [], level: 30 },
            { question: "If the curve has an equation y + x^3 = 4x, which has a tangent at point (1, 3). What will be the equation of the normal to the curve?", answer: "y = -x + 4", options: [], level: 40 },
            { question: "Find dy/dx of the equation (x^2)y + y = x. Where x = 1, y = 2.", answer: "dy/dx = -3/2", options: [], level: 50 },
            { question: "Solve the equation (625^((x^3-1)/2)) / (125^(x^3)).", answer: "x = (-3)^(1/3)", options: [], level: 60 },
        ]
    },
    {
        genre: "Chemistry", questions: [
            { question: "What is the process of a substance changing from a solid directly into a gas without becoming a liquid called?", answer: "a) Sublimation", options: ["a) Sublimation", "b) Condensation", "c) Vaporization", "d) Fusion"], level: 10 },
            { question: "What is the chemical symbol for gold?", answer: "C) Au", options: ["A) Gd", "B) Go", "C) Au", "D) Ag"], level: 20 },
            { question: "What is the chemical formula of potassium permanganate?", answer: "KMnO4", options: [], level: 30 },
            { question: "Which of these metal oxides are not alkalis?", answer: "F) C and D", options: ["A) NaOH", "B) KOH", "C) Cu(OH)2", "D) Zn(OH)2", "E) B and D", "F) C and D"], level: 40 },
            { question: "Fluorine has the highest electronegativity on the Pauling Scale. (True/False)", answer: "True", options: ["True", "False"], level: 50 },
            { question: "Which instrument is commonly used to study the structure of molecules in chemistry?", answer: "Spectrometer", options: [], level: 60 },
        ]
    },
    {
        genre: "Tech", questions: [
            { question: "What does \"AI\" stand for in the context of technology?", answer: "b) Artificial Intelligence", options: ["a) Advanced Interface", "b) Artificial Intelligence", "c) Automated Integration", "d) Advanced Information"], level: 10 },
            { question: "Name one common programming language used for web development.", answer: "JavaScript", options: ["a) JavaScript", "b) C++", "c) Fortran", "Rust"], level: 20 },
            { question: "Which of these are not low-level programming languages?", answer: "c) Both A and B", options: ["a) Python", "b) Java", "c) Both a and b", "none of the above"], level: 30 },
            { question: "Which of the following languages is commonly used in a database management system?", answer: "MySQL", options: [], level: 40 },
            { question: "Express the complexity of a for loop using big O notation.", answer: "O(n)", options: ["a) O(n)", "a) O(1)", "a) O(log(n))", "a) O(n^2)"], level: 50 },
            { question: "Convert the following 8-bit binary number to hexadecimal? <br/> 0011 1110", answer: "3E", options: [], level: 60 },
        ]
    },
    {
        genre: "Mystery", questions: [
            { question: "What are some common applications or uses of DNA in various fields?", answer: "Mariana Trench", options: [], level: 10 },
            { question: "What happens when a massive star collapses under its gravity, forming a region in space with gravitational forces so strong that nothing, not even light, can escape?", answer: "Mariana Trench", options: [], level: 20 },
            { question: "What does HTTP stand for in the context of web communication?", answer: "Mariana Trench", options: [], level: 30 },
            { question: "What is the pH of a mixture of hydrochloric acid (HCl) and vinegar?", answer: "Mariana Trench", options: ["A. Greater than 7", "B. Less than 2.5", "C. Between 2.5 and 7", "D. Exactly 7"], level: 40 },
            { question: "If sin(x) = 3/5 and cos(x) < 0, what is the value of tan(x)?", answer: "C) −(4/3)", options: ["A) 3/5", "B) 4/3", "C) −(4/3)", "D) −(3/4)"], level: 50 },
            {
                question: "Which of the following statements best describes the concept of perpetual motion?", answer: "B) A machine that operates indefinitely without any loss of energy due to friction or other factors.", options: ["A) A system that can continuously produce energy without any external input.",
                    "B) A machine that operates indefinitely without any loss of energy due to friction or other factors.",
                    "C) The idea that a system can create energy from nothing and operate perpetually.",
                    "D) A device that can violate the laws of thermodynamics by sustaining motion indefinitely."], level: 60
            },
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