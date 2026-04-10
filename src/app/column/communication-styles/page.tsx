import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "コミュニケーションスタイルとは？4つの軸で読み解く会話のクセ | 16コミュニケーションタイプ診断",
    description: "性格が良い・悪いではなく、ただのスタイルの違い。Power、Warmth、Speed、Volumeの4要素からあなたの型を紐解きます。",
};

export default function CommunicationStylesArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🧩</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        コミュニケーションスタイルとは？<br/>4つの軸で読み解く会話のクセ
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2025年4月10日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「なぜあの人とは話が合わないんだろう」「自分の意図がうまく伝わらない」。人間関係の悩みの大半は、コミュニケーションのすれ違いから生まれます。
                    </p>
                    <p>
                        しかし、それは必ずしも「性格が悪い」からでも「相性が悪い」からでもありません。多くの場合、単純に<strong className="text-neon-pink">『コミュニケーションスタイル（会話の型）』の違い</strong>に過ぎないのです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会話のスタイルを決める4つの軸
                    </h2>
                    <p>
                        当サイト「16コミュニケーションタイプ診断」では、人々が無意識に使っている会話のスタイルを、以下の4つの軸で分類しています。
                    </p>

                    <ol className="list-decimal pl-5 space-y-4 my-6">
                        <li>
                            <strong>Power（主導権） - D（Driving） vs R（Receptive）</strong><br/>
                            会話を引っ張るタイプか、それとも受け止めるタイプか。Dは結論を急ぎ、Rは共感を重視する傾向があります。
                        </li>
                        <li>
                            <strong>Warmth（温度感） - E（Expressive） vs A（Analytical）</strong><br/>
                            感情表現が豊かでエネルギッシュなEに対し、Aは冷静に事実と論理を優先します。
                        </li>
                        <li>
                            <strong>Speed（テンポ） - I（Immediate） vs P（Paced）</strong><br/>
                            Iは即座に反応しテンポの良さを楽しみますが、Pは一度自分の中で咀嚼してから発言します。
                        </li>
                        <li>
                            <strong>Volume（主張） - X（Expansive） vs C（Concise）</strong><br/>
                            Xは言葉数が多くアイデアを広げますが、Cは要点を絞って端的に伝えることを好みます。
                        </li>
                    </ol>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        違いを知って、コミュニケーションを楽にする
                    </h2>
                    <p>
                        例えば、D（主導型）の人とP（熟考型）の人が話すと、Dの人は「反応が遅い」とイライラし、Pの人は「せかされている」と感じます。しかし、これが単なる「スピードの違い」だと分かれば、Dは少し待つことができ、Pは「今考えているよ」とサインを出すことができます。
                    </p>
                    <p>
                        自分のスタイルを知り、相手のスタイルを想像すること。それが人間関係のストレスを劇的に減らす第一歩です。
                    </p>
                </div>
            </article>

            {/* CTA */}
            <div className="mt-8 text-center bg-gray-50 border border-dashed border-gray-300 p-6 sm:p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">あなたのスタイルはどれ？</h3>
                <p className="text-sm text-gray-600 mb-6">
                    たった数分のテストで、あなたのコミュニケーションのクセが分かります。
                </p>
                <Link href="/diagnosis">
                    <Button size="lg" className="animate-pulse shadow-md border-2 border-black w-full sm:w-auto">無料診断スタート</Button>
                </Link>
                <div className="mt-4">
                    <Link href="/column" className="text-sm text-gray-500 hover:text-neon-blue underline">
                        ← コラム一覧に戻る
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
