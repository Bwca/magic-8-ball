export abstract class AbstractRenderer {
  public abstract showBall(): void;
  public abstract question(): void;
  public abstract hideAnswer(): void;
  public abstract showAnswer(answer: string): void;
}
