export interface Feedback {
  name: string;
  email: string;
  category: string;
  rating: number;
  message: string;
  notify: boolean;
}

export interface Feedback extends FeedbackInput {
  id: number;
  createdAt: Date;
}