import { AnswerTypes } from './answer-types.enum';

export interface Answer {
  readonly type: AnswerTypes;
  text: string;
}
