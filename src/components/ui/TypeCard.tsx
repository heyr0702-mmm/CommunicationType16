"use client";

import { useState } from 'react';
import Image from 'next/image';

interface TypeCardProps {
    code: string;
    label: string;
    catchCopy: string;
}

export const TypeCard: React.FC<TypeCardProps> = ({ code, label, catchCopy }) => {
    const [imgSrc, setImgSrc] = useState(`/images/characters/${code}.png`);

    return (
        <div className="bg-white p-6 notebook-border flex flex-col items-center text-center space-y-4 hover:bg-gray-50 transition-colors">
            {/* Character Image */}
            <div className="w-32 h-32 relative">
                <Image
                    src={imgSrc}
                    alt={label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain filter drop-shadow-md"
                    loading="lazy"
                    onError={() => {
                        setImgSrc('https://placehold.co/200x200/png?text=No+Image');
                    }}
                />
            </div>

            <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-1">{code}</p>
                <h2 className="text-xl font-bold font-handwriting text-ink border-b-2 border-neon-yellow inline-block px-2">
                    {label}
                </h2>
            </div>

            <p className="text-sm font-medium text-gray-700 leading-relaxed bg-gray-100 p-3 rounded w-full">
                {catchCopy}
            </p>
        </div>
    );
};
