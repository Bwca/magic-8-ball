export interface Styles {
  'canvas': string;
  'answer-container': string;
  'answer-portal': string;
  'ball': string;
  'is-shaking': string;
  'shake': string;
  'is-visible': string;
  'answer': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
