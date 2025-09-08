import React from 'react';
import LionModel from '../3dObjects/LionFigure';

const CircularText = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 160, height: 160 }} // smaller container
    >
      {/* Center black circle with 3D model */}
      <div
        className="flex items-center justify-center rounded-full bg-black"
        style={{
          width: 100,
          height: 100,
          zIndex: 2,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <LionModel />
      </div>

      {/* Rotating circular text */}
      <div
        className="absolute left-0 top-0 flex items-center justify-center pointer-events-none animate-spin-slow"
        style={{
          width: 160,
          height: 160,
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 160 160" width={160} height={160}>
          <defs>
            <path
              id="circlePath"
              d="M 80, 80 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text
            fill="gray"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="0"
          >
            <textPath
              href="#circlePath"
              startOffset="10%"
              textLength="420" // forces text to stretch evenly
              spacing="10"
            >
              - contact - contact - contact -
            </textPath>
          </text>
        </svg>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CircularText;
