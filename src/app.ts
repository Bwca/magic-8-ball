import { Answer } from './answer/answer.model';
import { ANSWERS } from './answers.const';
import { makeRenderer } from './renderer';

const sceneRenderer = makeRenderer();
sceneRenderer.showBall();

document.addEventListener('click', getAnswer);

let timeout: number;
function getAnswer(): void {
  if (timeout) {
    return;
  }
  sceneRenderer.question();

  timeout = setTimeout(() => {
    clearTimeout(timeout);
    timeout = 0;
    const answer = getRandomAnswer();
    sceneRenderer.showAnswer(answer.text);
  }, 2000);
}

function getRandomAnswer(): Answer {
  const maxIndex = ANSWERS.length - 1;
  const index = Math.floor(Math.random() * Math.floor(maxIndex));
  return ANSWERS[index];
}
