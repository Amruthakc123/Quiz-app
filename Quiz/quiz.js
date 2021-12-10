const quizDB = [
    {
        question: "Q1 : Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?",
        a:"<sup>",
        b:"<sub>",
        c:"<p>",
        d:"None of the above",
        ans:"ans1"

    },
    {
        question: "Q2 : Which type of JavaScript language is",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        ans:"ans2"
    },
    {
        question: "Q3 : Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        ans:"ans4"
    },
    {
        question: "Q4 :  The 'function' and 'var' are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        ans:"ans3"
    },
    {
        question: "Q5 : Which one of the following operator returns false if both values are equal?",
        a:"!",
        b:"!=",
        c:"!==",
        d:"All of the above",
        ans:"ans2"
    },
    {
        question: "Q6 :  Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        a:"slice()",
        b:"split()",
        c:"substr()",
        d:"search()",
        ans:"ans3"
    },
    {
        question: "Q7 : Which one of the following symbol is used for creating comments in the javascript:",
        a:"\\",
        b:"//",
        c:" \* *\ ",
        d:"\* */",
        ans:"ans2"
    },
    {
        question: "Q8 :What are the three important manipulations for a loop on a loop variable?",
        a:"Updation, Incrementation, Initialization",
        b:"Initialization, Testing, Incrementation",
        c:"Testing, Updation, Testing",
        d:"Initialization, Testing, Updation",
        ans:"ans4"
    },
    {
        question: "Q9 : Which of the following element is responsible for making the text bold in HTML?",
        a:"<pre>",
        b:"<a>",
        c:"<b>",
        d:"<br>",
        ans:"ans3"
    },
    {
        question: "Q10 :How to create a checkbox in HTML?",
        a:"<input type = 'checkbox'> ",
        b:"<input type = 'button'>",
        c:"<checkbox>",
        d:"<input type = 'check'>",
        ans:"ans1"
    },];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

//     question.innerText = questionList.question;

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        } 
    });
    return answer;
};


const deselectAll =()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll()

    if(questionCount< quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length}</h3>
        <button class ="btn" onclick = "location.reload()">Play Again</button>`;

        showScore.classList.remove('scoreArea');
    }
});