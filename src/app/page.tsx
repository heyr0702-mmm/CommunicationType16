import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <NotebookLayout className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 relative overflow-hidden">
      {/* Decorative Tapes */}


      <div className="space-y-6 z-10 relative">
        {/* Sticker-like Container */}
        <div className="bg-white p-8 rounded-sm shadow-xl max-w-lg mx-auto transform rotate-1 border border-gray-200 relative">
          {/* Top Tape */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-200/50 rotate-[-2deg] z-10 backdrop-blur-sm border-l border-r border-white/50" />

          <div className="absolute -right-4 -top-4 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-[15deg] z-20">
            New!
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter font-handwriting text-ink mb-6 leading-tight">
            16コミュニケーション<br />タイプ診断
          </h1>
          <p className="text-base sm:text-lg font-bold text-gray-700 bg-neon-yellow/30 inline-block px-4 py-1 transform -rotate-1">
            あなたの“コミュ力の型”には、名前がある。
          </p>
        </div>

        <div className="max-w-md mx-auto p-6 bg-white/90 notebook-border transform -rotate-1">
          <h2 className="font-bold text-lg mb-2 text-gray-400 font-handwriting">How it works</h2>
          <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-800">
            性格じゃない。<br />
            『どう喋るか・どう関わるか』のスタイルを<br />
            16タイプで可視化します。
          </p>
        </div>
      </div>

      <div className="space-y-6 z-10 w-full max-w-sm flex flex-col items-center">
        <Link href="/diagnosis" className="block w-full transform hover:scale-105 transition-transform duration-200">
          <Button size="lg" className="w-full text-xl py-8 animate-pulse shadow-xl border-2 border-black bg-black text-white hover:bg-gray-800 relative overflow-hidden group">
            <span className="relative z-10">診断スタート</span>
            <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>
        </Link>

        <div className="flex justify-center w-full mt-8">
          <Link href="/about">
            <span className="text-sm font-bold text-gray-500 hover:text-neon-pink transition-colors border-b-2 border-transparent hover:border-neon-pink pb-1">
              About & Vision
            </span>
          </Link>
        </div>
      </div>
    </NotebookLayout >
  );
}
