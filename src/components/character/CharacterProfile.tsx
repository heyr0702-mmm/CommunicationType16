"use client";

import React from 'react';
import { CommunicationTypeMeta } from "@/lib/types";
import { ResultContent } from "@/types/content";

interface CharacterProfileProps {
    character: CommunicationTypeMeta;
    content: ResultContent;
    children?: React.ReactNode;
}

export const CharacterProfile: React.FC<CharacterProfileProps> = ({ character, content, children }) => {
    return (
        <div className="bg-white/90 p-4 sm:p-8 rounded-lg notebook-border shadow-lg max-w-2xl mx-auto w-full relative overflow-hidden">
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

            {/* Summary Section */}
            <div className="mt-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-center font-bold border-b border-gray-200 py-3 font-handwriting text-lg bg-white rounded-t-lg">
                    特徴まとめ
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed p-4">
                    {content.free.summary}
                </p>
            </div>

            {/* Basic Specs */}
            <div className="mt-6 space-y-3">
                {content.free.basicSpecs.map((spec, i) => (
                    <div key={i} className="bg-gray-50 rounded border-l-4 border-neon-blue">
                        <h4 className="font-bold text-ink px-4 pt-3 pb-1">{spec.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed px-4 pb-3">{spec.description}</p>
                    </div>
                ))}
            </div>

            {/* Reputation */}
            <div className="mt-6 bg-gray-50 rounded border-l-4 border-neon-pink">
                <h4 className="font-bold text-ink px-4 pt-3 pb-1">{content.free.reputation.title}</h4>
                <ul className="text-sm text-gray-700 leading-relaxed px-4 pb-3 space-y-1">
                    {content.free.reputation.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-neon-pink mr-2">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Aruaru */}
            <div className="mt-6 bg-gray-50 rounded border-l-4 border-neon-yellow">
                <h4 className="font-bold text-ink px-4 pt-3 pb-1">{content.free.aruaru.title}</h4>
                <ul className="text-sm text-gray-700 leading-relaxed px-4 pb-3 space-y-1">
                    {content.free.aruaru.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-neon-yellow mr-2">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Comfort Zone */}
            <div className="mt-6 bg-gray-50 rounded border-l-4 border-gray-400">
                <h4 className="font-bold text-ink px-4 pt-3 pb-1">{content.free.comfortZone.title}</h4>
                <ul className="text-sm text-gray-700 leading-relaxed px-4 pb-3 space-y-1">
                    {content.free.comfortZone.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
