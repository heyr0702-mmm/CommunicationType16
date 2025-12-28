import React from 'react';
import { CommunicationTypeMeta } from "@/lib/types";
import { ResultContent } from "@/types/content";

interface CharacterProfileProps {
    character: CommunicationTypeMeta;
    content: ResultContent;
    children?: React.ReactNode; // For injecting the graph or other content
}

export const CharacterProfile: React.FC<CharacterProfileProps> = ({ character, content, children }) => {
    return (
        <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg max-w-2xl mx-auto w-full relative overflow-hidden">
            {/* Tape decoration */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/50 border-l border-r border-gray-200 rotate-[-2deg] z-10 opacity-70"></div>

            {/* Character Image */}
            <div className="flex justify-center -mt-4 mb-4 relative z-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`/images/characters/${character.code}.png`}
                    alt={character.label}
                    className="w-72 h-72 sm:w-96 sm:h-96 object-contain filter drop-shadow-xl animate-in fade-in zoom-in duration-500 hover:scale-105 transition-transform"
                    loading="eager"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
            </div>

            <div className="text-center space-y-4 mb-8">
                <p className="text-sm font-bold text-gray-500 tracking-widest">COMMUNICATION TYPE</p>

                <h1 className="text-2xl sm:text-6xl font-bold font-handwriting tracking-widest text-ink inline-block border-b-4 border-neon-pink pb-2">
                    {character.label}
                </h1>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {content.free.hashTags.map(tag => (
                        <span key={tag} className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm sm:text-lg font-medium mt-4 bg-neon-yellow/40 inline-block px-4 py-1 rounded-sm">
                    {content.free.catchCopy}
                </p>
            </div>

            {/* Injected Content (Graph) */}
            {children}

            {/* Summary Section (Always visible) */}
            <div className="mt-6 p-4 bg-white/50 rounded-lg notebook-border">
                <h3 className="text-center font-bold border-b-2 border-gray-300 pb-2 mb-2 font-handwriting text-lg">
                    特徴まとめ
                </h3>
                <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                        {content.free.summary}
                    </p>
                </div>
            </div>

            {/* Basic Specs */}
            <div className="mt-8 space-y-4">
                {content.free.basicSpecs.map((spec, i) => (
                    <div key={i} className="bg-white/80 p-4 rounded border-l-4 border-neon-blue">
                        <h4 className="font-bold text-ink mb-2">{spec.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{spec.description}</p>
                    </div>
                ))}
            </div>

            {/* Reputation */}
            <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-neon-pink">
                <h4 className="font-bold text-ink mb-2">{content.free.reputation.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {content.free.reputation.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Aruaru */}
            <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-neon-yellow">
                <h4 className="font-bold text-ink mb-2">{content.free.aruaru.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {content.free.aruaru.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Comfort Zone */}
            <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-gray-400">
                <h4 className="font-bold text-ink mb-2">{content.free.comfortZone.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {content.free.comfortZone.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
