import { makeRenderer } from './renderer';

const sceneRenderer = makeRenderer();
sceneRenderer.showBall();

document.addEventListener('click', () => {
  sceneRenderer.showAnswer('da string');
});
