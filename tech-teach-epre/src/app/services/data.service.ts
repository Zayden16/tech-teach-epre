import { Injectable } from "@angular/core";
import { Course, CourseItemType } from "src/model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  courses: Course[] = [
    {
      id: 101,
      title: "Introduction to Information Technology",
      subtitle: "Basics of IT and Computing",
      author: "Jane Doe",
      solved: false,
      courseItems: [
        {
          id: 201,
          title: "Chapter 1: Understanding Computers",
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 301,
              question: "What is the primary function of a CPU?",
              answer: "To process instructions",
              solved: false,
              options: [
                { id: 401, text: "To store data", correct: false },
                { id: 402, text: "To process instructions", correct: true },
                { id: 403, text: "To output data", correct: false },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    const numericId = Number(id);
    return this.courses.find((course) => course.id === numericId);
  }
}
