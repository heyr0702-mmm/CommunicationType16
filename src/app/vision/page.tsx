
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Vision() {
    return (
        <NotebookLayout className="flex flex-col space-y-12">
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting">Our Vision</h1>
                <Link href="/">
                    <Button variant="secondary" size="sm">Back</Button>
                </Link>
            </div>

            {/* Core Message (Philosophy) */}
            <section className="space-y-8 text-center px-2 py-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-handwriting leading-relaxed">
                    「相性」じゃなくて<br />「組み合わせ」
                </h2>
                <div className="text-base sm:text-lg leading-loose font-medium text-gray-800 space-y-6">
                    <p>
                        誰といるかで、自分の“喋り方”が変わることがあります。<br />
                        それは性格が揺れているのではなく、<br className="hidden sm:inline" />
                        相手との“スタイルの組み合わせ”が変わるだけ。
                    </p>
                    <p>
                        違うスタイルが集まるからこそ、会話は豊かになり、<br className="hidden sm:inline" />
                        人間関係は面白くなる。<br />
                        自分のスタイルを知り、相手のスタイルを知る。<br />
                        その小さな理解が、人と関わることを<br className="hidden sm:inline" />
                        少し楽にしてくれるはずです。
                    </p>
                </div>
            </section>

            {/* Storytelling (Narrative Expansion) */}
            <section className="bg-white/60 p-6 sm:p-10 notebook-border space-y-8 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-bl-full -mr-16 -mt-16 z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-neon-pink/10 rounded-tr-full -ml-12 -mb-12 z-0 pointer-events-none" />

                <div className="relative z-10 space-y-8">
                    <h3 className="text-xl font-bold text-center bg-gray-100 inline-block px-4 py-1 rounded-full mx-auto table">
                        「上手くいかない」は、誰のせいでもない
                    </h3>

                    <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
                        <p>
                            友達との会話が弾まないとき、上司への報告が噛み合わないとき。<br />
                            私たちはつい「自分のコミュ力が低いからだ」と自分を責めたり、「相手がわからず屋だからだ」と相手を責めたりしてしまいます。
                        </p>
                        <p>
                            でも、本当の原因は<strong className="bg-neon-yellow/30 px-1">「空気感のズレ」</strong>であることがほとんどです。
                        </p>
                        <p>
                            情報をバシバシ投げ合うのが好きな人と、感情をゆっくり温めたい人。<br />
                            キャッチボールの速度も球種も違う二人が出会えば、落球するのは当たり前です。<br />
                            そこで必要なのは、どちらかが無理をして相手に合わせることや、自分を殺して演じることではありません。
                        </p>
                        <div className="text-center py-4">
                            <p className="text-lg font-bold text-ink mb-2">
                                「あ、今私たちは違うゲームをしているんだ」と気づくこと。
                            </p>
                        </div>
                        <p>
                            ただそれだけで、張り詰めた空気はふっと緩みます。<br />
                            「じゃあ、今日はあなたに合わせてゆっくり投げようかな」<br />
                            「ここは私が早めに投げるね」
                        </p>
                        <p>
                            互いのスタイルの違いを面白がり、<strong className="bg-neon-blue/20 px-1">ゲームのルールをその場でチューニングし合える関係</strong>。<br />
                            それこそが、私たちが考える「良いコミュニケーション」の姿です。<br />
                            この診断が、そんな関係を作るための共通言語になればと願っています。
                        </p>
                    </div>
                </div>
            </section>

            <div className="pt-8 text-center space-y-4">
                <Link href="/about">
                    <span className="text-sm font-bold text-gray-500 hover:text-neon-pink transition-colors cursor-pointer border-b border-gray-400">
                        → 診断の仕組み（About）を見る
                    </span>
                </Link>
                <div className="pt-4">
                    <Link href="/diagnosis">
                        <Button size="lg" className="animate-pulse shadow-lg px-8">
                            自分のスタイルを診断する
                        </Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
