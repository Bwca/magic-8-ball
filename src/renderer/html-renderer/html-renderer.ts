import { AbstractRenderer } from '../models/abstract-renderer';
import { HtmlRendererStyle } from './html-renderer.style.enum';
import './html-renderer.style.scss';

export class HtmlRenderer implements AbstractRenderer {
  public ball!: HTMLElement;
  private answerContainer!: HTMLElement;
  private answer!: HTMLElement;

  public hideAnswer(): void {
    this.answerContainer.classList.remove(HtmlRendererStyle.IsVisible);
  }

  public question(): void {
    this.hideAnswer();
    this.ball.classList.add(HtmlRendererStyle.IsShaking);
  }

  public showAnswer(str: string) {
    this.answer.textContent = str;
    this.ball.classList.remove(HtmlRendererStyle.IsShaking);
    this.answerContainer.classList.add(HtmlRendererStyle.IsVisible);
  }

  public showBall(host: HTMLElement) {
    const canvas = document.createElement('section');
    canvas.className = HtmlRendererStyle.Canvas;

    const ball = document.createElement('article');
    ball.className = HtmlRendererStyle.Ball;
    this.ball = ball;
    const answerPortal = document.createElement('div');
    answerPortal.className = HtmlRendererStyle.AnswerPortal;

    const answerContainer = document.createElement('div');
    answerContainer.className = HtmlRendererStyle.AnswerContainer;
    this.answerContainer = answerContainer;

    const answer = document.createElement('div');
    answer.className = HtmlRendererStyle.Answer;
    this.answer = answer;

    answerContainer.appendChild(answer);
    answerPortal.appendChild(answerContainer);

    ball.appendChild(answerPortal);

    canvas.appendChild(ball);

    host.appendChild(canvas);
  }
}
