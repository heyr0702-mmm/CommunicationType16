import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/workplace-communication" },
    title: "職場のすれ違いを4軸で解く — 報連相・会議・空気の重さ",
    description:
        "「で、結論は？」と言われる。会議で誰も発言しない。チームの空気が重い。職場のよくある4場面を、会話スタイルの4軸から具体的な言い換え例つきで解きほぐします。",
    openGraph: {
        title: "職場のすれ違いを4軸で解く | 16コミュニケーションタイプ診断",
        description:
            "報連相・会議・空気の重さ。職場のすれ違いを会話スタイルの違いから具体例つきで解説します。",
        type: "article",
    },
};

export default function WorkplaceCommunicationArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🏢</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        職場のすれ違いを4軸で解く
                        <br />
                        報連相・会議・空気の重さ
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">
                        公開日: 2025年4月10日 ／ 更新: 2026年8月15日
                    </p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「会議がまとまらない」「上司にうまく報告できない」「フィードバックが伝わっていない気がする」。
                    </p>
                    <p>
                        職場の悩みは尽きませんが、その多くは能力や熱意の差ではありません。
                        <strong>会話の作法が違う人同士が、同じ部屋にいる</strong>
                        というだけのことです。
                    </p>
                    <p>
                        そして職場が家庭や友人関係と違うのは、
                        <strong>相手を選べない</strong>
                        こと。合わない相手とも毎日やりとりする必要があります。だからこそ、スタイルの違いを言葉にできると効果が大きい場所でもあります。
                    </p>
                    <p>
                        ここでは、職場でよく起きる4つの場面を取り上げます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        ケース1: 「で、結論は？」と言われてしまう
                    </h2>
                    <p>
                        報告のたびにこう言われるなら、上司は
                        <strong>D（主導）またはC（論理）</strong>
                        寄りのスタイルを持っている可能性が高いです。
                    </p>
                    <p>
                        あなたが背景から話すのは、丁寧に伝えようとしているからです。何も間違っていません。ただ、Cの人にとって背景は「結論を判断したあとで必要になる情報」なので、先に来ると処理の順番が合わないだけなんです。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-3">
                        <p>
                            <strong>Before</strong>
                            <br />
                            「先週から◯◯社さんとやりとりしていて、先方の担当が変わったこともあって少し話が止まっていたんですが、昨日ようやく返信があって……」
                        </p>
                        <p>
                            <strong>After</strong>
                            <br />
                            「◯◯社の件、来週納品で確定しました。経緯は、先方の担当交代で一度止まっていたのが昨日動いた形です」
                        </p>
                        <p className="text-gray-600">
                            → 内容は同じ。
                            <strong>結論を先頭に置き、経緯を後ろに回しただけ</strong>
                            です。
                        </p>
                    </div>
                    <p>
                        逆に、あなたが上司や先輩の立場で、部下の報告が長いと感じているなら。「結論から言って」と要求する前に、
                        <strong>「まず一言でどうなった？ そのあと経緯を聞かせて」</strong>
                        と順番を指定してあげると、相手は萎縮せずに直せます。順番の問題であって、能力の問題ではないからです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        ケース2: 会議で発言しないメンバーがいる
                    </h2>
                    <p>
                        ずっと黙っているからといって、意見がないとは限りません。
                        <strong>S（熟考）</strong>
                        の人は、頭の中である程度言葉を組み立ててからでないと口に出せないので、その場で急に振られると本当に何も出てこないのです。
                    </p>
                    <p>
                        しかもここには、
                        <strong>Z（聞き役）</strong>
                        も重なることがあります。SとZの両方を持つ人は、「考えがまとまるのに時間がかかる」うえに「そもそも発信量が少ない」ので、会議では存在しないように見えてしまう。実際には、いちばん深く聞いていることも多いのに。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-2">
                        <p className="font-bold">効く工夫</p>
                        <p>
                            ・
                            <strong>アジェンダを前日までに共有する。</strong>
                            これだけで、Sの人は考える時間を確保できます。会議中の発言量が変わります。
                        </p>
                        <p>
                            ・
                            <strong>その場で振らず、あとで回収する。</strong>
                            「この件、明日までにチャットで意見もらえますか」。非同期にすると質の高い意見が出てきます。
                        </p>
                        <p>
                            ・
                            <strong>沈黙を数秒待つ。</strong>
                            「意見ある人？」のあと3秒で次に進むと、Sの人は永遠に間に合いません。10秒待つだけで拾えることがあります。
                        </p>
                    </div>
                    <p>
                        自分がSの側なら、
                        <strong>先に宣言しておく</strong>
                        のが効きます。「その場ですぐ返すのが苦手なので、あとでまとめて送ってもいいですか」。これを一度言っておくだけで、黙っていることが怠慢ではないと共有できます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        ケース3: チームの空気が重い・ギスギスしている
                    </h2>
                    <p>
                        プロジェクトが佳境に入ると、業務を前に進める
                        <strong>D（主導）とC（論理）</strong>
                        が場を占めがちです。締め切りが迫っているのだから、当然のことでもあります。
                    </p>
                    <p>
                        ただ、その状態が続くと、
                        <strong>R（受容）やE（共感）</strong>
                        の人が発言しづらくなります。「今そんな話をしている場合じゃない」という空気を感じ取ってしまうからです。そして厄介なのは、Eの人が拾っていた「実は詰まっている」「あの人しんどそう」という情報が、同時に流れてこなくなることです。
                    </p>
                    <p>
                        空気が重いという現象の中身は、たいてい
                        <strong>温度感の情報が流れなくなった状態</strong>
                        です。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-2">
                        <p className="font-bold">効く工夫</p>
                        <p>
                            ・
                            <strong>雑談の時間を「業務として」置く。</strong>
                            余裕がないときこそ、自然発生には期待できません。5分でも枠にすると復活します。
                        </p>
                        <p>
                            ・
                            <strong>感謝を明示的に流す。</strong>
                            「助かりました」をチャットに書く、スタンプを押す。効率だけで回っている場に温度感を戻す、いちばん軽い方法です。
                        </p>
                        <p>
                            ・
                            <strong>進捗以外を聞く枠を作る。</strong>
                            「困ってることある？」ではなく「今どのへんがしんどい？」。前者は「ない」で終わりますが、後者は答えやすいです。
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        ケース4: フィードバックが伝わらない・きつく響く
                    </h2>
                    <p>
                        同じ指摘でも、相手のスタイルによって受け取られ方が変わります。ここを外すと、内容は正しいのに関係だけが悪くなります。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                            <strong>C（論理）寄りの相手には</strong>
                            、率直に事実を伝えるほうが伝わります。前置きの気遣いが長いと、かえって何が問題か分からず不安になります。
                        </li>
                        <li>
                            <strong>E（共感）寄りの相手には</strong>
                            、指摘の前に「見ている」ことを伝えると届きます。同じ内容でも、否定ではなく期待として受け取れます。
                        </li>
                        <li>
                            <strong>Z（聞き役）寄りの相手には</strong>
                            、人前ではなく1対1で。全体の場での指摘は、内容の何倍も重く響きます。
                        </li>
                        <li>
                            <strong>I（即興）寄りの相手には</strong>
                            、その場で短く。時間が経ってから伝えると、本人の中ではもう終わった話になっています。
                        </li>
                    </ul>
                    <p>
                        どれも、
                        <strong>内容を薄めるのではなく、届く形に変える</strong>
                        という話です。言うべきことを言わないのは、結局その人のためになりません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        職場でこれをやるときの注意
                    </h2>
                    <p>
                        最後に、大事な線引きを2つ書いておきます。
                    </p>
                    <p>
                        <strong>1. 評価に使わない。</strong>
                        タイプは能力ではありません。「Zだから会議に向いていない」「Sだからスピード感がない」といった使い方をした瞬間、これは人を狭める道具になります。この診断は
                        <strong>採用選考や人事評価には使えません</strong>
                        し、そのための設計もしていません。
                    </p>
                    <p>
                        <strong>2. 本人の同意なく決めつけない。</strong>
                        「あの人は絶対Dだよね」と陰で分類するのは、レッテル貼りと変わりません。効くのは、
                        <strong>お互いが自分から開示したとき</strong>
                        だけです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        いちばん効くのは「先に宣言する」こと
                    </h2>
                    <p>
                        チームで試してみて効果が大きいのは、実は難しいテクニックではありません。
                        <strong>自分の癖を先に言っておくこと</strong>
                        です。
                    </p>
                    <p>
                        「私、結論から言っちゃうから冷たく聞こえたらごめん」「考えるのに時間かかるから、返事が遅くても怒ってないよ」。この一言があるだけで、あとで起きるはずだったすれ違いの多くが、起きる前に消えます。
                    </p>
                    <p>
                        すれ違ってから修復するより、
                        <strong>先に共通言語を置いておくほうが、圧倒的に安い</strong>
                        んです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        まずは自分のスタイルを言葉にするところから。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/hourenso-style" className="text-neon-blue hover:underline">
                            → 報連相が噛み合わない理由をもっと詳しく
                        </Link>
                        <Link href="/column/meeting-silence" className="text-neon-blue hover:underline">
                            → 会議で発言できないのは熟考型(S)だから
                        </Link>
                        <Link href="/column/boss-subordinate" className="text-neon-blue hover:underline">
                            → 上司・部下のすれ違いを4軸で読み解く
                        </Link>
                        <Link href="/column/improve-relationships" className="text-neon-blue hover:underline">
                            → 診断結果の使い方（3ステップ）を読む
                        </Link>
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
                    <Button size="lg" className="animate-pulse shadow-md border-2 border-black w-full sm:w-auto">
                        無料診断スタート
                    </Button>
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
