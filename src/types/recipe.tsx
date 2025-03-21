type Step = {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
}

export type Recipe = {
  id: number;
  title: string;
  description: string;
  imageH: string;
  imageV: string;
  tags: string[];
  ingredients: string[];
  steps: Step[];
};