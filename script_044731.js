const quizDB =[
    {
        question: "Q1 : What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4",
    },
    {
        question: "Q2 : What is the full form of CSS?",
        a : "Cascading Style Sheets",
        b : "Cascading Style Sheep",
        c : "Cartoon Style Sheet",
        d : "Cascading Super Sheet",
        ans : "ans1",
    },

    {
        question: "Q3 : What is the full form of HTTP?",
        a : "Hypertext Transfer Product",
        b : "Hypertext Test Protocol",
        c : "Hey Transfer Protocol",
        d : "Hyeprtext Transfer Protocol",
        ans : "ans4",
    },
    {
        question: "Q4 : What is the full form of JS?",
        a : "JavaSript",
        b : "Javasuper",
        c : "JustScript",
        d : "JustShoes",
        ans : "ans1",
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;
const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer =() =>
{
    let answer;
    answers.forEach((curAnsElm)=>{
        
        if(curAnsElm.checked){
            answer = curAnsElm.id;

        }
       
    });
    return answer;

};

const deselectAll = () =>{
    answers.forEach((curAnsElm) => curAnsElm.checked = false );
};


submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;


deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML =`<h3> You Scored ${score}/${quizDB.length}</h3>;
        <button class="btn" onClick = "location.reload()">Play again</button>
        `;

        showScore.classList.remove('scoreArea');



    }
    
});