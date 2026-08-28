import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50, 50)">
        {/* Bottom Left Leaf (Medium Green) - bottom-most */}
        <path 
          d="M 0,-40 A 25 25 0 0 1 0,0 A 25 25 0 0 1 0,-40 Z" 
          fill="#00a651" 
          transform="rotate(-145) translate(0, -4)" 
        />
        {/* Bottom Right Leaf (Light Green) */}
        <path 
          d="M 0,-40 A 25 25 0 0 1 0,0 A 25 25 0 0 1 0,-40 Z" 
          fill="#8dc63f" 
          transform="rotate(-215) translate(0, -4)" 
        />
        {/* Left Leaf (Dark Green) */}
        <path 
          d="M 0,-40 A 25 25 0 0 1 0,0 A 25 25 0 0 1 0,-40 Z" 
          fill="#009245" 
          transform="rotate(-85) translate(0, -4)" 
        />
        {/* Top Leaf (Light Green) - top-most */}
        <path 
          d="M 0,-40 A 25 25 0 0 1 0,0 A 25 25 0 0 1 0,-40 Z" 
          fill="#8dc63f" 
          transform="rotate(-25) translate(0, -4)" 
        />
      </g>
    </svg>
  );
}
