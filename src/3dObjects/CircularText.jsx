import React from 'react';
import LionModel from './LionFigure';

const CircularText = () => {
  return (
    <>
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Black circle background */}
        <div className="absolute inset-0 rounded-full bg-black flex items-center justify-center overflow-hidden">
          <LionModel />
        </div>

        {/* Rotating circular text */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text fill="white" fontSize="16" fontWeight="500">
              <textPath href="#circlePath" startOffset="0%">
                contact - contact - contact - contact -
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default CircularText;