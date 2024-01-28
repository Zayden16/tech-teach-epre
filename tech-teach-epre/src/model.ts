export interface Course {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  solved: boolean;
  courseItems: CourseItem[];
}

export interface CourseItem {
  id: number;
  title: string;
  solved: boolean;
  mediaUrl?: string;
  type: CourseItemType;
  questions: Question[];
}

export enum CourseItemType {
  Quiz,
  Video,
  Text,
}

export interface Question {
  id: number;
  question: string;
  answer: string;
  solved: boolean;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  correct: boolean;
}
