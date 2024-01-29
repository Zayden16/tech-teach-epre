import { Injectable } from '@angular/core';
import { Course, CourseItem, CourseItemType } from 'src/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  courses: Course[] = [
    {
      id: 101,
      title: 'Introduction to Information Technology',
      subtitle: 'Basics of IT and Computing',
      author: 'Jane Doe',
      courseItems: [
        {
          id: 203,
          title: 'Video: Theory About CPUs',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        {
          id: 202,
          title: 'Theory About CPUs',
          solved: false,
          type: CourseItemType.Text,
          content:
            'A central processing unit (CPU)—also called a central processor or main processor—is the most important processor in a given computer. Its electronic circuitry executes instructions of a computer program, such as arithmetic, logic, controlling, and input/output (I/O) operations. This role contrasts with that of external components, such as main memory and I/O circuitry,[1] and specialized coprocessors such as graphics processing units (GPUs).  The form, design, and implementation of CPUs have changed over time, but their fundamental operation remains almost unchanged. Principal components of a CPU include the arithmetic–logic unit (ALU) that performs arithmetic and logic operations, processor registers that supply operands to the ALU and store the results of ALU operations, and a control unit that orchestrates the fetching (from memory), decoding and execution (of instructions) by directing the coordinated operations of the ALU, registers, and other components. Modern CPUs devote a lot of semiconductor area to caches, instruction-level parallelism and privileged modes to support operating systems and virtualization.',
        },
        {
          id: 201,
          title: 'Chapter 1: Understanding Computers',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 301,
              question: 'What is the primary function of a CPU?',
              solved: false,
              options: [
                { id: 401, text: 'To store data', correct: false },
                { id: 402, text: 'To process instructions', correct: true },
                { id: 403, text: 'To output data', correct: false },
              ],
            },
            {
              id: 302,
              question: 'What unit is used to measure the speed of a CPU?',
              solved: false,
              options: [
                { id: 401, text: 'm/s', correct: false },
                { id: 402, text: 'kg/m3', correct: false },
                { id: 403, text: 'MHz', correct: true },
              ],
            },
            {
              id: 303,
              question: 'Which is a producer of CPUs',
              solved: false,
              options: [
                { id: 401, text: 'Intel', correct: true },
                { id: 402, text: 'Raytheon', correct: false },
                { id: 403, text: 'NORINCO', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 102,
      title: 'Fundamentals of Software Engineering',
      subtitle: 'Exploring Key Concepts in Software Development',
      author: 'John Smith',
      courseItems: [
        {
          id: 204,
          title: 'Video: Introduction to Object-Oriented Programming',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        {
          id: 205,
          title: 'Article: The Life Cycle of Software Development',
          solved: false,
          type: CourseItemType.Text,
          content:
            'Software development follows a life cycle that starts with planning and ends with deployment and maintenance. Key stages include requirements gathering, where developers determine what the software should do; design, where they decide how it will do it; implementation, where the software is written; testing, to ensure it works as expected; and deployment, where the software is put into use. Maintenance involves making updates and fixing bugs. This life cycle ensures that software meets user needs, is reliable, and easy to maintain.',
        },
        {
          id: 206,
          title: 'Quiz: Basics of Software Development',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 304,
              question:
                'Which is the first stage of the software development life cycle?',
              solved: false,
              options: [
                { id: 404, text: 'Testing', correct: false },
                { id: 405, text: 'Planning', correct: true },
                { id: 406, text: 'Deployment', correct: false },
              ],
            },
            {
              id: 305,
              question:
                'What is the purpose of the testing stage in software development?',
              solved: false,
              options: [
                { id: 407, text: 'To gather requirements', correct: false },
                {
                  id: 408,
                  text: 'To ensure the software works as expected',
                  correct: true,
                },
                { id: 409, text: 'To maintain the software', correct: false },
              ],
            },
            {
              id: 306,
              question:
                'Which programming paradigm is based on the concept of objects?',
              solved: false,
              options: [
                { id: 410, text: 'Procedural Programming', correct: false },
                { id: 411, text: 'Object-Oriented Programming', correct: true },
                { id: 412, text: 'Functional Programming', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 103,
      title: 'Basics of Network Security',
      subtitle: 'Understanding Cybersecurity Fundamentals',
      author: 'Alex Johnson',
      courseItems: [
        {
          id: 207,
          title: 'Video: Introduction to Network Protocols',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/3QhU9jd03a0',
        },
        {
          id: 208,
          title: 'Article: The Importance of Encryption',
          solved: false,
          type: CourseItemType.Text,
          content:
            "Encryption is a critical aspect of securing data transmitted over networks. It involves converting information or data into a code to prevent unauthorized access. Encryption doesn't prevent data interception but ensures that intercepted data is difficult to decipher. It is widely used in securing data transmission in various forms, including SSL/TLS for secure websites, WPA2 for WiFi networks, and VPNs for secure remote access. Understanding encryption is key to comprehending many aspects of network security and privacy.",
        },
        {
          id: 209,
          title: 'Quiz: Network Security Basics',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 307,
              question: 'What is the primary purpose of encryption?',
              solved: false,
              options: [
                {
                  id: 413,
                  text: 'To speed up data transmission',
                  correct: false,
                },
                {
                  id: 414,
                  text: 'To prevent unauthorized data access',
                  correct: true,
                },
                { id: 415, text: 'To increase data storage', correct: false },
              ],
            },
            {
              id: 308,
              question: 'Which protocol is used for secure web browsing?',
              solved: false,
              options: [
                { id: 416, text: 'HTTP', correct: false },
                { id: 417, text: 'SSL/TLS', correct: true },
                { id: 418, text: 'FTP', correct: false },
              ],
            },
            {
              id: 309,
              question: 'What does VPN stand for?',
              solved: false,
              options: [
                { id: 419, text: 'Virtual Public Network', correct: false },
                { id: 420, text: 'Virtual Private Network', correct: true },
                { id: 421, text: 'Variable Path Network', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 104,
      title: 'Introduction to Artificial Intelligence',
      subtitle: 'Exploring the World of AI and Machine Learning',
      author: 'Emily White',
      courseItems: [
        {
          id: 210,
          title: 'Video: What is Artificial Intelligence?',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        {
          id: 211,
          title: 'Article: The History and Evolution of AI',
          solved: false,
          type: CourseItemType.Text,
          content:
            'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. The history of AI dates back to the mid-20th century, with key milestones in the development of the Turing Test, neural networks, machine learning algorithms, and deep learning. Understanding this history is crucial for grasping how AI technologies have evolved and their impact on various sectors.',
        },
        {
          id: 212,
          title: 'Quiz: Basic Concepts in AI',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 310,
              question:
                'Who is considered the father of Artificial Intelligence?',
              solved: false,
              options: [
                { id: 422, text: 'Alan Turing', correct: true },
                { id: 423, text: 'Isaac Newton', correct: false },
                { id: 424, text: 'Albert Einstein', correct: false },
              ],
            },
            {
              id: 311,
              question:
                "What does 'machine learning' refer to in the context of AI?",
              solved: false,
              options: [
                {
                  id: 425,
                  text: 'Machines repairing themselves',
                  correct: false,
                },
                {
                  id: 426,
                  text: 'Machines learning from data to improve their performance',
                  correct: true,
                },
                {
                  id: 427,
                  text: 'Machines replacing human jobs',
                  correct: false,
                },
              ],
            },
            {
              id: 312,
              question: 'Which of the following is an application of AI?',
              solved: false,
              options: [
                { id: 428, text: 'Solar panels', correct: false },
                { id: 429, text: 'Voice recognition systems', correct: true },
                { id: 430, text: 'Hydraulic systems', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 105,
      title: 'Introduction to Web Development',
      subtitle: 'Learning the Basics of Building Websites',
      author: 'Michael Brown',
      courseItems: [
        {
          id: 213,
          title: 'Video: HTML Fundamentals',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
        },
        {
          id: 214,
          title: 'Article: CSS for Beginners',
          solved: false,
          type: CourseItemType.Text,
          content:
            'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. It is one of the cornerstone technologies of the World Wide Web, alongside HTML and JavaScript. This article covers the basics of CSS, including syntax, selectors, and the box model, providing a foundation for understanding how to style web pages effectively.',
        },
        {
          id: 215,
          title: 'Quiz: Understanding HTML and CSS',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 313,
              question: 'What does HTML stand for?',
              solved: false,
              options: [
                { id: 431, text: 'HyperText Markup Language', correct: true },
                { id: 432, text: 'HighText Machine Language', correct: false },
                {
                  id: 433,
                  text: 'Hyperlink and Text Markup Language',
                  correct: false,
                },
              ],
            },
            {
              id: 314,
              question: 'Which is used to style a web page?',
              solved: false,
              options: [
                { id: 434, text: 'HTML', correct: false },
                { id: 435, text: 'CSS', correct: true },
                { id: 436, text: 'JavaScript', correct: false },
              ],
            },
            {
              id: 315,
              question: 'Which tag is used to link a CSS stylesheet in HTML?',
              solved: false,
              options: [
                { id: 437, text: '<script>', correct: false },
                { id: 438, text: '<link>', correct: true },
                { id: 439, text: '<style>', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 106,
      title: 'Understanding Data Science',
      subtitle: 'A Comprehensive Introduction to Data Science Concepts',
      author: 'Linda Garcia',
      courseItems: [
        {
          id: 216,
          title: 'Video: Data Analysis Fundamentals',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/XDAnFZqJDvI',
        },
        {
          id: 217,
          title: 'Article: Machine Learning and Its Applications',
          solved: false,
          type: CourseItemType.Text,
          content:
            "Machine Learning (ML) is a subset of data science that focuses on building systems capable of learning from and making decisions based on data. This field combines elements of computer science and statistics to create algorithms that can process, analyze, and draw conclusions from data. Applications of ML range from simple tasks like email filtering and recommendation systems to complex operations like image recognition and autonomous driving vehicles. This article explores various machine learning methods, their applications, and how they're transforming industries.",
        },
        {
          id: 218,
          title: 'Quiz: Basics of Data Science',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 316,
              question: 'What is the primary goal of data science?',
              solved: false,
              options: [
                { id: 440, text: 'To create databases', correct: false },
                {
                  id: 441,
                  text: 'To extract insights and knowledge from data',
                  correct: true,
                },
                { id: 442, text: 'To design websites', correct: false },
              ],
            },
            {
              id: 317,
              question:
                'Which of these is a popular programming language in data science?',
              solved: false,
              options: [
                { id: 443, text: 'HTML', correct: false },
                { id: 444, text: 'Python', correct: true },
                { id: 445, text: 'CSS', correct: false },
              ],
            },
            {
              id: 318,
              question: "What is 'big data'?",
              solved: false,
              options: [
                { id: 446, text: 'Large text files', correct: false },
                {
                  id: 447,
                  text: 'Extremely large data sets that may be analyzed computationally',
                  correct: true,
                },
                { id: 448, text: 'A type of database', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 107,
      title: 'Principles of Digital Marketing',
      subtitle: 'Mastering Online Marketing Strategies',
      author: 'David Thompson',
      courseItems: [
        {
          id: 219,
          title: 'Video: Overview of Digital Marketing',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/sRlO0JAyNPk',
        },
        {
          id: 220,
          title: 'Article: SEO Basics and Best Practices',
          solved: false,
          type: CourseItemType.Text,
          content:
            "Search Engine Optimization (SEO) is a crucial aspect of digital marketing, focusing on improving a website's visibility in search engine results. This involves understanding how search engines work, the algorithms they use, and what people search for. The goal is to enhance the relevance and structure of your website so that it is more attractive to search engines. This article covers the basics of SEO, including keyword research, on-page SEO, link building, and measuring SEO success.",
        },
        {
          id: 221,
          title: 'Quiz: Digital Marketing Fundamentals',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 319,
              question: 'What is the primary objective of SEO?',
              solved: false,
              options: [
                { id: 449, text: 'To increase website speed', correct: false },
                {
                  id: 450,
                  text: "To improve a website's visibility in search engine results",
                  correct: true,
                },
                {
                  id: 451,
                  text: 'To make the website more colorful',
                  correct: false,
                },
              ],
            },
            {
              id: 320,
              question:
                'Which platform is most used for social media marketing?',
              solved: false,
              options: [
                { id: 452, text: 'Google', correct: false },
                { id: 453, text: 'Facebook', correct: true },
                { id: 454, text: 'Bing', correct: false },
              ],
            },
            {
              id: 321,
              question: 'What does PPC stand for in digital marketing?',
              solved: false,
              options: [
                { id: 455, text: 'Popular Public Content', correct: false },
                { id: 456, text: 'Pay Per Click', correct: true },
                { id: 457, text: 'Personal PC', correct: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 108,
      title: 'Essentials of Project Management',
      subtitle: 'Key Skills and Techniques for Effective Management',
      author: 'Sarah Lee',
      courseItems: [
        {
          id: 222,
          title: 'Video: Introduction to Project Management',
          solved: false,
          type: CourseItemType.Video,
          mediaUrl: 'https://www.youtube.com/embed/ZX3QRMVypUU',
        },
        {
          id: 223,
          title: 'Article: Project Planning and Execution',
          solved: false,
          type: CourseItemType.Text,
          content:
            'Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, quality, and budget. The secondary challenge is to optimize the allocation of necessary inputs and apply them to meet pre-defined objectives. This article discusses various methodologies in project management, such as Agile, Scrum, and Waterfall, and the best practices for planning, executing, and closing projects.',
        },
        {
          id: 224,
          title: 'Quiz: Basics of Project Management',
          solved: false,
          type: CourseItemType.Quiz,
          questions: [
            {
              id: 322,
              question: 'What is a Gantt Chart used for in project management?',
              solved: false,
              options: [
                { id: 458, text: 'Budgeting', correct: false },
                { id: 459, text: 'Scheduling', correct: true },
                { id: 460, text: 'Risk Analysis', correct: false },
              ],
            },
            {
              id: 323,
              question:
                'Which methodology focuses on iterative development and collaboration?',
              solved: false,
              options: [
                { id: 461, text: 'Waterfall', correct: false },
                { id: 462, text: 'Agile', correct: true },
                { id: 463, text: 'Six Sigma', correct: false },
              ],
            },
            {
              id: 324,
              question: "What does 'scope' refer to in project management?",
              solved: false,
              options: [
                { id: 464, text: 'The budget of the project', correct: false },
                {
                  id: 465,
                  text: 'The detailed description of the project and its deliverables',
                  correct: true,
                },
                {
                  id: 466,
                  text: 'The time frame for the project',
                  correct: false,
                },
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
        (item) => item.id === numericId
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
        (courseItem) => courseItem.id === courseItemId
      );
      if (courseItem) {
        courseItem.solved = true;
      }
    }
  }

  setQuestionToSolved(
    courseId: number,
    courseItemId: number,
    questionId: number
  ): void {
    const course = this.courses.find((c) => c.id === courseId);
    if (course) {
      const courseItem = course.courseItems.find(
        (ci) => ci.id === courseItemId
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
