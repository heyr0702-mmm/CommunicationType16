import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <NotebookLayout className="flex flex-col relative">
      {/* --- First View (Hero Section) --- */}
      {/* Added min-h-[80vh] to keep it filling most of the screen initially, but allowing scroll */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 min-h-[80vh] py-10">

        <div className="space-y-6 z-10 relative w-full max-w-lg">
          {/* Title Container */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 relative text-center">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-200/50 z-10 backdrop-blur-sm border-l border-r border-white/50" />

            <div className="absolute -right-4 -top-4 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
              New!
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter font-handwriting text-ink mb-6 leading-tight">
              16コミュニケーション<br className="block sm:hidden" />タイプ診断
            </h1>
            <p className="text-sm sm:text-lg font-bold text-gray-700 bg-neon-yellow/30 inline-block px-4 py-1 leading-relaxed">
              あなたの“コミュ力の型”には、<br className="block sm:hidden" />名前がある。
            </p>
          </div>

          <div className="mx-auto p-6 bg-white/90 notebook-border text-center rounded-lg">
            <h2 className="font-bold text-lg mb-2 text-gray-400 font-handwriting">How it works</h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-800">
              性格じゃない。<br />
              『どう喋るか・どう関わるか』のスタイルを<br className="hidden sm:block" />
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
      </section>

      {/* --- Section 1: About (What is this diagnosis?) --- */}
      <section className="py-16 border-t font-medium text-gray-800">
        <div className="max-w-2xl mx-auto space-y-8 px-4">
          <div className="text-center">
            <span className="bg-neon-yellow px-2 py-1 text-sm font-bold transform -rotate-2 inline-block mb-4">About This Tool</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-handwriting mb-6">
              無意識の「会話スタイル」を<br className="block sm:hidden" />可視化する
            </h2>
          </div>

          <p className="leading-8 text-sm sm:text-base">
            人には、生まれ持った“性格”とは別に、会話のときに自然と現れる“スタイル（型）”があります。<br /><br />
            そのスタイルは、ひとりのとき、大人数のとき、仲の良い相手のとき——相手や場面によって、少しずつ形を変えます。良い悪いではなく、ただ“違い”として存在するもの。<br /><br />
            この診断は、あなたが普段無意識に使っている話し方・返し方・関わり方のスタイルを可視化し、どんな相手と相性が良く、どんな場面で変化しやすいかを知るためのツールです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 notebook-border">
              <h3 className="font-bold text-neon-pink mb-2">🎈 メリット 1</h3>
              <p className="text-sm">自分の「会話の癖」がわかり、コミュニケーションのストレス原因が見えてくる。</p>
            </div>
            <div className="bg-white p-4 notebook-border">
              <h3 className="font-bold text-neon-blue mb-2">🤝 メリット 2</h3>
              <p className="text-sm">自分と違うタイプの人が「なぜそう話すのか」が理解でき、寛容になれる。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Vision (Why we made this) --- */}
      <section className="py-16 bg-gray-50/80 -mx-6 sm:-mx-12 px-6 sm:px-12 border-t border-b border-dashed border-gray-300">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <span className="bg-neon-blue px-2 py-1 text-sm font-bold text-white transform rotate-2 inline-block mb-4">Our Vision</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-handwriting mb-6">
              「相性」じゃなくて<br className="block sm:hidden" />「組み合わせ」
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base font-medium leading-relaxed">
            <p>
              誰といるかで、自分の“喋り方”が変わることがあります。
              それは性格が揺れているのではなく、相手との“スタイルの組み合わせ”が変わるだけ。
            </p>
            <p>
              違うスタイルが集まるからこそ、会話は豊かになり、人間関係は面白くなる。<br />
              自分のスタイルを知り、相手のスタイルを知る。<br />
              その小さな理解が、人と関わることを少し楽にしてくれるはずです。
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Usage Hints (Scenes) --- */}
      <section className="py-16 pb-24">
        <div className="max-w-2xl mx-auto space-y-8 px-4">
          <div className="text-center">
            <span className="bg-neon-pink px-2 py-1 text-sm font-bold text-white transform -rotate-1 inline-block mb-4">Use Cases</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-handwriting mb-6">
              こんなシーンで<br className="block sm:hidden" />使えます
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">🧐</div>
              <div>
                <h3 className="font-bold text-lg mb-1">自己分析として</h3>
                <p className="text-sm text-gray-600">
                  就活や転職、振り返りのときに。「自分はどういうコミュニケーションを取る人間か」を言語化するヒントになります。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">🧊</div>
              <div>
                <h3 className="font-bold text-lg mb-1">アイスブレイクに</h3>
                <p className="text-sm text-gray-600">
                  初対面の人や、もっと仲良くなりたい友達と。「私はこのタイプだった！あなたは？」とシェアして話題作りに。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">🏢</div>
              <div>
                <h3 className="font-bold text-lg mb-1">チームビルディング</h3>
                <p className="text-sm text-gray-600">
                  職場のチームやサークルで。お互いの「得意なコミュニケーション」を知ることで、役割分担がスムーズになります。
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 text-center">
            <Link href="/diagnosis" className="block w-full transform hover:scale-105 transition-transform duration-200 max-w-xs mx-auto">
              <Button size="lg" className="w-full text-lg animate-pulse shadow-xl border-2 border-black bg-black text-white hover:bg-gray-800">
                もう一度、診断する
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </NotebookLayout >
  );
}
