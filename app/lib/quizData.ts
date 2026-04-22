export interface Quiz {
  id: number;
  question: string;
  correctAnswer: string;
  hint?: string;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "Nama Angkatan IPB 63?",
    correctAnswer: "mahadipta nabhaskara",
    hint: "A dark place with a dark name...",
  },
  {
    id: 2,
    question: "Departemen paling kalcer di Ormawa Ekse (singkatan)?",
    correctAnswer: "senbud",
    hint: "An unlucky number...",
  },
  {
    id: 3,
    question: "Harsakala warna coklat di MPKMB IPB 62?",
    correctAnswer: "bardacakra",
    hint: "A girl's name that brings fear...",
  },
  {
    id: 4,
    question: "Tahun berapa angkatan 56 masuk IPB?",
    correctAnswer: "2019",
    hint: "A date from the distant past...",
  },
  {
    id: 5,
    question: "Tahun berapa IPB didirikan?",
    correctAnswer: "1963",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 6,
    question: "Ada berapa Prodi di Fakultas Ekonomi dan Manajemen (sebutkan angka)?",
    correctAnswer: "5",
    hint: "A date from the distant past...",
  },
  {
    id: 7,
    question: "Fakultas dengan kode M?",
    correctAnswer: "ssmi",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 8,
    question: "(1+9)4 + 60?",
    correctAnswer: "100",
    hint: "Don't forget... they want you to...",
  },
  {
    id: 9,
    question: "30 x 1 x 30 / 30",
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
    question: "Kepanjangan POKI?",
    correctAnswer: "Paguyuban Ojek Kampus IPB",
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
