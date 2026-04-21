'use client';

import React, { useState } from 'react';

interface StageGridProps {
  currentStage: number;
  onStageClick: (stage: number) => void;
  onReset: () => void;
}

export const StageGrid: React.FC<StageGridProps> = ({ currentStage, onStageClick, onReset }) => {
  // State untuk mengontrol tampilan modal
  const [showResetModal, setShowResetModal] = useState(false);

  // Fungsi untuk menangani reset setelah konfirmasi
  const handleConfirmReset = () => {
    onReset();
    setShowResetModal(false);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-linear-to-br from-black via-red-950 to-black overflow-y-auto py-4 sm:py-6 md:py-8">
      {/* Title */}
      <div className="mb-4 sm:mb-6 md:mb-8 text-center px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-widest text-red-500 animate-bounce"
          style={{ fontFamily: "creepster, cursive" }}
        >
          Lokantara Escape Room
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-400 animate-pulse">
          Let's Start Your Journey...
        </p>
      </div>

      {/* Stage Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-6 px-3 sm:px-4 md:px-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((stage) => (
          <button
            key={stage}
            onClick={() => onStageClick(stage)}
            className={`
              relative w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg font-bold
              transition-all duration-200 transform 
              flex items-center justify-center font-mono flex-col
              ${stage == currentStage
                ? 'bg-red-600 hover:bg-red-500 hover:scale-105 sm:hover:scale-110 text-white cursor-pointer shadow-lg hover:shadow-red-500/50 pulse-red'
                : 'bg-gray-800 text-gray-600 cursor-not-allowed border-2 border-gray-600'
              }
                ${stage < currentStage
                ? 'bg-red-600 transform hover:scale-100  text-white cursor-pointer shadow-lg hover:shadow-red-500/50 pulse-red'
                : 'bg-gray-800 text-gray-600 cursor-not-allowed border-2 border-gray-600'
              }
              border-2 border-red-500 text-lg sm:text-xl md:text-2xl
            `}
            disabled={stage > currentStage || stage < currentStage}
            aria-label={`Stage ${stage}`}
          >
            <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">
              {stage}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {stage < currentStage ? '◆' : '◇'}
            </span>
            <span className=" text-sm opacity-75">
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

      {/* Reset Button (Sekarang memicu modal) */}
      <button
        onClick={() => setShowResetModal(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm px-3 py-2 rounded font-mono transition-colors z-40"
        aria-label="Open reset confirmation"
      >
        RESET STAGE
      </button>

      {/* Stage Counter */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-red-500 text-xs sm:text-sm md:text-lg font-mono bg-black/50 px-3 py-1 rounded">
        PROGRESS: {currentStage - 1}/13
      </div>

      {/* Confirmation Modal */}
      {/* Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-zinc-900 border-2 border-red-600 p-6 rounded-lg max-w-sm w-full shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <h2 className="text-red-500 font-mono text-xl font-bold mb-4">PERINGATAN!</h2>
            <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
              Apakah Anda yakin ingin mereset semua progress? <br />
              Semua stage akan terkunci kembali.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs rounded transition-colors border border-zinc-600"
              >
                BATAL
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs rounded transition-colors"
              >
                YA, RESET
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};