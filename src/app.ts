import { Answer } from './answer/answer.model';
import { ANSWERS } from './answers.const';
import { makeRenderer } from './renderer';

const sceneRenderer = makeRenderer();
sceneRenderer.showBall(document.body);

document.addEventListener('click', getAnswer);

let timeout: NodeJS.Timeout | null;
let hideAnswerTImeout: NodeJS.Timeout | null;

function getAnswer(): void {
  if (timeout || hideAnswerTImeout) {
    return;
  }
  sceneRenderer.question();
  timeout = setTimeout(() => {
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = null;
    const answer = getRandomAnswer();
    displayAnswer(answer);
  }, 2000);
}

function displayAnswer(answer: Answer): void {
  sceneRenderer.showAnswer(answer.text);
  hideAnswerTImeout = setTimeout(() => {
    clearTimeout(hideAnswerTImeout as NodeJS.Timeout);
    hideAnswerTImeout = null;
    sceneRenderer.hideAnswer();
  }, 5000);
}

function getRandomAnswer(): Answer {
  const maxIndex = ANSWERS.length - 1;
  const index = Math.floor(Math.random() * Math.floor(maxIndex));
  return ANSWERS[index];
}
