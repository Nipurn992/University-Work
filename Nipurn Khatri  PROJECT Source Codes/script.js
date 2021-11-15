 const quizDB = [
     {
         question: "Q1:'OS' computer abbreviation usually means ?",
         a: "Order of Significance",
         b: "Open Software",
         c: "Operating System",
         d: "Optical Sensor",
         ans: "ans3"
     },
     {
        question: "Q2: Which of the following tag is used for inserting the largest heading in HTML? ",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "ans2"
    },{
        question: "Q3: Which of the following is the root tag of the HTML document?",
        a: "<body>",
        b: "<head>",
        c: "<title>",
        d: "<html>",
        ans: "ans4"
    },{
        question: "Q4:  Which of the following option leads to the portability and security of Java?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        ans: "ans1"
    } 
 ];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1'); 
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let score =0;
let questionCount = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
 
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem)=> {
        if(curAnsElem.checked){
            answer = curAnsElem.id; 
        }
    });
    return answer;
};

const deselectAll = () =>{
   answers.forEach((curAnsElem) => curAnsElem.checked = false); 
}
submit.addEventListener('click',()=> {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;
    };

questionCount++;

deselectAll();
 
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else
{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});