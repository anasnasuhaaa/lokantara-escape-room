'use client';

import React, { useState, useEffect } from 'react';
import { Quiz, checkAnswer } from '@/app/lib/quizData';
import { playCorrectSound, playWrongSound } from '@/app/lib/soundEffects';

interface QuizCardProps {
  quiz: Quiz;
  stage: number;
  onBack: () => void;
  onCorrect: () => void;
}


type ResultType = 'none' | 'correct' | 'wrong';

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, stage, onBack, onCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<ResultType>('none');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!answer.trim()) {
      return;
    }

    setLoading(true);

    if (checkAnswer(answer, quiz.correctAnswer)) {
      playCorrectSound();
      setResult('correct');
      setTimeout(() => {
        onCorrect();
        setAnswer('');
        setResult('none');
        setLoading(false);
      }, 2000);
    } else {
      playWrongSound();
      setResult('wrong');
      setTimeout(() => {
        setAnswer('');
        setResult('none');
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-linear-to-br from-black via-red-950 to-black p-3 sm:p-4 md:p-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border border-red-500"></div>
          ))}
        </div>
      </div>

      {/* Main card container */}
      <div className="relative max-w-xs sm:max-w-md md:max-w-3xl w-full">
        {/* Stage indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 sm:-translate-y-12 text-center">
          <span className="text-red-500 font-mono text-xs sm:text-sm md:text-base">STAGE {stage}/13</span>
        </div>

        {/* Card */}
        <div
          className={`
            rounded-lg backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8
            border-2 transition-all duration-300
            ${result === 'correct'
              ? 'border-green-500 bg-green-900/30 shadow-lg shadow-green-500/50'
              : result === 'wrong'
                ? 'border-red-500 bg-red-950/50 shadow-lg shadow-red-500/50'
                : 'border-red-500/50 bg-black/80 shadow-lg shadow-red-500/30'
            }
          `}
        >
          {/* Question */}
          <div className="mb-4 sm:mb-6 md:mb-8 text-center">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 animate-fade-in  font-mono
            ${result === 'correct'
                ? ' text-green-400'
                : ' text-red-400 '
              }`}
              // style={{
              //   fontFamily: "flavors, cursive",
              //   textTransform: "capitalize"
              // }}
            >
              {quiz.question}
            </h2>
            {/* {quiz.hint && (
              <p className="text-red-600/70 text-sm italic">
                Hint: {quiz.hint}
              </p>
            )} */}
          </div>

          {/* Result display */}
          {result !== 'none' && (
            <div
              className={`
                mb-4 sm:mb-6 md:mb-8 p-3 sm:p-10 rounded text-center font-bold text-lg sm:text-xl md:text-5xl animate-fade-in font-mono
                ${result === 'correct'
                  ? 'bg-green-500/20 text-green-400 border border-green-500'
                  : 'bg-red-500/20 text-red-400 border border-red-500'
                }
              `}
            >
              {result === 'correct' ? '✓ BENAR!' : '✗ SALAH!'}
            </div>
          )}

          {/* Form */}
          {result === 'none' && (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder=". . ."
                  disabled={loading}
                  autoFocus
                  className={`
                    w-full px-3 sm:px-4 py-4 sm:py-10 rounded bg-black/50 border-2 border-red-500/50
                    text-sm sm:text-6xl text-red-500 placeholder-red-600/50 focus:outline-none
                    transition-all duration-200 font-mono font-bold
                    focus:border-red-500 focus:shadow-lg focus:shadow-red-500/30
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    px-4 sm:px-6 md:px-8 w-full py-2 rounded font-bold text-white text-sm sm:text-base font-mono
                    transition-all duration-200 hover:shadow-lg
                    ${loading
                      ? 'bg-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-red-600 hover:bg-red-500 hover:shadow-red-500/50'
                    }
                  `}
                >
                  {loading ? 'Wait...' : 'Submit'}
                </button>

                {/* <button
                  type="button"
                  onClick={onBack}
                  disabled={loading}
                  className={`
                    px-4 sm:px-6 md:px-8 py-2 rounded font-bold text-white border-2 border-red-600 text-sm sm:text-base
                    transition-all duration-200
                    ${loading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-red-600/20 hover:shadow-lg'
                    }
                  `}
                >
                  Back
                </button> */}
              </div>
            </form>
          )}

          {/* Show back button after result */}
          {result !== 'none' && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <button
                onClick={() => {
                  setResult('none');
                  setAnswer('');
                }}
                className={`
                  px-4 sm:px-6 w-full md:px-8 py-2 rounded font-bold text-white border-2 text-sm sm:text-base
                  transition-all duration-200
                  ${result === 'correct'
                    ? 'border-green-500 hover:bg-green-500/20'
                    : 'border-red-600 hover:bg-red-600/20'
                  }
                `}
              >
                {result === 'correct' ? 'Continue' : 'Try Again'}
              </button>
            </div>
          )}
        </div>

        {/* Exit button */}
        <button
          onClick={onBack}
          className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 text-red-500 hover:text-red-400 transition-colors text-xs sm:text-sm font-mono"
        >
          ← Return to Stage Selection
        </button>
      </div>
    </div>
  );
};
