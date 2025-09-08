// filepath: c:\Users\lucky\Desktop\React\InternAssignments\leoClone\src\components\landingpage.jsx
import React, { useEffect, useState } from 'react';
import CircularText from '../3dObjects/CircularText'; // Import the new component

const Leo9Homepage = () => {
  const [animatedNodes, setAnimatedNodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate network nodes with animation
  useEffect(() => {
    const nodes = [];
    const colors = ['#ef4444', '#8b5cf6', '#3b82f6', '#000000'];
    
    const centerX = 200;
    const centerY = 200;
    const radius = 120;
    
    // Center node
    nodes.push({ x: centerX, y: centerY, color: '#000000', size: 6, delay: 0 });
    
    // Inner ring
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * 50;
      const y = centerY + Math.sin(angle) * 50;
      nodes.push({ 
        x, y, 
        color: colors[Math.floor(Math.random() * colors.length)], 
        size: 4,
        delay: i * 100,
        ring: 'inner'
      });
    }
    
    // Middle ring
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * 90;
      const y = centerY + Math.sin(angle) * 90;
      nodes.push({ 
        x, y, 
        color: colors[Math.floor(Math.random() * colors.length)], 
        size: 4,
        delay: (i * 50) + 600,
        ring: 'middle'
      });
    }
    
    // Outer ring
    for (let i = 0; i < 18; i++) {
      const angle = (i * 20) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      nodes.push({ 
        x, y, 
        color: colors[Math.floor(Math.random() * colors.length)], 
        size: 4,
        delay: (i * 30) + 1200,
        ring: 'outer'
      });
    }
    
    setAnimatedNodes(nodes);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-100 rounded-full opacity-25 animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`flex items-center justify-between px-8 py-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current transition-transform duration-300 group-hover:scale-110">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-black transition-all duration-300 group-hover:text-blue-600">leo9</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          {['Work', 'Services', 'Clients', 'About', 'Knowledge'].map((item, index) => (
            <div key={item} className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`} 
                 style={{ transitionDelay: `${200 + index * 100}ms` }}>
              <a href="#" className="text-gray-800 hover:text-black font-medium relative group transition-colors duration-300">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                {(item === 'Services' || item === 'About') && <span className="text-gray-400 ml-1">•</span>}
              </a>
            </div>
          ))}
          
          <div className={`flex items-center space-x-2 transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`} 
               style={{ transitionDelay: '700ms' }}>
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors duration-300 hover:scale-110 transform">
              <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition-colors duration-300"></div>
            </div>
          </div>
          
          <button className={`bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`} 
                  style={{ transitionDelay: '800ms' }}>
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-between px-8 py-16">
        {/* Left Side - Network Visualization */}
        <div className={`flex-1 flex justify-center transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`} 
             style={{ transitionDelay: '300ms' }}>
          <div className="relative w-96 h-96" 
               style={{ 
                 transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
               }}>
            <svg width="400" height="400" className="absolute inset-0">
              {/* Background glow effect */}
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Animated connection lines */}
              {animatedNodes.map((node, i) => 
                animatedNodes.slice(i + 1).map((otherNode, j) => {
                  const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
                  if (distance < 80) {
                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={node.x}
                        y1={node.y}
                        x2={otherNode.x}
                        y2={otherNode.y}
                        stroke="#d1d5db"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        opacity="0.6"
                        className="animate-pulse"
                        style={{
                          animationDelay: `${(node.delay + otherNode.delay) / 2}ms`,
                          animationDuration: '3s'
                        }}
                      />
                    );
                  }
                  return null;
                })
              )}
              
              {/* Animated nodes */}
              {animatedNodes.map((node, i) => (
                <g key={i}>
                  {/* Glow effect */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size * 2}
                    fill="url(#nodeGlow)"
                    opacity="0"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${node.delay}ms`,
                      animationDuration: '2s'
                    }}
                  />
                  {/* Main node */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill={node.color}
                    filter="url(#glow)"
                    opacity="0"
                    className="cursor-pointer hover:scale-125 transition-transform duration-300"
                    style={{
                      animation: `fadeInScale 0.8s ease-out ${node.delay}ms forwards, float 4s ease-in-out infinite ${node.delay}ms`,
                      transformOrigin: `${node.x}px ${node.y}px`
                    }}
                  />
                  {/* Ripple effect */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="2"
                    opacity="0"
                    className="animate-ping"
                    style={{
                      animationDelay: `${node.delay + 1000}ms`,
                      animationDuration: '3s'
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`flex-1 max-w-2xl transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} 
             style={{ transitionDelay: '500ms' }}>
          <div className="space-y-6">
            <h1 className="text-7xl font-bold leading-tight">
              {['Design', 'Transform', 'Accelerate'].map((word, index) => (
                <div key={word} 
                     className="transform transition-all duration-800 hover:text-blue-600 cursor-pointer"
                     style={{ 
                       animationDelay: `${700 + index * 200}ms`,
                       animation: `slideInRight 0.8s ease-out ${700 + index * 200}ms both`
                     }}>
                  {word}
                </div>
              ))}
            </h1>
            
            <p className={`text-xl text-gray-600 leading-relaxed transform transition-all duration-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{ transitionDelay: '1300ms' }}>
              Redefining user experiences through<br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Behavioural Science & AI
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <div className={`px-8 pb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
           style={{ transitionDelay: '1500ms' }}>
        <div className="flex items-center justify-between">
          {/* Static text */}
          <div className="text-black hover:text-black transition-colors duration-300 cursor-pointer whitespace-nowrap">
            Your trusted UI UX design agency.
          </div>
          
          {/* Separator line */}
          <div className="border-r border-black h-10 px-5"></div>

          
          {/* Scrolling client logos */}
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {[
                { type: 'bmw', content: 'BMW' },
                { type: 'text', content: 'SONY' },
                { type: 'text', content: 'HUGGIES' },
                { type: 'eton', content: 'ETON' },
                { type: 'text', content: 'KIMIRICA' },
                { type: 'text', content: 'INDIUM' },
                { type: 'bmw', content: 'BMW' },
                { type: 'text', content: 'SONY' },
                { type: 'text', content: 'HUGGIES' },
                { type: 'eton', content: 'ETON' },
                { type: 'text', content: 'KIMIRICA' },
                { type: 'text', content: 'INDIUM' }
              ].map((client, index) => (
                <div key={index} className="text-black inline-block mx-8  hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  {client.type === 'bmw' && (
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BMW</span>
                      </div>
                    </div>
                  )}
                  {client.type === 'text' && (
                    <div className="text-black text-2xl font-bold tracking-wider">{client.content}</div>
                  )}
                  {client.type === 'eton' && (
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      </div>
                      <span className="font-bold">ETON</span>
                      <span className="text-xs text-black">SOLUTIONS</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Replace the old block with the new component */}
          <CircularText />

        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Leo9Homepage;