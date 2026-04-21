'use client';

import React from 'react';

interface StageGridProps {
  currentStage: number;
  onStageClick: (stage: number) => void;
}

export const StageGrid: React.FC<StageGridProps> = ({ currentStage, onStageClick }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-linear-to-br from-black via-red-950 to-black overflow-y-auto py-4 sm:py-6 md:py-8">
      {/* Title */}
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-widest text-red-500"
          style={{ fontFamily: "creepster, cursive" }}
        >
          Lokantara Escape Room
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-400 animate-pulse">
          Choose Your Nightmare...
        </p>
      </div>

      {/* Stage Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-6 px-3 sm:px-4 md:px-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((stage) => (
          <button
            key={stage}
            onClick={() => onStageClick(stage)}
            className={`
              relative w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg font-bold
              transition-all duration-300 transform hover:scale-105 sm:hover:scale-110
              flex items-center justify-center font-mono
              ${stage <= currentStage
                ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer shadow-lg hover:shadow-red-500/50 pulse-red'
                : 'bg-gray-800 text-gray-600 cursor-not-allowed border-2 border-gray-600'
              }
              border-2 border-red-500 text-lg sm:text-xl md:text-2xl
            `}
            disabled={stage > currentStage}
            aria-label={`Stage ${stage}`}
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {stage < currentStage ? '◆' : '◇'}
            </span>
            <span className="absolute bottom-1 sm:bottom-2 text-xs opacity-75">
              {stage <= currentStage ? 'Ready' : 'Locked'}
            </span>
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center max-w-2xl px-3 sm:px-4">
        <p className="text-xs sm:text-sm md:text-base text-red-400 flicker">
          Departemen Seni dan Budaya - Ormawa Eksekutif PKU IPB
        </p>
      </div>

      {/* Stage Counter */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-red-500 text-xs sm:text-sm md:text-lg font-mono bg-black/50 px-3 py-1 rounded">
        PROGRESS: {currentStage}/8
      </div>
    </div>
  );
};
