import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/methodology" },
    title: "この診断の作り方と、限界について",
    description:
        "28問がどう4軸に割り当てられ、どう集計され、どこでタイプが決まるのか。そして、この診断で分からないことは何か。設計の中身と限界を包み隠さず書いています。",
    openGraph: {
        title: "この診断の作り方と、限界について | 16コミュニケーションタイプ診断",
        description:
            "28問の構成、集計方法、タイプ判定の仕組み、そしてこの診断の限界を公開しています。",
        type: "article",
    },
};

export default function MethodologyPage() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🔧</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        この診断の作り方と、限界について
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">最終更新: 2026年8月15日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        診断サイトを使うとき、いちばん気になるのは「これ、どこまで信じていいの？」だと思います。
                    </p>
                    <p>
                        なので、このページには中身をそのまま書きます。28問がどう割り当てられ、どう集計され、どこでタイプが決まるのか。そして
                        <strong>この診断では分からないこと</strong>
                        は何か。読んだうえで、どのくらいの重さで受け取るかを決めてもらえたら嬉しいです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        なぜ「性格」ではなく「会話スタイル」を測るのか
                    </h2>
                    <p>
                        性格診断はすでにたくさんあります。この診断がわざわざ別のものを測っているのは、人間関係で実際に困る場面のほとんどが、
                        <strong>性格ではなく「やりとりの噛み合わせ」で起きている</strong>
                        と考えているからです。
                    </p>
                    <p>
                        たとえば「あの人とは合わない」と感じるとき、相手の人格が嫌いなわけではないことがほとんどです。話すテンポが違う、求めているものが共感か解決かで違う、どちらが場を進めるかで譲り合ってしまう。困っているのは、その表層のズレのほうです。
                    </p>
                    <p>
                        表層だからこそ、
                        <strong>知れば調整できます。</strong>
                        性格を変えるのは大仕事ですが、「この人は考えてから話す人だから、沈黙を急かさないでおこう」は今日からできます。この診断が測ろうとしているのは、その調整の手がかりです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        4つの軸が見ているもの
                    </h2>
                    <p>
                        会話のふるまいを、独立して動く4つの成分に分けています。
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-sm">
                        <li>
                            <strong>⚡ Power（主導権）— D 主導 / R 受容</strong>
                            <br />
                            会話のハンドルを誰が握るか。「で、どうする？」と前に進めたいのがD、「うんうん、それで？」とまず受け止めたいのがR。
                        </li>
                        <li>
                            <strong>❤️ Warmth（温度感）— E 共感 / C 論理</strong>
                            <br />
                            会話の目的が共感か解決か。気持ちの共有を優先するのがE、筋道の整理を優先するのがC。
                        </li>
                        <li>
                            <strong>🚀 Speed（テンポ）— I 即興 / S 熟考</strong>
                            <br />
                            思いついてから口に出すまでの速さ。しゃべりながら考えるのがI、組み立ててから話すのがS。
                        </li>
                        <li>
                            <strong>🔊 Volume（存在感）— X 表現大 / Z 聞き役</strong>
                            <br />
                            場の中でどれくらい自分を出すか。発信量が多いのがX、受信に回るのがZ。
                        </li>
                    </ul>
                    <p>
                        この4つを選んだのは、
                        <strong>どれか1つが決まっても他の3つが予想できないから</strong>
                        です。「よく喋る人」と聞いても、その人が場を仕切るかは分かりませんし、共感型か論理型かも分かりません。互いに重ならない成分に分けることで、同じ「よく喋る人」でも中身の違う16通りに分かれます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        28問の構成
                    </h2>
                    <p>
                        設問は全28問。
                        <strong>4軸 × 7問</strong>
                        で均等に割り当てています。どの軸も同じ重みで効くようにするためです。
                    </p>
                    <p>
                        7問の内訳は、
                        <strong>正方向の設問が4問、逆方向の設問が3問</strong>
                        です。逆方向というのは、「はい」と答えるほどその軸が低く出る設問のこと。たとえばSpeed軸なら——
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-2">
                        <p>
                            <strong>正方向（Iに寄る）</strong>: 「会話の中で沈黙が数秒続くと落ち着かず、とりあえず何か一言入れて空気を動かそうとする」
                        </p>
                        <p>
                            <strong>逆方向（Sに寄る）</strong>: 「発言する前に、頭の中である程度文章を組み立ててからでないと、なかなか口に出せない」
                        </p>
                    </div>
                    <p>
                        わざわざ向きを混ぜているのは、
                        <strong>人はどんな設問にも「はい」と答えやすい</strong>
                        という癖があるからです。全部が同じ向きの設問だと、内容と関係なく「はい」寄りに答えた人が全員同じ結果になってしまいます。向きを混ぜておけば、その偏りが打ち消し合います。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        集計とタイプ判定の仕組み
                    </h2>
                    <p>回答から結果が出るまでは、実際には次の計算をしています。</p>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                        <li>
                            各設問の答えを
                            <strong>-2から+2の5段階</strong>
                            の数値にします（強くNoが-2、どちらでもないが0、強くYesが+2）。
                        </li>
                        <li>
                            逆方向の設問は
                            <strong>符号を反転</strong>
                            させてから足します。これで7問すべてが同じ向きに揃います。
                        </li>
                        <li>
                            軸ごとに合計します。1軸7問なので、素点は理論上
                            <strong>-14 〜 +14</strong>
                            の範囲に収まります。
                        </li>
                        <li>
                            表示用のバーは、
                            <strong>±10で頭打ちにして0〜100%に変換</strong>
                            しています。±14ではなく±10にしているのは、はっきりした傾向がある人でも1〜2問は例外的な答えをするのが普通で、そこで満点が出なくなるのを避けるためです。
                        </li>
                        <li>
                            最後に、各軸の素点が
                            <strong>0以上か0未満か</strong>
                            で1文字ずつ決めます。Powerが0以上ならD、0未満ならR。同様にE/C、I/S、X/Z。この4文字を並べたものがタイプコードです。
                        </li>
                    </ol>
                    <p className="text-sm text-gray-600">
                        計算はすべてお使いのブラウザの中で行われます。回答内容が会員情報として蓄積されることはありません（アクセス解析の取り扱いは
                        <Link href="/privacy-policy" className="text-neon-blue hover:underline">
                            プライバシーポリシー
                        </Link>
                        をご覧ください）。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        ここからが大事: この診断の限界
                    </h2>
                    <p>
                        仕組みを書いたので、弱いところも同じだけ書きます。
                    </p>

                    <h3 className="text-base font-bold text-ink mt-6">
                        1. 素点が0付近の人は、タイプが安定しない
                    </h3>
                    <p>
                        タイプは「0以上か0未満か」で切っています。つまり素点が+1の人と-1の人は、
                        <strong>ほとんど同じなのに別のタイプ</strong>
                        になります。別の日に受け直したら反対側に出ることも普通にあります。
                    </p>
                    <p>
                        なので、結果を見るときはタイプ名より
                        <strong>バーの傾き</strong>
                        を見てください。真ん中に近い軸は「その軸については、相手や場面で振れる人」という意味です。それは曖昧なのではなく、
                        <strong>状況に応じて切り替えられる</strong>
                        ということでもあります。
                    </p>

                    <h3 className="text-base font-bold text-ink mt-6">
                        2. 測っているのは「自分でどう思っているか」
                    </h3>
                    <p>
                        すべて自己申告なので、この診断が知れるのは
                        <strong>あなたが自分をどう認識しているか</strong>
                        だけです。周りから実際にどう見えているかは分かりません。
                    </p>
                    <p>
                        「自分は聞き役だと思っていたのに、友達には喋りすぎと言われる」——このズレはよくあります。むしろそのズレに気づけたときが、この診断がいちばん役に立った瞬間かもしれません。結果を友達に見せて「これ合ってる？」と聞いてみるのを勧めているのは、そのためです。
                    </p>

                    <h3 className="text-base font-bold text-ink mt-6">
                        3. スタイルは相手によって変わる
                    </h3>
                    <p>
                        会話スタイルは、あなたの中に固定されているものではありません。相手との
                        <strong>組み合わせで決まる</strong>
                        部分がかなりあります。仕切りたがりの人の前では自然と聞き役になり、後輩の前では自分が仕切る。どちらも同じあなたです。
                    </p>
                    <p>
                        なので、この診断が出すのは「あなたの正体」ではなく、
                        <strong>「あなたが素の状態で出やすい傾向」</strong>
                        くらいの解像度だと思ってください。
                    </p>

                    <h3 className="text-base font-bold text-ink mt-6">
                        4. 学術的な性格検査ではありません
                    </h3>
                    <p>
                        はっきり書いておきます。この診断は、心理学の性格検査で行われるような
                        <strong>信頼性・妥当性の統計的な検証を行っていません。</strong>
                        設問は、日常の会話でよく起きる場面から組み立てたものです。
                    </p>
                    <p>
                        したがって、医学的・心理学的な判断の材料にはなりません。採用選考や人事評価に使うことも想定していません。人を選別したり、誰かに「あなたはこのタイプだからダメ」と言うための道具ではないからです。
                    </p>

                    <h3 className="text-base font-bold text-ink mt-6">
                        5. 16という数は、自然界の区切りではない
                    </h3>
                    <p>
                        4軸をそれぞれ2つに割ったので16になっているだけで、
                        <strong>人間が16種類しかいないという意味ではありません。</strong>
                        実際には各軸が連続的な量なので、本当は無数のグラデーションがあります。
                    </p>
                    <p>
                        16に区切っているのは、そのほうが話題にしやすいからです。「私、黒幕タイプだったわ」と言えることには、グラフを見せるのとは別の価値があります。ただ、便宜上の区切りだということは忘れないでください。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        それでも、この診断がしたいこと
                    </h2>
                    <p>
                        限界を並べましたが、それでも意味があると思っているのは、この診断の目的が
                        <strong>あなたを正確に分類することではない</strong>
                        からです。
                    </p>
                    <p>
                        目指しているのは、すれ違ったときに
                        <strong>「誰のせいでもない」と言えるようになること</strong>
                        。「私は結論から聞きたい人で、あなたはまず気持ちを共有したい人なんだね」と口に出せれば、それだけで責め合いは止まります。
                    </p>
                    <p>
                        そのための共通言語として使ってもらえたら、この診断は役目を果たしています。当たっているかどうかより、
                        <strong>話のきっかけになったかどうか</strong>
                        のほうが大事です。
                    </p>

                    <div className="flex flex-col items-center gap-2 text-sm mt-8">
                        <Link href="/about" className="text-neon-blue hover:underline">
                            → 診断の概要（About）を読む
                        </Link>
                        <Link href="/vision" className="text-neon-blue hover:underline">
                            → このサイトの考え方（Vision）を読む
                        </Link>
                        <Link href="/column/why-i-made-this" className="text-neon-blue hover:underline">
                            → 運営者がこの診断を作った理由
                        </Link>
                        <Link href="/types" className="text-neon-blue hover:underline">
                            → 16タイプ一覧を見る
                        </Link>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <div className="mt-8 text-center bg-gray-50 border border-dashed border-gray-300 p-6 sm:p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">仕組みが分かったところで</h3>
                <p className="text-sm text-gray-600 mb-6">
                    全28問・約3分。登録は必要ありません。
                </p>
                <Link href="/diagnosis">
                    <Button size="lg" className="animate-pulse shadow-md border-2 border-black w-full sm:w-auto">
                        無料診断スタート
                    </Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
