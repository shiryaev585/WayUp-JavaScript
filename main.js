import { questions } from './state.js';
console.log(questions);

/*All answer options*/
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');

/* All options */
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); //сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'); //номер вопроса
const numberOfAllQuestions = document.getElementById('number-of-all-question'); //количество всех вопросов

let indexOfQuestion; //индекс текущего вопроса
let indexOfPage = 0; //индекс страницы

const answersTracker = document.getElementById('answers-tracker'); //обёртка для трекера
const btnNext = document.getElementById('btn-next'); //кнопка далее

let score = 0; // итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'); // кол-во правильных ответов
const numberOfAllQuestionsModal = document.getElementById(
  'number-of-all-questions-modal'
); //количество всех вопросов в модальном окне
const btnTryAgain = document.getElementById('btn-try-again'); // кнопка "начать заново"

numberOfQuestion.innerHTML = question.length; // выводим кол-во вопросов


