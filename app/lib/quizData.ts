export interface Quiz {
  id: number;
  question: string;
  correctAnswer: string;
  hint?: string;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "Nama kabinet Ormawa Ekse sekarang?",
    correctAnswer: "astana angkasa",
    hint: "A dark place with a dark name...",
  },
  {
    id: 2,
    question: "Departemen yang request website ini (singkatan)?",
    correctAnswer: "senbud",
    hint: "An unlucky number...",
  },
  {
    id: 3,
    question: "Nama hantu dari Indonesia yang identik dengan kuburan?",
    correctAnswer: "pocong",
    hint: "A girl's name that brings fear...",
  },
  {
    id: 4,
    question: "Tahun berapa angkatan 63 masuk IPB?",
    correctAnswer: "2026",
    hint: "A date from the distant past...",
  },
  {
    id: 5,
    question: "Tahun IPB didiriikan?",
    correctAnswer: "1963",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 6,
    question: "Harsakala warna biru di MPKMB 62?",
    correctAnswer: "jalasera",
    hint: "A date from the distant past...",
  },
  {
    id: 7,
    question: "Gedung wisuda IPB?",
    correctAnswer: "gww",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 8,
    question: "Fakultas pertama IPB (singkatan)?",
    correctAnswer: "faperta",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 9,
    question: "90 / 3 =",
    correctAnswer: "30",
    hint: "Look for the answer...",
  },
  {
    id: 10,
    question: "Gedung PPKU?",
    correctAnswer: "ccr",
    hint: "Count them all...",
  },
  {
    id: 11,
    question: "Kantin FTT?",
    correctAnswer: "sapta",
    hint: "A historical figure...",
  },
  {
    id: 12,
    question: "Ojek Helm Biru?",
    correctAnswer: "poki",
    hint: "Latin words...",
  },
  {
    id: 13,
    question: "Harga Poki Rp....",
    correctAnswer: "5000",
    hint: "Recently created...",
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
