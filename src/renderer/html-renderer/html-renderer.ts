import { AbstractRenderer } from '../models/abstract-renderer';

export class HtmlRenderer implements AbstractRenderer {
  public ball!: HTMLElement;
  private answerContainer!: HTMLElement;
  private answer!: HTMLElement;

  public question(): void {
    this.answer.textContent = '';
    this.answerContainer.classList.remove('is-visible');
  }

  public showAnswer(str: string) {
    this.answer.textContent = str;
    this.answerContainer.classList.add('is-visible');
  }
  public showBall() {
    const canvas = document.createElement('section');
    canvas.className = 'ball-8-container';

    const ball = document.createElement('article');
    ball.className = 'ball';
    this.ball = ball;

    const answerPortal = document.createElement('div');
    answerPortal.className = 'answer-portal';

    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    this.answerContainer = answerContainer;

    const answer = document.createElement('div');
    answer.className = 'answer';
    this.answer = answer;

    answerContainer.appendChild(answer);
    answerPortal.appendChild(answerContainer);
    ball.appendChild(answerPortal);
    canvas.appendChild(ball);
    document.body.appendChild(canvas);
  }
}