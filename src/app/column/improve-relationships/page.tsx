import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/improve-relationships" },
    title: "人間関係を楽にする、診断結果の使い方（3ステップ）",
    description:
        "診断を受けて終わりにしないための実践編。自分の当たり前を疑い、相手の言動をスタイルに翻訳し、受け取りやすいボールを投げる。具体的な会話例つきで3ステップを解説します。",
    openGraph: {
        title: "人間関係を楽にする、診断結果の使い方 | 16コミュニケーションタイプ診断",
        description:
            "診断を受けて終わりにしないための実践編。3ステップを会話例つきで解説します。",
        type: "article",
    },
};

export default function ImproveRelationshipsArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🤝</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        人間関係を楽にする、
                        <br />
                        診断結果の使い方（3ステップ）
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">
                        公開日: 2025年4月10日 ／ 更新: 2026年8月15日
                    </p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「どうしてあんな言い方しかできないんだろう」「私の言葉、ちゃんと伝わってるのかな」。
                    </p>
                    <p>
                        こういうモヤモヤは、たいてい相手が悪いわけでも、自分の能力が足りないわけでもありません。ただ、
                        <strong>お互いの会話の作法が違うだけ</strong>
                        です。
                    </p>
                    <p>
                        とはいえ、診断を受けてタイプ名を知っただけでは、日常は変わりません。ここでは、結果を実際の人間関係に効かせるための3ステップを、具体的な会話例つきで書きます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        STEP 1: 自分にとっての「当たり前」を疑う
                    </h2>
                    <p>
                        最初にやることは、相手を分析することではなく、
                        <strong>自分の基準を自覚すること</strong>
                        です。
                    </p>
                    <p>
                        私たちは自分の会話の作法を「普通」だと思っています。だから、それと違う人を見ると「変わってる」「気が利かない」と感じてしまう。でも相手からすれば、こちらのほうが変わって見えている。
                    </p>
                    <p>
                        分かりやすいのが「沈黙」です。言葉を交わし続けることで安心する人（X・表現大）にとって、無言は「気まずい」「嫌われたかも」のサインです。一方、必要な言葉だけで済ませたい人（Z・聞き役）にとって、無言は「落ち着く」「無理に埋めなくていい時間」です。
                    </p>
                    <p>
                        同じ5秒の沈黙が、片方には不安で、もう片方には快適。
                        <strong>どちらが正しいという話ではありません。</strong>
                        まずはここに気づくところからです。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm">
                        <p className="font-bold mb-2">試してみること</p>
                        <p>
                            診断結果のバーを見て、
                            <strong>いちばん端に寄っている軸を1つ</strong>
                            選んでください。それがあなたの「当たり前」が最も強く出ている場所です。逆側の人と話すとき何が起きているかを想像するだけで、STEP 2がぐっと楽になります。
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        STEP 2: 相手の言動を「スタイル」に翻訳する
                    </h2>
                    <p>
                        次は、相手の行動を人格ではなくスタイルとして読み替える練習です。同じ場面が、翻訳するだけでまったく違って見えます。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                            <strong>「冷たい」</strong>
                            → 感情より筋道を優先しているだけかも（C・論理）
                        </li>
                        <li>
                            <strong>「強引」</strong>
                            → 決まらない時間が苦しくて先に動いているだけかも（D・主導）
                        </li>
                        <li>
                            <strong>「ノリが悪い」</strong>
                            → 返事を組み立てている最中かも（S・熟考）
                        </li>
                        <li>
                            <strong>「馴れ馴れしい」</strong>
                            → 距離を詰めることが親愛の表現なのかも（X・表現大）
                        </li>
                        <li>
                            <strong>「何を考えてるか分からない」</strong>
                            → 表に出す量が少ないだけで、中では動いているかも（Z・聞き役）
                        </li>
                    </ul>
                    <p>
                        たとえば、こんな場面。友人に悩みを打ち明けたら、いきなり解決策が返ってきた——というよくあるすれ違いです。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-3">
                        <p>
                            <strong>あなた</strong>
                            ：「最近、仕事がしんどくてさ……」
                        </p>
                        <p>
                            <strong>相手</strong>
                            ：「それ、上司に相談した？ 業務量を数字で出したほうが早いよ」
                        </p>
                        <p className="text-gray-600">
                            ▼ 翻訳なしで受け取ると →「気持ちを分かってくれない。冷たい」
                        </p>
                        <p className="text-gray-600">
                            ▼ スタイルに翻訳すると →「この人はC（論理）寄り。
                            <strong>解決策を出すことが、この人にとっての心配の表し方</strong>
                            なんだ」
                        </p>
                    </div>
                    <p>
                        翻訳できると、腹が立たなくなるだけではありません。
                        <strong>次にどう言えばいいかが見えてきます。</strong>
                        「ありがとう。ただ今日は解決策より、ちょっと聞いてほしいだけかも」と言えるようになる。相手も悪気がないので、たいていすんなり切り替えてくれます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        STEP 3: 相手が受け取りやすいボールを投げる
                    </h2>
                    <p>
                        最後は、伝え方を少しだけ相手側に寄せることです。
                    </p>
                    <p>
                        ここで大事なのは、
                        <strong>自分を変えるのではなく、渡し方だけ変える</strong>
                        ということ。中身は同じでいいんです。同じ内容でも、包み方で伝わり方は変わります。
                    </p>
                    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg my-4 text-sm space-y-3">
                        <p className="font-bold">同じ「予定を変えたい」を伝える場合</p>
                        <p>
                            <strong>C（論理）寄りの相手に</strong>
                            <br />
                            「土曜の件、日曜に変更できますか。理由は午前中に外せない用事が入ったためです」
                            <br />
                            <span className="text-gray-600">→ 結論と理由が先。前置きは短く。</span>
                        </p>
                        <p>
                            <strong>E（共感）寄りの相手に</strong>
                            <br />
                            「ごめん、楽しみにしてたんだけど土曜が難しくなっちゃって……日曜だと大丈夫かな？」
                            <br />
                            <span className="text-gray-600">→ 気持ちを先に共有してから用件。</span>
                        </p>
                        <p>
                            <strong>S（熟考）寄りの相手に</strong>
                            <br />
                            「予定のことで相談があるんだけど、あとで返事もらえたら大丈夫だから」
                            <br />
                            <span className="text-gray-600">→ 即答を求めていないと最初に伝える。</span>
                        </p>
                    </div>
                    <p>
                        どれも嘘はついていませんし、無理もしていません。ただ、相手が受け取りやすい形に持ち替えただけです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        よくある3つの誤解
                    </h2>
                    <p>この使い方をするとき、つまずきやすいポイントが3つあります。</p>
                    <p>
                        <strong>誤解1: 相手に合わせ続けないといけない</strong>
                        <br />
                        違います。毎回合わせていたら、あなたのほうが消耗します。合わせるのは
                        <strong>大事な場面と、こじれそうな場面だけ</strong>
                        で十分です。普段は普段のあなたでいいし、そのほうが自然な関係になります。
                    </p>
                    <p>
                        <strong>誤解2: タイプが分かれば相手を操作できる</strong>
                        <br />
                        できませんし、やれば必ず気づかれます。この診断は相手を動かすための道具ではなく、
                        <strong>お互いを責めなくて済むようにするための共通言語</strong>
                        です。目的がずれると、途端に効かなくなります。
                    </p>
                    <p>
                        <strong>誤解3: 相性が悪いタイプとは分かり合えない</strong>
                        <br />
                        むしろ逆で、噛み合わせが悪い相手ほど、癖を知っておく効果が大きく出ます。長く続いている関係を見ると、相性の良し悪しより
                        <strong>「相手の癖を知っているかどうか」</strong>
                        で決まっていることがほとんどです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        今日から試せる3つのこと
                    </h2>
                    <ol className="list-decimal pl-5 space-y-3 text-sm">
                        <li>
                            <strong>結果を1人に見せて「これ合ってる？」と聞く。</strong>
                            自己申告の診断なので、他人から見た自分とのズレが分かると一気に精度が上がります。ここがいちばん面白い時間でもあります。
                        </li>
                        <li>
                            <strong>イラッとした瞬間に、心の中で1回だけ翻訳する。</strong>
                            「冷たい」ではなく「Cかも」。それだけで、反応する前に一拍おけます。慣れると自動でできるようになります。
                        </li>
                        <li>
                            <strong>自分の癖を先に宣言しておく。</strong>
                            「私、考えてから話すから返事が遅いけど、無視してるわけじゃないよ」。この一言を先に置いておくと、そもそもすれ違いが起きません。
                        </li>
                    </ol>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        目指すのは「誰のせいでもない」と言えること
                    </h2>
                    <p>
                        3ステップを通してやろうとしているのは、器用に立ち回ることではありません。
                    </p>
                    <p>
                        噛み合わなかったときに、自分を責めるのでも相手を責めるのでもなく、
                        <strong>「私たち、違うゲームをしてたね」と言えるようになること</strong>
                        。それができると、同じ出来事が起きても、後に残るものがまったく変わります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        まずは、自分の「当たり前」を知るところから。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/why-mismatch" className="text-neon-blue hover:underline">
                            → 「相性が悪い」の正体を読む
                        </Link>
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">
                            → 4つの軸のまとめを読む
                        </Link>
                        <Link href="/column/workplace-communication" className="text-neon-blue hover:underline">
                            → 職場編を読む
                        </Link>
                        <Link href="/compatibility" className="text-neon-blue hover:underline">
                            → 2人の相性診断を試す
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
