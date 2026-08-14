import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/meeting-silence" },
    title: "会議で発言できないのは熟考型(S)だから — 沈黙を味方にする一言の作り方",
    description: "会議で発言できず落ち込む必要はありません。それは能力の問題ではなく、熟考型(S)というテンポのクセです。沈黙を活かす一言の作り方を紹介します。",
};

export default function MeetingSilenceArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🤐</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        会議で発言できないのは熟考型(S)だから<br/>沈黙を味方にする一言の作り方
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        会議の後、決まって同じことを考えてしまう。「さっき、あそこで発言できていれば」。
                    </p>
                    <p>
                        頭の中には意見があった。でも、口を開くタイミングを逃した。気がついたら話題は次に進んでいて、結局最後まで一言も発言しないまま会議が終わる。そのたびに「自分はコミュ力が低いんだ」と落ち込む。
                    </p>
                    <p>
                        でも、これはコミュ力の問題ではありません。<strong className="text-neon-pink">Speed(テンポ)軸が熟考型(S)寄り</strong>という、ただのクセです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会議は、即興型(I)に有利な設計になっている
                    </h2>
                    <p>
                        一般的な会議は、その場で発言できることが評価されやすい設計になっています。誰かが意見を出し、別の誰かがすぐ反応し、テンポよく議論が進む。これは<strong>即興型(I)</strong>にとって心地よい環境です。頭の中で考えながら喋る、喋りながら整理する、というスタイルにフィットしています。
                    </p>
                    <p>
                        一方、<strong>熟考型(S)</strong>は、情報を受け取ってから、頭の中で組み立て、納得してから言葉にします。この&quot;組み立てる時間&quot;は、会議のテンポの中ではどうしても遅れて見えてしまう。意見がないのではなく、<strong>まだ言葉になっていないだけ</strong>なんです。
                    </p>
                    <p>
                        そして会議が次の話題に移ってしまうと、Sの人の中で組み立て途中だった意見は、発表される機会を失います。これが繰り返されると、「自分には意見がない」という誤った自己認識にまでつながってしまいます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        沈黙は、弱さではなく準備の時間
                    </h2>
                    <p>
                        Sの沈黙には、たいてい理由があります。話の矛盾を探している。全体像を整理している。発言のリスクを検討している。つまり、<strong>沈黙そのものが、すでに思考している証拠</strong>です。
                    </p>
                    <p>
                        即興で反応する人が悪いわけでも、じっくり考える人が劣っているわけでもありません。ただ、会議という場のルールが、たまたま片方に有利にできているだけです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        沈黙を味方にする、3つの一言
                    </h2>
                    <p>
                        Sのままで発言力を上げる方法があります。急に即興型になろうとしなくて大丈夫です。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. 「今は聞いています」と宣言する</strong>
                            <p className="text-sm">会議の冒頭で、「最初は聞かせてください、途中で意見出します」とひとこと言っておく。それだけで、沈黙が&quot;消極的&quot;ではなく&quot;準備中&quot;だと周りに伝わります。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. 「まだ整理中ですが」で発言のハードルを下げる</strong>
                            <p className="text-sm">完璧な意見でなくていい。「まだ整理中ですが、気になる点が1つあります」。この前置きがあるだけで、未完成の意見を口に出す心理的な負担がぐっと下がります。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 会議の後に、書いて伝える</strong>
                            <p className="text-sm">その場で言えなかった意見は、終わってからチャットやメモで伝えても遅くありません。「さっきの件、あとから思ったんですが」。熟考型の強みは、後からでも精度の高い意見を出せることです。その場の速さで勝負しなくていい。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会議の設計を変えるという選択肢もある
                    </h2>
                    <p>
                        もしあなたがファシリテーターの立場なら、会議の中に「一度沈黙する時間」を意図的に作るのも有効です。「1分間、各自考えてから発言しましょう」。この一工夫で、Sの人が発言しやすくなり、Iの人にとっても考えを整理する時間になります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        発言の量と、意見の質は別物
                    </h2>
                    <p>
                        即興型の人がテンポよく発言するのと同じくらい、熟考型の人がじっくり練った一言には価値があります。会議で目立つ発言の数と、その人が持っている考えの深さは、必ずしも比例しません。
                    </p>
                    <p>
                        「発言できない自分はダメだ」と責める必要はありません。あなたはただ、少し違うテンポで考えているだけです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはI寄り、それともS寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        自分のテンポを知ることから始めてみましょう。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/workplace-approachability" className="text-neon-blue hover:underline">→ 話しかけづらいと思われる理由の記事を読む</Link>
                        <Link href="/column/boss-subordinate" className="text-neon-blue hover:underline">→ 上司・部下のすれ違いの記事を読む</Link>
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
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
