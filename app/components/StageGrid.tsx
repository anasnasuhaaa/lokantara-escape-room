'use client';

import React from 'react';

interface StageGridProps {
  currentStage: number;
  onStageClick: (stage: number) => void;
}

export const StageGrid: React.FC<StageGridProps> = ({ currentStage, onStageClick }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-950 to-black">
      {/* Title */}
      <div className="mb-16 text-center">
        <h1 
          className="text-6xl font-bold mb-4 text-red-500 glitch"
          style={{ fontFamily: "'Creepster', cursive" }}
        >
          HORRORS
        </h1>
        <p className="text-xl text-red-400 animate-pulse">
          Choose Your Nightmare...
        </p>
      </div>

      {/* Stage Grid */}
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-6 px-4">
        {[1, 2, 3, 4, 5].map((stage) => (
          <button
            key={stage}
            onClick={() => onStageClick(stage)}
            className={`
              relative w-24 h-24 lg:w-32 lg:h-32 rounded-lg font-bold text-2xl
              transition-all duration-300 transform hover:scale-110
              flex items-center justify-center font-mono
              ${
                stage <= currentStage
                  ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer shadow-lg hover:shadow-red-500/50 pulse-red'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed border-2 border-gray-600'
              }
              border-2 border-red-500
            `}
            disabled={stage > currentStage}
            aria-label={`Stage ${stage}`}
          >
            <span className="text-3xl lg:text-4xl">
              {stage <= currentStage ? '◆' : '◇'}
            </span>
            <span className="absolute bottom-2 text-xs lg:text-sm opacity-75">
              {stage <= currentStage ? 'Ready' : 'Locked'}
            </span>
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-16 text-center max-w-2xl px-4">
        <p className="text-red-400 text-sm flicker">
          Each stage holds a dark question. Answer wisely... or suffer the consequences.
        </p>
      </div>

      {/* Stage Counter */}
      <div className="absolute bottom-8 right-8 text-red-500 text-lg font-mono">
        PROGRESS: {currentStage}/5
      </div>
    </div>
  );
};
