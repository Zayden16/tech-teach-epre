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
  type: CourseItemType;
  content?: string;
  mediaUrl?: string;
  questions?: Question[];
}

export enum CourseItemType {
  Quiz = "Quiz",
  Video = "Video",
  Text = "Text",
}

export interface Question {
  id: number;
  question: string;
  solved: boolean;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  correct: boolean;
}
