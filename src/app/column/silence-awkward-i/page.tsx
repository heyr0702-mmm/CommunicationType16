import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "沈黙が気まずいのは即興型(I)だから — 会話の\"間\"との付き合い方",
    description: "友人との雑談中、数秒の沈黙が怖くて何か喋ってしまう。それは性格の弱さではなく、即興型(I)というテンポのクセです。沈黙との付き合い方を紹介します。",
};

export default function SilenceAwkwardIArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🌀</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        沈黙が気まずいのは即興型(I)だから<br/>会話の&quot;間&quot;との付き合い方
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        友人の家でだらだら過ごしているとき。カフェで向かい合っているとき。会話がふっと途切れた3秒間に、心臓がきゅっとなって、つい思ってもいないことまで喋ってしまう。あとから「なんであんなこと言っちゃったんだろう」と、一人反省会をした経験はないでしょうか。
                    </p>
                    <p>
                        これは、話し好きだからでも、空気が読めないからでもありません。<strong className="text-neon-pink">Speed(テンポ)軸が即興型(I)寄り</strong>という、ただのクセです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        沈黙は、Iにとってラジオの砂嵐に近い
                    </h2>
                    <p>
                        Iの人にとって、会話は喋りながら考えを組み立てていくものです。言葉が止まる瞬間は、頭の中の作業も止まったように感じられます。だから沈黙は、心地よい静けさというより、<strong>ザーッというノイズが流れているような落ち着かなさ</strong>に近い。何か音を出さないと、その場に置き去りにされるような感覚さえあります。
                    </p>
                    <p>
                        一方、<strong>熟考型(S)</strong>の人にとって、沈黙はただの息継ぎです。次に話すことを頭の中で組み立てている、いたって自然な時間。焦る要素はどこにもありません。
                    </p>
                    <p>
                        同じ3秒間なのに、片方には砂嵐、もう片方には静かな呼吸として流れている。これが、沈黙をめぐるすれ違いの正体です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        埋めた言葉が、後から恥ずかしくなる理由
                    </h2>
                    <p>
                        Iの人が沈黙を埋めるとき、その言葉はたいてい&quot;考えてから&quot;出たものではありません。とっさに、その場をしのぐために出た言葉です。だから後から見返すと、「なんでそんなことを言ったんだろう」と自己嫌悪になりやすい。
                    </p>
                    <p>
                        でもこれは、あなたが軽率だからではありません。<strong>沈黙という不快感を、瞬発的にどうにかしようとした結果</strong>です。反射神経が良すぎるだけとも言えます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        友人の沈黙は、拒絶のサインではない
                    </h2>
                    <p>
                        厄介なのは、目の前の相手がSの人だった場合です。相手はただじっくり考えているだけなのに、Iの人はその沈黙を「気まずい」「嫌われた?」と誤読し、慌てて話題を変えてしまうことがあります。すると、Sの人はせっかく組み立てていた言葉を発表する機会を失う。悪気のない空回りが、静かに積み重なっていきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        砂嵐を、意図的に消す3つの練習
                    </h2>
                    <p>
                        Iのまま、沈黙と少しだけ仲良くなる方法があります。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. 沈黙に、あえて名前をつける</strong>
                            <p className="text-sm">「あ、いま何も喋ってないの、全然嫌な感じしないね」。声に出して沈黙を肯定してしまうと、不思議とその不快感は和らぎます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. 頭の中で3秒数える</strong>
                            <p className="text-sm">何か言いたくなった瞬間、すぐ口を開かず、心の中で「1、2、3」と数えてみてください。それだけの間があれば、相手が言葉を組み立て終える時間になることが多いです。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 沈黙を、相手への信頼のサインに変える</strong>
                            <p className="text-sm">「何か話さなきゃ」ではなく、「この人の前では、黙っていても大丈夫」と捉え直してみる。気まずさを埋める会話より、沈黙を共有できる関係の方が、実は深いこともあります。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        埋めなくていい沈黙もある
                    </h2>
                    <p>
                        沈黙が怖いのは、あなたが会話を大切にしている証拠でもあります。ただ、その大切さのすべてを、言葉の量で示す必要はありません。
                    </p>
                    <p>
                        Sの人が黙っているとき、それはたいてい、あなたとの会話にちゃんと向き合っている時間です。<strong>沈黙は、失敗した会話ではなく、会話の一部</strong>。そう思えるだけで、あの3秒間は少し楽になります。
                    </p>
                    <p>
                        職場の会議で発言できない悩みについては、<Link href="/column/meeting-silence" className="text-neon-blue hover:underline">会議で発言できないのは熟考型(S)だから</Link>も読んでみてください。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはI寄り、それともS寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        自分のテンポを知ることから始めてみましょう。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
                        <Link href="/column/first-meeting-speed" className="text-neon-blue hover:underline">→ 初対面で会話が続かないの記事を読む</Link>
                        <Link href="/column/meeting-silence" className="text-neon-blue hover:underline">→ 会議で発言できないの記事を読む</Link>
                        <Link href="/types" className="text-neon-blue hover:underline">→ 16タイプ一覧を見る</Link>
                    </div>
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
