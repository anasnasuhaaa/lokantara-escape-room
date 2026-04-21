'use client';

import React, { useState, useEffect } from 'react';
import { StageGrid } from './components/StageGrid';
import { QuizCard } from './components/QuizCard';
import { getQuizByStage, Quiz } from './lib/quizData';
import { resumeAudioContext } from './lib/soundEffects';

const STORAGE_KEY = 'lokantara_current_stage';

export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedStage = localStorage.getItem(STORAGE_KEY);
    if (savedStage) {
      setCurrentStage(parseInt(savedStage, 10));
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever currentStage changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, currentStage.toString());
    }
  }, [currentStage, isLoaded]);

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
    if (activeStage && activeStage < 13) {
      setCurrentStage(activeStage + 1);
    }
    handleBackToStages();
  };

  const handleReset = () => {
    setCurrentStage(1);
    setActiveStage(null);
    setQuiz(null);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      {activeStage === null ? (
        <StageGrid currentStage={currentStage} onStageClick={handleStageClick} onReset={handleReset} />
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
