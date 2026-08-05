"use client";

import React from 'react';

interface BipolarBarProps {
    value: number; // 0 to 100 (50 = center)
    color?: 'yellow' | 'pink' | 'blue' | 'green';
    labelLeft: string;
    labelRight: string;
    codeLeft?: string;
    codeRight?: string;
}

export const BipolarBar: React.FC<BipolarBarProps> = ({
    value,
    color = 'yellow',
    labelLeft,
    labelRight,
    codeLeft,
    codeRight
}) => {
    const colorClasses = {
        yellow: 'bg-neon-yellow',
        pink: 'bg-neon-pink',
        blue: 'bg-neon-blue',
        green: 'bg-neon-green',
    };

    // Calculate bar position and width from center (50%)
    const isRightSide = value >= 50;
    const deviation = Math.abs(value - 50); // 0-50 range
    const barWidth = deviation; // percentage width from center

    return (
        <div className="w-full mb-4">
            <div className="flex justify-between text-xs sm:text-sm font-bold mb-1 font-handwriting">
                <span className={`flex flex-col items-start ${!isRightSide ? 'text-ink' : 'text-gray-400'}`}>
                    {labelLeft}
                    {codeLeft && <span className="text-[10px] text-gray-400 font-normal">{codeLeft}</span>}
                </span>
                <span className={`flex flex-col items-end ${isRightSide ? 'text-ink' : 'text-gray-400'}`}>
                    {labelRight}
                    {codeRight && <span className="text-[10px] text-gray-400 font-normal">{codeRight}</span>}
                </span>
            </div>
            <div className="w-full h-5 border-2 border-ink rounded-full bg-white relative">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-ink opacity-60 z-10" />

                {/* Bar from center */}
                <div
                    className={`absolute top-0.5 bottom-0.5 ${colorClasses[color]} rounded-full transition-all duration-700 ease-out overflow-hidden`}
                    style={{
                        left: isRightSide ? '50%' : `${50 - barWidth}%`,
                        width: `${barWidth}%`,
                    }}
                />

                {/* Grid lines for visual reference */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none overflow-hidden rounded-full">
                    {[...Array(11)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-full w-px ${i === 5 ? 'bg-transparent' : 'bg-ink opacity-10'}`}
                        />
                    ))}
                </div>

                {/* Current value marker */}
                <div
                    className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-ink shadow-md transition-all duration-700 ease-out z-20"
                    style={{
                        left: `${value}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>
        </div>
    );
};
