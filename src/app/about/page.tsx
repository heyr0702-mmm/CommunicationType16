
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <NotebookLayout className="flex flex-col space-y-12">
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting">About & Guide</h1>
                <Link href="/">
                    <Button variant="secondary" size="sm">Back</Button>
                </Link>
            </div>

            {/* 1. Introduction (Value Proposition) */}
            <section className="space-y-6">
                <div className="text-center mb-8">
                    <span className="bg-neon-yellow px-2 py-1 text-sm font-bold transform -rotate-1 inline-block mb-3">
                        What is this?
                    </span>
                    <h2 className="text-2xl font-bold font-handwriting">
                        無意識の“会話スタイル”を<br />可視化する
                    </h2>
                </div>

                <div className="text-sm sm:text-base leading-relaxed font-medium text-gray-800 space-y-4">
                    <p>
                        人には、生まれ持った“性格”とは別に、会话のときに自然と現れる“スタイル（型）”があります。
                    </p>
                    <p>
                        そのスタイルは、ひとりのとき、大人数のとき、仲の良い相手のとき——相手や場面によって、少しずつ形を変えます。良い悪いではなく、ただ“違い”として存在するもの。
                    </p>
                    <p className="border-l-4 border-black pl-4 py-2 bg-gray-50">
                        この診断は、あなたが普段無意識に使っている話し方・返し方・関わり方のスタイルを可視化し、どんな相手と相性が良く、どんな場面で変化しやすいかを知るためのツールです。
                    </p>
                </div>

                {/* 追記メモ: なぜ可視化が必要？ */}
                <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-lg text-sm text-gray-700 relative mt-6 transform rotate-1 shadow-sm">
                    <span className="absolute -top-3 left-4 bg-yellow-100 px-2 text-xs font-bold text-yellow-800 border border-yellow-200">Memo</span>
                    <p className="font-bold mb-1 text-yellow-900">なぜ可視化が必要？</p>
                    <p>
                        私たちは「自分の声」を客観的に聞けないのと同じで、自分が会話の中でどんな「空気」を作っているかを知ることができません。
                        自分のスタイルを知ることは、会話という目に見えない空間を、少しだけコントロールできるようにする第一歩です。
                    </p>
                </div>
            </section>

            {/* 2. Merits (導入メリット) */}
            <section className="space-y-8 py-8 border-t border-dashed border-gray-300">
                <h2 className="text-xl font-bold text-center mb-4">
                    <span className="border-b-4 border-neon-blue inline-block pb-1">3つのメリット</span>
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    {/* Merit 1 */}
                    <div className="bg-white p-6 notebook-border hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-neon-pink mb-3 flex items-center">
                            <span className="text-2xl mr-2">🎈</span>
                            自分の「会話の癖」がわかる
                        </h3>
                        <p className="text-sm text-gray-700 mb-3 font-bold">
                            コミュニケーションのストレス原因が見えてくる。
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded">
                            例えば、「沈黙が苦手でつい喋りすぎてしまう」……それは性格が悪いのではなく、<strong>Speed（テンポ）</strong>の成分が高く、会話の空白を埋めようとする作用が働いているだけかもしれません。
                            「あ、今Speedが出すぎてるな」と気づくだけで、焦りはふっと消え、落ち着きを取り戻せます。
                        </p>
                    </div>

                    {/* Merit 2 */}
                    <div className="bg-white p-6 notebook-border hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-neon-blue mb-3 flex items-center">
                            <span className="text-2xl mr-2">🤝</span>
                            他者に寛容になれる
                        </h3>
                        <p className="text-sm text-gray-700 mb-3 font-bold">
                            自分と違うタイプの人が「なぜそう話すのか」が理解できる。
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded">
                            「なんであの人は結論から言わないんだろう？」とモヤモヤすることはありませんか？
                            それは相手が、<strong>Warmth（温度感）</strong>を大切にし、事実よりも感情の共有を優先しているからかもしれません。
                            「そういうスタイルなんだ」とラベルを貼れるだけで、他者への不満は「特性への理解」に変わります。
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Analysis Axes (4つの成分解説) */}
            <section className="space-y-6 pt-4">
                <div className="text-center mb-6">
                    <span className="bg-black text-white px-3 py-1 text-sm font-bold transform -rotate-1 inline-block mb-2">
                        Analysis Axes
                    </span>
                    <h2 className="text-2xl font-bold font-handwriting">
                        分析する4つの成分
                    </h2>
                </div>

                <div className="space-y-6">
                    {/* Power */}
                    <div className="border-l-4 border-neon-yellow pl-4 py-2">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">⚡</span>
                            <h3 className="font-bold text-lg text-ink">Power (主導権)</h3>
                        </div>
                        <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Lead vs Follow</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>会話の行き先を決めるエンジンの出力。</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                            <li>高い人：「で、どうする？」が口癖。停滞を嫌い、前に進めるエネルギー。</li>
                            <li>低い人：「あ、いいよ」が口癖。調和を重んじ、流れに乗るしなやかさ。</li>
                        </ul>
                    </div>

                    {/* Warmth */}
                    <div className="border-l-4 border-neon-pink pl-4 py-2">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">❤️</span>
                            <h3 className="font-bold text-lg text-ink">Warmth (温度感)</h3>
                        </div>
                        <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Emotion vs Logic</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>言葉に乗せる感情の含有量。</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                            <li>高い人：「わかる～！」で繋がる。共感が会話の目的。</li>
                            <li>低い人：「つまり？」で整理する。解決が会話の目的。</li>
                        </ul>
                    </div>

                    {/* Speed */}
                    <div className="border-l-4 border-neon-blue pl-4 py-2">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">🚀</span>
                            <h3 className="font-bold text-lg text-ink">Speed (テンポ)</h3>
                        </div>
                        <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Fast vs Slow</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>思考から発話までのレイテンシー（反応速度）。</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                            <li>高い人：会話は卓球。即レス・即答のリズム感。</li>
                            <li>低い人：会話は手紙。咀嚼して返すことへの誠実さ。</li>
                        </ul>
                    </div>

                    {/* Volume */}
                    <div className="border-l-4 border-gray-500 pl-4 py-2">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">🔊</span>
                            <h3 className="font-bold text-lg text-ink">Volume (主張)</h3>
                        </div>
                        <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Assertive vs Receptive</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>自己領域の拡張範囲（存在感の大きさ）。</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                            <li>高い人：自分の存在を場に刻む。「私はこう思う」の発信力。</li>
                            <li>低い人：場の空気を読む。「聞かれたら答える」受信力。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center space-y-4">
                <Link href="/vision">
                    <span className="text-sm font-bold text-gray-500 hover:text-neon-blue transition-colors cursor-pointer border-b border-gray-400">
                        → 私たちの想い（Vision）を読む
                    </span>
                </Link>
                <div className="pt-4">
                    <Link href="/diagnosis">
                        <Button size="lg" className="animate-pulse shadow-lg px-8">
                            診断を始める
                        </Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
