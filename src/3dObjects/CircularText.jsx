import React, { useState, useRef, useEffect } from 'react';
import LionModel from '../3dObjects/LionFigure';

const CircularText = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
const containerRef = useRef(null);

useEffect(() => {
  const handleGlobalMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );
    const activationRadius = 200;
    if (distance < activationRadius) {
      const moveX = (e.clientX - centerX) * 0.1;
      const moveY = (e.clientY - centerY) * 0.1;
      const maxMove = 15;
      const clampedX = Math.max(-maxMove, Math.min(maxMove, moveX));
      const clampedY = Math.max(-maxMove, Math.min(maxMove, moveY));
      setPosition({ x: clampedX, y: clampedY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };
  window.addEventListener('mousemove', handleGlobalMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleGlobalMouseMove);
  };
}, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ width: 160, height: 160,transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.1s ease-out',
 }} // smaller container
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
