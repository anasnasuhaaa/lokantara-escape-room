export interface Quiz {
  id: number;
  question: string;
  correctAnswer: string;
  hint?: string;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "What is the name of the haunted mansion in our first horror tale?",
    correctAnswer: "blackwood manor",
    hint: "A dark place with a dark name...",
  },
  {
    id: 2,
    question: "How many souls were trapped in the ancient well?",
    correctAnswer: "13",
    hint: "An unlucky number...",
  },
  {
    id: 3,
    question: "What was the name of the cursed doll?",
    correctAnswer: "vera",
    hint: "A girl's name that brings fear...",
  },
  {
    id: 4,
    question: "In which year did the haunting begin?",
    correctAnswer: "1887",
    hint: "A date from the distant past...",
  },
  {
    id: 5,
    question: "What is the final word spoken by the ghost?",
    correctAnswer: "remember",
    hint: "Don't forget... they want you to...",
  },
];

export const getQuizByStage = (stage: number): Quiz | undefined => {
  return quizzes.find((q) => q.id === stage);
};

export const normalizeAnswer = (answer: string): string => {
  return answer.trim().toLowerCase().replace(/\s+/g, "");
};

export const checkAnswer = (answer: string, correctAnswer: string): boolean => {
  return normalizeAnswer(answer) === normalizeAnswer(correctAnswer);
};
