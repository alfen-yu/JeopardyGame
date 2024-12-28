const game = document.getElementById('game');

const jeopardyCategories = [
    {
        genre: "Physics", questions: [
            { question: " Is the following statement true or false: <br/> The Doppler effect is the change in frequency of a wave due to the motion of the source or observer of the wave.", answer: "True", options: ["True", "False"], level: 10 },
            { question: "What is the photoelectric effect?", answer: "The emission of electrons from a surface when light is shone on the surface.", options: [], level: 20 },
            { question: "What is nuclear fusion?", answer: "The process by which two or more atomic nuclei join together to form a heavier nucleus.", options: [], level: 30 },
            { question: " Is the following statement true or false: <br/> A transistor works by amplifying electronic signals.", answer: "True", options: ["True", "False"], level: 40 },
            { question: " Is the following statement true or false: <br/> The uncertainty principle states that it is impossible to know both the energy and velocity of a particle with perfect accuracy.", answer: "False", options: ["True", "False"], level: 50 },
            {
                question: "What best defines the Theory of Relativity? <br/><br/> A) Space, time, and gravity <br/> B) Behavior of matter at atomic level <br/> C) Origin and evolution of the universe <br/> D) Linear Superposition",
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
            { question: "What is the process in which water molecules move from an area of lower concentration to an area of higher concentration through a semipermeable membrane? <br/><br/> A) Diffusion <br/> B) Osmosis <br/> C) Active transport <br/> D) Filtration", answer: "B) Osmosis", options: ["A) Diffusion", "B) Osmosis", "C) Active transport", "D) Filtration"], level: 10 },
            { question: " Is the following statement true or false: <br/> Gluconeogenesis refers to the process of synthesizing glucose from non-carbohydrate precursors in the body.", answer: "True", options: ["True", "False"], level: 20 },
            { question: "Which of the following food tests is used to detect the presence of reducing sugars, such as glucose and maltose, in a food sample? <br/><br/> A) Benedict's test <br/> B) Biuret test <br/> C) Iodine test <br/> D) Sudan III test", answer: "A) Benedict's test", options: ["A) Benedict's test", "B) Biuret test", "C) Iodine test", "D) Sudan III test"], level: 30 },
            { question: "Is the following statement true or false: <br/> Fungi is the third domain of life, distinct from Bacteria and Eukarya.", answer: "False", options: ["True", "False"], level: 40 },
            { question: "Which of the following genetic technologies is used to selectively amplify a specific DNA sequence and create many copies of it? <br/><br/> A) PCR (Polymerase Chain Reaction) <br/> B) Gel Electrophoresis <br/> C) DNA Sequencing <br/> D) Southern Blotting", answer: "A) PCR (Polymerase Chain Reaction)", options: ["A) PCR (Polymerase Chain Reaction)", "B) Gel Electrophoresis", "C) DNA Sequencing", "D) Southern Blotting"], level: 50 },
            { question: "Down syndrome is primarily caused by the presence of an extra copy of which chromosome? <br/><br/> A) Chromosome 21 <br/> B) Chromosome 1 <br/> C) Chromosome 13 <br/> D) Chromosome 7", answer: "A) Chromosome 21", options: ["A) Chromosome 21", "B) Chromosome 1", "C) Chromosome 13", "D) Chromosome 7"], level: 60 },
        ]
    },
    {
        genre: "Mathematics", questions: [
            {
                question: "<img src='./images/q1.png' alt='Description of the image'>",
                answer: "<img src='./images/a1.png' alt='Answer 1'>",
                options: [],
                level: 10
            },
            { question: "<img src='./images/q2.png' alt='Description of the image'>", answer: "A). (2, -3)", options: ["A) (2, -3)", "B) (-2, 3)", "C) (2, 3)", "D) (-2, -3)"], level: 20 },
            { question: "What are the first 10 prime numbers?", answer: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", options: [], level: 30 },
            { question: "<img src='./images/q4.png' alt='Description of the image'>", answer: "<img src='./images/a4.png' alt='Description of the image'>", options: [], level: 40 },
            { question: "<img src='./images/q5.png' alt='Description of the image'>", answer: "<img src='./images/a5.png' alt='Description of the image'>", options: [], level: 50 },
            { question: "<img src='./images/q6.png' alt='Description of the image'>", answer: "<img src='./images/a6.png' alt='Description of the image'>", options: [], level: 60 },
        ]
    },
    {
        genre: "Chemistry", questions: [
            { question: "What is the process of a substance changing from a solid directly into a gas without becoming a liquid called? <br/><br/> a) Sublimation <br/> b) Condensation <br/> c) Vaporization <br/> d) Fusion", answer: "a) Sublimation", options: ["a) Sublimation", "b) Condensation", "c) Vaporization", "d) Fusion"], level: 10 },
            { question: "What is the chemical symbol for gold? <br/><br/> A) Gd <br/> B) Go <br/> C) Au <br/> D) Ag", answer: "C) Au", options: ["A) Gd", "B) Go", "C) Au", "D) Ag"], level: 20 },
            { question: "What is the chemical formula of potassium permanganate?", answer: "KMnO4", options: [], level: 30 },
            { question: "Which of these metal oxides are not alkalis? <br/><br/> A) NaOH <br/> B) KOH <br/> C) Cu(OH)2 <br/> D) Zn(OH)2 <br/> E) B and D <br/> F) C and D", answer: "F) C and D", options: ["A) NaOH", "B) KOH", "C) Cu(OH)2", "D) Zn(OH)2", "E) B and D", "F) C and D"], level: 40 },
            { question: "Fluorine has the highest electronegativity on the Pauling Scale. (True/False)", answer: "True", options: ["True", "False"], level: 50 },
            { question: "Which instrument is commonly used to study the structure of molecules in chemistry?", answer: "Spectrometer", options: [], level: 60 },
        ]
    },
    {
        genre: "Tech", questions: [
            { question: "Which cybersecurity attack involves overwhelming a system with excessive traffic to make it unavailable? <br/><br/> a) Phishing <br/> b) Ransomware <br/> c) DDoS (Distributed Denial of Service) attack <br/> d) Social Engineering", answer: "c) DDoS (Distributed Denial of Service) attack", options: ["a) Phishing", "b) Ransomware", "c) DDoS (Distributed Denial of Service) attack", "d) Social Engineering"], level: 10 },
            { question: "Name one common programming language used for web development. <br/><br/> a) JavaScript <br/> b) C++ <br/> c) Fortran <br/> d) Rust", answer: "JavaScript", options: ["a) JavaScript", "b) C++", "c) Fortran", "Rust"], level: 20 },
            { question: "Convert the following 8-bit binary number to hexadecimal? <br/> 0011 1110", answer: "3E", options: [], level: 30 },
            { question: "Which of the following languages is commonly used in a database management system? <br/><br/> a) DBMS <br/> b) C++ <br/> c) JavaScript <br/> d) MySQL", answer: "MySQL", options: [], level: 40 },
            { question: "Express the complexity of a for loop using big O notation. <br/><br/> a) O(n) <br/> b) O(1) <br/> c) O(log(n)) <br/> d) O(n^2)", answer: "O(n)", options: ["a) O(n)", "a) O(1)", "a) O(log(n))", "a) O(n^2)"], level: 50 },
            { question: "Which of these are not low-level programming languages? <br/><br/> a) Python <br/> b) Java <br/> c) Both a and b <br/> d) none of the above", answer: "c) Both A and B", options: ["a) Python", "b) Java", "c) Both a and b", "none of the above"], level: 60 },
        ]
    },
    {
        genre: "Mystery", questions: [
            { question: "What are some common applications or uses of DNA in various fields? <br/><br/> A) DNA is used for generating electricity. <br/> B) DNA is employed in agriculture for pest control. <br/> C) DNA is utilized in forensic science for crime scene analysis. <br/> D) DNA is a source of fuel for vehicles.", answer: "C) DNA is utilized in forensic science for crime scene analysis.", options: ["A) DNA is used for generating electricity.", "B) DNA is employed in agriculture for pest control.", "C) DNA is utilized in forensic science for crime scene analysis.", "D) DNA is a source of fuel for vehicles.",], level: 10 },
            { question: "What happens when a massive star collapses under its gravity, forming a region in space with gravitational forces so strong that nothing, not even light, can escape? <br/><br/> A) The star expands and becomes a red giant. <br/> B) The star transforms into a neutron star. <br/> C) The star collapses to form a black hole. <br/> D) The star releases a burst of energy known as a supernova.", answer: "C) The star collapses to form a black hole.", options: ["A) The star expands and becomes a red giant.", "B) The star transforms into a neutron star.", "C) The star collapses to form a black hole.", "D) The star releases a burst of energy known as a supernova."], level: 20 },
            { question: "What does HTTP stand for in the context of web communication? <br/><br/>  a) HyperText Transmission Protocol <br/> b) HyperText Transfer Protocol <br/> c) HyperTransfer Text Protocol <br/> d) High-Tech Transport Protocol ", answer: "b) HyperText Transfer Protocol", options: [], level: 30 },
            { question: "What is the pH of a mixture of hydrochloric acid (HCl) and vinegar? <br/><br/> A. Greater than 7 <br/> B. Less than 2.5  <br/> C. Between 2.5 and 7  <br/> D. Exactly 7", answer: "B. Less than 2.5 ", options: ["A. Greater than 7", "B. Less than 2.5", "C. Between 2.5 and 7", "D. Exactly 7"], level: 40 },
            { question: "If sin(x) = 3/5 and cos(x) < 0, what is the value of tan(x)? <br/><br/>  A) 3/5 <br/> B) 4/3 <br/> C) −(4/3) <br/> D) −(3/4)", answer: "C) −(4/3)", options: ["A) 3/5", "B) 4/3", "C) −(4/3)", "D) −(3/4)"], level: 50 },
            {
                question: "Which of the following statements best describes the concept of perpetual motion? <br/><br/> A) A system that can continuously produce energy without any external input. <br/> B) A machine that operates indefinitely without any loss of energy due to friction or other factors. <br/> C) The idea that a system can create energy from nothing and operate perpetually. <br/> D) A device that can violate the laws of thermodynamics by sustaining motion indefinitely.", answer: "B) A machine that operates indefinitely without any loss of energy due to friction or other factors.", options: ["A) A system that can continuously produce energy without any external input.",
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
        card.setAttribute('data-value', card.innerHTML); 

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

    const card = this;

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