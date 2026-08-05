import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "コミュニケーションスタイルとは？4つの軸で読み解く会話のクセ | 16コミュニケーションタイプ診断",
    description: "会話が噛み合わない原因は性格でも相性でもなく「スタイルの違い」。Power・Warmth・Speed・Volumeという4つの軸から、あなたと相手の会話のクセを読み解きます。",
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
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「なぜあの人とは、いつも話が合わないんだろう」
                    </p>
                    <p>
                        そう感じたこと、一度はあるはずです。伝えたいことがうまく伝わらない。相手の反応が読めない。会話のあと、なんとなく疲れている。
                    </p>
                    <p>
                        こういう違和感の正体を、私たちはつい「性格の相性」で片づけてしまいます。でも実際のところ、そのすれ違いのほとんどは、性格の良し悪しでも相性の善し悪しでもありません。<strong className="text-neon-pink">会話には、人それぞれ無意識に使っている&quot;型&quot;がある。</strong>その型が違うだけなんです。
                    </p>
                    <p>
                        この記事では、その型を4つの軸に分解して見ていきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会話のクセを決める4つの軸
                    </h2>
                    <p>
                        当サイトでは、コミュニケーションのクセを次の4つの軸で捉えています。それぞれの軸に高い/低いはあっても、良い/悪いはありません。
                    </p>

                    <ul className="list-disc pl-5 space-y-4 my-6">
                        <li>
                            <strong>Power（主導権）— D（主導） × R（受容）</strong><br/>
                            会話のハンドルを握りたいのがD、相手に合わせて受け止めるのがR。Dは「で、結論は？」と前に出て、Rは「うんうん、それで？」と話を引き出す側に回ります。
                        </li>
                        <li>
                            <strong>Warmth（温度感）— E（共感） × C（論理）</strong><br/>
                            気持ちに寄り添うのがE、整理して考えるのがC。Eは「それはつらかったね」から入り、Cは「つまり原因は何？」から入ります。
                        </li>
                        <li>
                            <strong>Speed（テンポ）— I（即興） × S（熟考）</strong><br/>
                            喋りながら考えるのがI、じっくり咀嚼してから話すのがS。会話のリズムが速いか、ゆっくりかの違いです。
                        </li>
                        <li>
                            <strong>Volume（存在感）— X（表現大） × Z（表現小）</strong><br/>
                            リアクションや言葉数で場に存在感を出すのがX、静かに聞き役に回りながら存在感を出すのがZ。声の大小の話ではなく、&quot;どう場に関わるか&quot;の違いです。
                        </li>
                    </ul>
                    <p>
                        この4つの軸の組み合わせで、会話のスタイルは全部で<Link href="/types" className="text-neon-blue hover:underline">16タイプ</Link>に分かれます。<strong>Dで、Eで、Iで、X——</strong>というように、あなたの会話には固有の&quot;配合&quot;があるのです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        すれ違いは、軸のズレとして説明できる
                    </h2>
                    <p>
                        たとえば、Dの人とSの人が話すとどうなるでしょう。
                    </p>
                    <p>
                        Dの人はテンポよく決めていきたい。Sの人はいったん自分の中で考えを組み立ててから話したい。この2人が同じ会議にいると、Dは「反応が遅いな」とそわそわし、Sは「急かされてる……」とプレッシャーを感じます。
                    </p>
                    <p>
                        これは能力の差でも、やる気の差でもありません。<strong>「意思決定のスピード」に対する設定が違うだけ</strong>です。同じように、EとCの間には「気持ちが先か、結論が先か」の違いがあり、XとZの間には「場でどう存在感を示すか」の違いがあります。
                    </p>
                    <p>
                        軸で見ると、モヤモヤしていたすれ違いに、名前がつきます。名前がつくと、不思議と少し落ち着くものです。「性格が合わない」ではなく「Speedの設定が違うだけ」。それだけで、責める気持ちがすっとほどけていきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        自分の型を知ることが、最初の一歩
                    </h2>
                    <p>
                        4つの軸は、独立してそれぞれ機能しています。だからこそ、「自分は主導権を握りがちだけど、テンポはゆっくり派」というような、意外な組み合わせも珍しくありません。
                    </p>
                    <p>
                        大事なのは、優劣をつけずに「自分はこういう型で会話している」と知ること。そして、目の前の相手も「別の型で会話している」と想像してみることです。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 my-6">
                        <li>相手の反応が薄いのは、Zで場に関わっているだけかもしれない</li>
                        <li>相手が急かしてくるように感じるのは、Iのテンポで話しているだけかもしれない</li>
                        <li>相手が結論を急ぐのは、Cとして情報を整理しようとしているだけかもしれない</li>
                    </ul>
                    <p>
                        <strong>優劣ではなく、ただの組み合わせ。</strong>それが分かるだけで、会話に対する構え方が変わってきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        4つの軸を、もっと詳しく知る
                    </h2>
                    <p>
                        ここまでで紹介したのは、あくまで4つの軸の入口です。それぞれの軸には、もっと具体的な&quot;あるある&quot;やすれ違いの構造があります。気になる軸があれば、ぜひ個別の記事も読んでみてください。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 my-6">
                        <li>
                            <Link href="/column/axis-power" className="text-neon-blue hover:underline font-bold">Power(主導権)を深掘り</Link> — 会話を引っ張るD、受け止めるRの流儀
                        </li>
                        <li>
                            <Link href="/column/axis-warmth" className="text-neon-blue hover:underline font-bold">Warmth(温度感)を深掘り</Link> — 「わかって」と「つまり?」のすれ違い
                        </li>
                        <li>
                            <Link href="/column/axis-speed" className="text-neon-blue hover:underline font-bold">Speed(テンポ)を深掘り</Link> — 卓球型と手紙型の会話
                        </li>
                        <li>
                            <Link href="/column/axis-volume" className="text-neon-blue hover:underline font-bold">Volume(存在感)を深掘り</Link> — 場に刻むXと、そっと溶け込むZ
                        </li>
                    </ul>
                    <p>
                        「そもそも、なぜスタイルが違うだけですれ違うのか」が気になる方は、<Link href="/column/why-mismatch" className="text-neon-blue hover:underline font-bold">「相性が悪い」の正体 — 私たちはただ&quot;違うゲーム&quot;をしているだけ</Link>もあわせてどうぞ。
                    </p>
                    <p>
                        そして何より、自分の型を正確に知る一番の近道は、実際に診断を受けてみることです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたの会話は、どんな配合でできていますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        3分の診断で、Power・Warmth・Speed・Volumeの4軸から、あなたのコミュニケーションタイプを確かめてみてください。
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
