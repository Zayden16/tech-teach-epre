import { Injectable } from "@angular/core";
import { Course, CourseItem, CourseItemType } from "src/model";

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
      courseItems: [
        {
          id: 203,
          title: "Video: Theory About CPUs",
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: "https://www.youtube.com/embed/7yKycb4e7Z0",
        },
        {
          id: 202,
          title: "Theory About CPUs",
          solved: false,
          type: CourseItemType.Text,
          content:
            "A central processing unit (CPU)—also called a central processor or main processor—is the most important processor in a given computer. Its electronic circuitry executes instructions of a computer program, such as arithmetic, logic, controlling, and input/output (I/O) operations. This role contrasts with that of external components, such as main memory and I/O circuitry,[1] and specialized coprocessors such as graphics processing units (GPUs).  The form, design, and implementation of CPUs have changed over time, but their fundamental operation remains almost unchanged. Principal components of a CPU include the arithmetic–logic unit (ALU) that performs arithmetic and logic operations, processor registers that supply operands to the ALU and store the results of ALU operations, and a control unit that orchestrates the fetching (from memory), decoding and execution (of instructions) by directing the coordinated operations of the ALU, registers, and other components. Modern CPUs devote a lot of semiconductor area to caches, instruction-level parallelism and privileged modes to support operating systems and virtualization.",
        },
        {
          id: 201,
          title: "Chapter 1: Understanding Computers",
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 301,
              question: "What is the primary function of a CPU?",
              solved: false,
              options: [
                { id: 401, text: "To store data", correct: false },
                { id: 402, text: "To process instructions", correct: true },
                { id: 403, text: "To output data", correct: false },
              ],
            },
            {
              id: 302,
              question: "What unit is used to measure the speed of a CPU?",
              solved: false,
              options: [
                { id: 401, text: "m/s", correct: false },
                { id: 402, text: "kg/m3", correct: false },
                { id: 403, text: "MHz", correct: true },
              ],
            },
            {
              id: 303,
              question: "Which is a producer of CPUs",
              solved: false,
              options: [
                { id: 401, text: "Intel", correct: true },
                { id: 402, text: "Raytheon", correct: false },
                { id: 403, text: "NORINCO", correct: false },
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

  getCourseItemById(itemId: string): CourseItem | undefined {
    const numericId = Number(itemId);
    for (const course of this.courses) {
      const foundItem = course.courseItems.find(
        (item) => item.id === numericId,
      );
      if (foundItem) {
        return foundItem;
      }
    }
    return undefined;
  }

  setCourseItemToSolved(courseId: number, courseItemId: number): void {
    const course = this.courses.find((course) => course.id === courseId);
    if (course) {
      const courseItem = course.courseItems.find(
        (courseItem) => courseItem.id === courseItemId,
      );
      if (courseItem) {
        courseItem.solved = true;
      }
    }
  }

  setQuestionToSolved(
    courseId: number,
    courseItemId: number,
    questionId: number,
  ): void {
    const course = this.courses.find((c) => c.id === courseId);
    if (course) {
      const courseItem = course.courseItems.find(
        (ci) => ci.id === courseItemId,
      );
      if (courseItem && courseItem.type === CourseItemType.Quiz) {
        const question = courseItem.questions?.find((q) => q.id === questionId);
        if (question) {
          question.solved = true;
        }
      }
    }
  }
}
