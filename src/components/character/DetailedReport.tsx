"use client";

import React from 'react';
import { ResultContent } from "@/types/content";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { AdUnit } from "@/components/AdUnit";
import { Button } from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

interface DetailedReportProps {
    content: ResultContent;
    onClose?: () => void; // Optional close button for ResultView
}

export const DetailedReport: React.FC<DetailedReportProps> = ({ content, onClose }) => {
    return (
        <div className="space-y-8">
            {/* Communication Gaps */}
            <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg">
                <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
                    <span className="text-2xl">⚠️</span>
                    <h3 className="text-xl font-bold text-ink">{content.unlocked.communicationGaps.title}</h3>
                </div>
                <div className="space-y-4">
                    {content.unlocked.communicationGaps.items.map((item, i) => (
                        <div key={i} className="bg-red-50 p-4 rounded border border-red-100">
                            <p className="font-bold text-red-800 mb-1">⚡ {item.pattern}</p>
                            <p className="text-sm text-red-600">💡 {item.advice}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compatibility */}
            <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg">
                <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
                    <span className="text-2xl">💞</span>
                    <h3 className="text-xl font-bold text-ink">相性分析</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-blue-50 p-4 rounded border border-blue-100">
                        <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded mb-2 inline-block">BEST</span>
                        <div className="mb-2">
                            <p className="text-lg font-bold text-blue-900 leading-none">{content.unlocked.compatibility.best.code}</p>
                            <p className="text-sm font-bold text-blue-700 mt-1">
                                {COMMUNICATION_TYPE_META.find(c => c.code === content.unlocked.compatibility.best.code)?.label}
                            </p>
                        </div>
                        <p className="text-sm text-blue-800 leading-relaxed">{content.unlocked.compatibility.best.reason}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                        <span className="text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2 inline-block">WORST</span>
                        <div className="mb-2">
                            <p className="text-lg font-bold text-gray-900 leading-none">{content.unlocked.compatibility.worst.code}</p>
                            <p className="text-sm font-bold text-gray-700 mt-1">
                                {COMMUNICATION_TYPE_META.find(c => c.code === content.unlocked.compatibility.worst.code)?.label}
                            </p>
                        </div>
                        <p className="text-sm text-gray-800 leading-relaxed">{content.unlocked.compatibility.worst.reason}</p>
                    </div>
                </div>
            </div>

            {/* AdUnit after content */}
            {/* <AdUnit slot="9876543210" /> */}

            {/* Optional Close Button (Only for ResultView) */}
            {onClose && (
                <div className="text-center">
                    <Button onClick={onClose} variant="ghost" size="sm">
                        <ChevronUp className="mr-2 h-4 w-4" />
                        閉じる
                    </Button>
                </div>
            )}
        </div>
    );
};
