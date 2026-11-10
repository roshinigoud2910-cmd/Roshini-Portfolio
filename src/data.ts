export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  github: string;
  demo?: string;
};

// This is based on the AWS Lambda, S3, and MongoDB project you previously mentioned.
// Keep the description factual and add implementation-specific details as you confirm them.
export const projects: Project[] = [
  {
    number: "01",
    title: "Cloud-Connected Application",
    category: "CLOUD / BACKEND",
    description:
      "A personal project using AWS Lambda, Amazon S3, and MongoDB to explore serverless execution, cloud storage, and persistent application data.",
    problem:
      "The project gave me a practical way to work with cloud services and connect application logic with storage and a database. Add the specific user problem and requirements here so visitors can understand what the application does.",
    approach:
      "The project uses AWS Lambda, Amazon S3, and MongoDB. In the final case study, describe the actual request flow, what data is stored in each service, how errors are handled, and the design trade-offs you made. Include testing or performance results only when you have measured them.",
    stack: ["AWS Lambda", "Amazon S3", "MongoDB"],
    github: "",
  },
];

export const articles = [
  {
    date: "ENGINEERING TOPIC",
    title: "Thinking through a serverless architecture",
    description:
      "Explore how responsibilities are divided between compute, object storage, and a database—and document the decisions made in a real implementation.",
    tag: "CLOUD ARCHITECTURE",
    href: "#projects",
  },
  {
    date: "PRACTICE NOTES",
    title: "Choosing data structures deliberately",
    description:
      "Compare possible approaches by the operations a problem needs, then consider time complexity, space complexity, and readability.",
    tag: "DATA STRUCTURES",
    href: "#skills",
  },
  {
    date: "DESIGN NOTES",
    title: "Designing code that is easier to maintain",
    description:
      "Reflect on clear interfaces, focused responsibilities, error handling, and the role of testing in keeping changes safe.",
    tag: "OBJECT-ORIENTED DESIGN",
    href: "#about",
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "C#",
  "C++",
  "Python",
  "Node.js",
  "AWS Lambda",
  "Amazon S3",
  "MongoDB",
  "REST APIs",
  "Data Structures & Algorithms",
  "Object-Oriented Design",
  "Git",
];
