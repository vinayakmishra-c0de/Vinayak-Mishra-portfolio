import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor.ts';

export const CustomCursor: React.FC = () => {
  const { x, y, smoothX, smoothY, isHovering, isClicking, isVisible, isTouchDevice } = useCustomCursor();

  // Do not render on touch screens or before mouse moves into window
  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Magnetic Ring - Smooth Interpolated Follower */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-200 ease-out flex items-center justify-center ${
          isHovering
            ? 'w-12 h-12 -ml-6 -mt-6 border-2 border-[#8B5CF6] bg-[#8B5CF6]/20 shadow-[0_0_25px_rgba(139,92,246,0.5)] scale-125'
            : isClicking
            ? 'w-8 h-8 -ml-4 -mt-4 border border-[#8B5CF6] bg-[#8B5CF6]/25 scale-75'
            : 'w-8 h-8 -ml-4 -mt-4 border border-[#8B5CF6]/60 bg-[#8B5CF6]/5 scale-100'
        }`}
        style={{
          transform: `translate3d(${smoothX}px, ${smoothY}px, 0)`,
          willChange: 'transform',
        }}
      >
        {/* Subtle inner ring crosshair pulse when hovering */}
        {isHovering && (
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping opacity-60" />
        )}
      </div>

      {/* Inner Precision Dot - Immediate Follower */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white transition-opacity duration-150 ${
          isHovering ? 'opacity-0 scale-50' : 'opacity-100 scale-100 shadow-[0_0_8px_#ffffff]'
        }`}
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};
