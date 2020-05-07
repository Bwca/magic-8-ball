import { Answer } from './answer/answer.model';
import { ANSWERS } from './answers.const';
import { makeRenderer } from './renderer';

const sceneRenderer = makeRenderer();
sceneRenderer.showBall();

document.addEventListener('click', getAnswer);

let timeout: number;
let hideAnswerTImeout: number;
function getAnswer(): void {
  if (timeout || hideAnswerTImeout) {
    return;
  }
  sceneRenderer.question();
  timeout = setTimeout(() => {
    clearTimeout(timeout);
    timeout = 0;
    const answer = getRandomAnswer();
    displayAnswer(answer);
  }, 2000);
}

function displayAnswer(answer: Answer): void {
  sceneRenderer.showAnswer(answer.text);
  hideAnswerTImeout = setTimeout(() => {
    clearTimeout(hideAnswerTImeout);
    hideAnswerTImeout = 0;
    sceneRenderer.hideAnswer();
  }, 5000);
}

function getRandomAnswer(): Answer {
  const maxIndex = ANSWERS.length - 1;
  const index = Math.floor(Math.random() * Math.floor(maxIndex));
  return ANSWERS[index];
}
