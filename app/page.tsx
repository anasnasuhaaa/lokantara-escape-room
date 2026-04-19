'use client';

import React, { useState, useEffect } from 'react';
import { StageGrid } from './components/StageGrid';
import { QuizCard } from './components/QuizCard';
import { getQuizByStage, Quiz } from './lib/quizData';
import { resumeAudioContext } from './lib/soundEffects';

export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  // Resume audio context on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      resumeAudioContext();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keypress', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keypress', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keypress', handleFirstInteraction);
    };
  }, []);

  const handleStageClick = (stage: number) => {
    const stageQuiz = getQuizByStage(stage);
    if (stageQuiz) {
      setActiveStage(stage);
      setQuiz(stageQuiz);
    }
  };

  const handleBackToStages = () => {
    setActiveStage(null);
    setQuiz(null);
  };

  const handleCorrectAnswer = () => {
    if (activeStage && activeStage < 5) {
      setCurrentStage(activeStage + 1);
    }
    handleBackToStages();
  };

  return (
    <main className="w-full h-screen overflow-hidden">
      {activeStage === null ? (
        <StageGrid currentStage={currentStage} onStageClick={handleStageClick} />
      ) : quiz ? (
        <QuizCard
          quiz={quiz}
          stage={activeStage}
          onBack={handleBackToStages}
          onCorrect={handleCorrectAnswer}
        />
      ) : null}
    </main>
  );
}
