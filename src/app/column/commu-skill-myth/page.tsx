import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "「コミュ力が高い/低い」は幻想 — スタイルに優劣はない | 16コミュニケーションタイプ診断",
    description: "「コミュ力が低い」と落ち込む前に。それは能力の差ではなく、会話スタイルの違いかもしれません。優劣のない4軸で、\"コミュ力神話\"をほどきます。",
};

export default function CommuSkillMythArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🪞</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        「コミュ力が高い/低い」は幻想<br/>スタイルに優劣はない
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「コミュ力が低い」——この言葉、一度も使わずに生きてきた人は少ないと思います。
                    </p>
                    <p>
                        飲み会で気の利いた一言が出てこなかったとき。会議で発言できずに終わったとき。初対面の相手と沈黙が続いたとき。私たちはその瞬間、自分に「コミュ力が低い」というラベルを貼ってしまいます。
                    </p>
                    <p>
                        でも、少し立ち止まって考えてみてください。<strong className="text-neon-pink">「コミュ力」って、そもそも何を測っているものなのでしょう。</strong>
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        &quot;コミュ力&quot;という言葉の正体
                    </h2>
                    <p>
                        試しに、「コミュ力が高い人」を思い浮かべてみてください。
                    </p>
                    <p>
                        たぶん、こんな人物像が浮かんだはずです。初対面でもすぐ打ち解ける。よく笑う。会話のテンポが速い。場を盛り上げる。言葉数が多い。
                    </p>
                    <p>
                        気づいたでしょうか。これ、全部<strong>特定のスタイル</strong>の描写なんです。4軸でいえば、<Link href="/column/axis-speed" className="text-neon-blue hover:underline">Speed</Link>が速く（I）、<Link href="/column/axis-volume" className="text-neon-blue hover:underline">Volume</Link>が大きく（X）、<Link href="/column/axis-warmth" className="text-neon-blue hover:underline">Warmth</Link>も表に出やすい（E寄り）人の姿。つまり「コミュ力が高い」の中身は、能力の高さではなく、<strong>一部のスタイルへの偏った憧れ</strong>にすぎません。
                    </p>
                    <p>
                        一方で、静かにじっくり話を聞く人（Z×S）や、結論から端的に伝える人（C）は、この物差しでは「コミュ力が低い」と判定されがちです。でも、本当にそうでしょうか。深い話を安心して打ち明けられる相手として、Zの聞き役タイプを選ぶ人は少なくありません。要点を一言でまとめてくれるCタイプに、会議で救われた経験がある人もいるはずです。
                    </p>
                    <p>
                        つまり「コミュ力」という言葉は、<strong>ある型を&quot;正解&quot;として、他の型を&quot;欠陥&quot;扱いする物差し</strong>になってしまっている。これが、コミュ力神話の正体です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        スタイルに、優劣はつけられない
                    </h2>
                    <p>
                        会話のスタイルは、Power・Warmth・Speed・Volumeという4つの軸の組み合わせでできています。どの軸にも、高い側・低い側があるだけで、正解の側はありません。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 my-6">
                        <li>主導権を握るD、受け止めるR——どちらも会話を前に進める力</li>
                        <li>気持ちに寄り添うE、論理で整理するC——どちらも相手を理解しようとする力</li>
                        <li>テンポよく即興で話すI、じっくり熟考してから話すS——どちらも誠実な向き合い方</li>
                        <li>存在感を出すX、静かに溶け込むZ——どちらも場への貢献の仕方</li>
                    </ul>
                    <p>
                        <strong>優劣ではなく、ただの組み合わせ。</strong>右利きと左利きに優劣がないのと同じです。利き手が違えば道具の持ち方が変わるように、スタイルが違えば会話の&quot;持ち方&quot;が変わる。それだけの話です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        では、なぜ生きづらさは消えないのか
                    </h2>
                    <p>
                        ここまで読んでも、「そうは言っても、自分は損している気がする」と感じる人もいるかもしれません。それも、無理のない感覚です。
                    </p>
                    <p>
                        なぜなら、社会の多くの場面——飲み会、営業、面接——は、無意識にX×I寄りのスタイルを&quot;標準&quot;として設計されていることが多いから。<strong>個人の欠陥ではなく、場の設計が特定のスタイルに偏っている</strong>、というのがより正確な言い方です。
                    </p>
                    <p>
                        だとすれば、必要なのは「自分を直すこと」ではありません。自分のスタイルを知り、そのスタイルが最も力を発揮できる場面や関わり方を見つけていくこと。そして、違うスタイルの相手とは、「どちらかが我慢する」のではなく「お互いのルールをその場でチューニングする」こと。それが、コミュ力神話から抜け出す道です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        「コミュ力」ではなく「スタイル」という言葉を
                    </h2>
                    <p>
                        これからは、自分や相手を「コミュ力が高い/低い」で評価するのをやめてみませんか。
                    </p>
                    <p>
                        代わりに、「このスタイルの組み合わせなんだな」と捉えてみる。それだけで、落ち込む場面がひとつ減ります。相手を見る目も、少しやわらかくなります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたのスタイルは、何と何の組み合わせですか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        4つの軸から自分の型を知ることが、「コミュ力が低い」という漠然とした不安を、具体的な理解に変える第一歩になります。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸をもっと詳しく知る（コミュニケーションスタイルとは？）</Link>
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
