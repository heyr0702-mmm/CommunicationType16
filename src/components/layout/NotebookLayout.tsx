import React from 'react';
import Link from 'next/link';

interface NotebookLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const NotebookLayout: React.FC<NotebookLayoutProps> = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen w-full flex justify-center p-4 sm:p-8">
            <div className={`
        w-full max-w-3xl 
        bg-paper 
        notebook-border 
        relative 
        p-4 sm:p-12
        min-h-[80vh]
        ${className}
      `}>
                {/* Notebook Binding Visual (Left side) */}
                <div className="absolute left-2 top-0 bottom-0 w-8 flex flex-col justify-evenly py-4 pointer-events-none opacity-20 sm:opacity-40">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-gray-400 shadow-inner" />
                    ))}
                </div>

                {/* Content Area */}
                <div className="relative z-10 px-2 sm:pl-8 sm:pr-0">
                    {children}
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-12 border-t border-gray-300 pt-4 text-center">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 font-medium">
                        <Link href="/" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            TOP
                        </Link>
                        <Link href="/types" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            タイプ一覧
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/about" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            About
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/vision" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            Vision
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/contact" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            お問い合わせ
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/privacy-policy" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            プライバシーポリシー
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/terms" className="hover:text-neon-blue transition-colors whitespace-nowrap">
                            利用規約
                        </Link>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">
                        © 2025 CommunicationType16
                    </p>
                </div>
            </div>
        </div>
    );
};
