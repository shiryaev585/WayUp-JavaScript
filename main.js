import { questions } from './state.js';

/*All answer options*/
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');

/* All options */
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); //сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'); //номер вопроса
const numberOfAllQuestions = document.getElementById('number-of-all-questions'); //количество всех вопросов

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

numberOfAllQuestions.innerHTML = questions.length; // выводим кол-во вопросов

const quizOverModal = document.querySelector('.quiz-over-modal');

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question; // сам вопрос

  // мапим ответы
  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1; // установка номера текущей страницы
  indexOfPage++; // увеличение индекса страницы
};

let completedAnswers = []; // массив для уже заданных вопросов

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false; // якорь для проверки одинаковых вопросов

  if (indexOfPage === questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach((item) => {
        if (item === randomNumber) {
          hitDuplicate = true;
        }
      });
      if (hitDuplicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (completedAnswers.length === 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  completedAnswers.push(indexOfQuestion);
};

const checkAnswer = (el) => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer - 1) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOptions();
};

for (let option of optionElements) {
  option.addEventListener('click', (e) => checkAnswer(e));
};

const disabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.add('disabled');
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer - 1) {
      item.classList.add('correct');
    }
  });
};

// удаление всех классов со всех ответов
const enableOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove('disabled', 'correct', 'wrong')
  })
};

const createAnswerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = (classStatus) => {
  answersTracker.children[indexOfPage - 1].classList.add(`${classStatus}`)
}

// проверка на наличие выбранного ответа
const validate = () => {
  if(!optionElements[0].classList.contains('disabled')) {
    alert('Выберите один из вариантов ответа')
  } else {
    randomQuestion();
    enableOptions();
  }
};

const quizOver = () => {
  quizOverModal.classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestionsModal.innerHTML = questions.length;
};

const tryAgain = () => {
  window.location.reload();
}

btnNext.addEventListener('click', () => validate());
btnTryAgain.addEventListener('click', () => tryAgain());

// load запустится тогда, когда страница полностью загрузится
window.addEventListener('load', () => {
  randomQuestion();
  createAnswerTracker();
});
