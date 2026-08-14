import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "私がこの診断を作った理由 — 自分を言語化できると、なぜ心が軽くなるのか",
    description:
        "中学生の頃に診断サイトにハマり、就職活動でも日常でも「自分を言葉にすること」に助けられてきました。運営者が16コミュニケーションタイプ診断を作るまでの、個人的な話です。",
    openGraph: {
        title: "私がこの診断を作った理由 | 16コミュニケーションタイプ診断",
        description:
            "自分を言語化できると、なぜ心が軽くなるのか。運営者がこの診断を作るまでの個人的な話です。",
        type: "article",
    },
};

export default function WhyIMadeThisArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">✍️</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        私がこの診断を作った理由
                        <br />
                        自分を言語化できると、なぜ心が軽くなるのか
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">
                        公開日: 2026年8月15日 ／ 運営者コラム
                    </p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        この診断について、いつか書いておきたいと思っていたことがあります。サイトの説明でも、タイプの解説でもなく、
                        <strong>そもそも私がなぜこれを作ったのか</strong>
                        という話です。
                    </p>
                    <p>
                        きれいな理由をあとから付けることもできるのですが、正直に言うと、出発点はもっと個人的なところにありました。私自身が、ずっと診断に救われてきたからです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        中学生の私は、診断サイトに夢中だった
                    </h2>
                    <p>
                        最初にのめり込んだのは、中学生の頃でした。「ハニホー」という性格診断のサイトがあって、私はそれをずっとやっていました。結果が出るたびに読み込んで、当たっているところに勝手にうなずいて、当たっていないところにもなぜか納得しようとしていた記憶があります。
                    </p>
                    <p>
                        今から思えば、あれは「自分のことを誰かに言葉にしてもらえる」という体験でした。中学生のうちは、自分の内側で起きていることを説明する語彙をまだ持っていません。なんとなく落ち着かない、なんとなく居心地が悪い、なんとなく楽しい——その「なんとなく」に、誰かが名前をつけてくれる。それがうれしかったのだと思います。
                    </p>
                    <p>
                        そこから私は、いわゆる自己分析がずっと好きなままになりました。診断系のサイトを見つけるとつい受けてしまうし、結果を人に話すのも好きです。趣味と言ってしまえばそれまでなのですが、この癖が、あとになって思いのほか効いてきました。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        就職活動で、それが「役に立つもの」に変わった
                    </h2>
                    <p>
                        分かりやすく助かったのは、就職活動のときです。自己分析をしなければいけない場面で、私はあまり苦労しませんでした。というより、
                        <strong>すでに何年もそれをやっていた</strong>
                        んです。
                    </p>
                    <p>
                        自分がどういうときに動けて、どういうときに止まるのか。人と関わるときに何を大事にしていて、何が苦手なのか。そういうことを説明する言葉を、遊びのつもりで長いあいだ集めていた。それが、必要になったタイミングでそのまま使えました。
                    </p>
                    <p>
                        ただ、私がこの話を書きたいのは、就活のテクニックとしてではありません。むしろ効いているのは、就活が終わったあとの
                        <strong>日常のほう</strong>
                        でした。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        私が悩みすぎないのは、たぶん言語化しているから
                    </h2>
                    <p>
                        自分で言うのも少し変ですが、私は日頃、考えすぎたり悩みすぎたりすることがあまりありません。もともとの性格もあると思います。でもそれだけではなくて、
                        <strong>自分のモヤモヤを言葉にするのが、たまたま得意になっていた</strong>
                        ことが大きいと感じています。
                    </p>
                    <p>
                        悩みがしんどいのは、多くの場合、内容そのものよりも
                        <strong>形がないこと</strong>
                        のせいです。答えの出ない問いが頭のなかをぐるぐる回って、輪郭がつかめないまま時間だけが過ぎていく。あの状態がいちばん消耗します。
                    </p>
                    <p>
                        そこで「たぶん自分は、こういうことなのかな」と一言でも置けると、ぐるぐるが止まります。正解でなくてもいいんです。仮でいい。よりどころになる考え方をひとつ持てているかどうかで、心のゆとりがまるで変わります。
                    </p>
                    <p>
                        私の場合、それが積み重なった結果として、感情の起伏が比較的おだやかなまま毎日を過ごせている——という感覚があります。特別に強いわけでも、悩みがないわけでもなく、
                        <strong>ぐるぐるを早めに止める手段を持っている</strong>
                        というだけのことです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        「本当に辛いとき」に効くのも、結局は言葉だった
                    </h2>
                    <p>
                        もちろん、本当に辛いことはあります。人間なので、たまにあります。おだやかに過ごせているといっても、それは平均の話であって、落ち込むときはちゃんと落ち込みます。
                    </p>
                    <p>
                        そういうときに私を助けてくれたのも、やっぱり言葉でした。「今、自分はこうなっているな」と、少しだけ引いた場所から自分を眺めて、それを言葉にする。すると、
                        <strong>正体の分からない不安が、ただの「今の状態」に変わります。</strong>
                    </p>
                    <p>
                        しんどさがゼロになるわけではありません。でも、得体が知れないものと、名前のついているもののあいだには、大きな差があります。名前がついた瞬間、それは対処を考えられるものになる。この「漠然とした不安からの解放」が、私にとっては一番大きな救いでした。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        友達のことを言葉にしたら、その人が軽くなった
                    </h2>
                    <p>
                        もうひとつ、はっきり覚えている体験があります。友達の話を聞いていて、その人が抱えているものを私なりに言葉にして返したときのことです。
                    </p>
                    <p>
                        大した助言をしたわけではありません。解決策も出していません。ただ「それって、こういうことなんじゃない？」と、その人の中にあったものに輪郭を与えただけ。それなのに、目の前の表情がふっとゆるんだんです。
                    </p>
                    <p>
                        そのとき、
                        <strong>言語化は自分のためだけのものじゃないんだ</strong>
                        と気づきました。誰かのモヤモヤに名前をつけてあげることは、それ自体がひとつの支えになる。これは私にとって、かなり大きな発見でした。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        自分のことなのに「新発見」がある、という体験
                    </h2>
                    <p>
                        この診断を作ったあと、まず友達に受けてもらいました。返ってきたのが「うわ、めっちゃ当たってるわ」という反応で、単純にうれしかったです。作ってよかったな、と思いました。
                    </p>
                    <p>
                        でも、それ以上に印象に残ったのは、そのあとに続いた言葉のほうでした。
                    </p>
                    <div className="bg-neon-yellow/20 border-l-4 border-neon-yellow p-4 rounded-r-lg my-6">
                        <p className="font-bold">
                            「確かに自分って、こういうところあったかもな。新発見やわ」
                        </p>
                    </div>
                    <p>
                        自分自身のことなのに、新発見。私は、ここにこのサイトの核心があると思っています。
                    </p>
                    <p>
                        会話のスタイルというのは、ほとんど無意識に出ています。沈黙が気まずくてつい喋ってしまうことも、結論から言われるとホッとすることも、いちいち考えてやっているわけではありません。
                        <strong>考えていないから、自分でも気づけない。</strong>
                        だからこそ、外から言葉にされたときに「あ、たしかに」と初めて見える。
                    </p>
                    <p>
                        そして、その気づきは責める形では来ません。「あなたはコミュ力が低い」ではなく、「あなたはこういうリズムで話す人だ」という形で来る。だから受け取りやすいし、受け取ったあとに少しだけ自分を許せます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        だから、この診断を作りました
                    </h2>
                    <p>
                        私がこのサイトでやりたかったのは、人を16種類に分けて優劣をつけることではありません。むしろ逆で、
                        <strong>「誰のせいでもない」と言えるようにすること</strong>
                        でした。
                    </p>
                    <p>
                        会話が噛み合わないとき、私たちはつい自分か相手のどちらかを責めます。自分のコミュ力が足りないのか、相手が分かってくれないのか。でも実際に起きているのは、多くの場合それではなくて、ただ
                        <strong>違うゲームをしていた</strong>
                        というだけのことです。速い球を投げ合いたい人と、じっくり手紙を書きたい人。どちらも間違っていません。
                    </p>
                    <p>
                        その違いに名前がつけば、責める必要がなくなります。「私はこういう話し方をする人で、あなたはそういう話し方をする人なんだね」と言えるようになる。それは、私が中学生の頃から診断にもらい続けてきたものと、たぶん同じものです。
                    </p>
                    <p>
                        無意識で流していたことが言葉になり、自己理解が少し進む。それが気持ちの安定につながり、これからの振る舞いが少し変わり、自信のようなものが残る。私自身がそうやって助けられてきたので、それが誰かの支えにもなればいいなと思っています。
                    </p>
                    <p>
                        大げさなことは何も起きません。ただ、あなたが普段なんとなくやっている喋り方に、名前がつくだけです。でもその「だけ」が、思っているよりずっと効きます。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたの“コミュ力の型”には、名前があります。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        全28問・約3分。登録は必要ありません。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/vision" className="text-neon-blue hover:underline">
                            → このサイトの考え方（Vision）を読む
                        </Link>
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">
                            → 4つの軸のまとめを読む（コミュニケーションスタイルとは？）
                        </Link>
                        <Link href="/column/commu-skill-myth" className="text-neon-blue hover:underline">
                            → 「コミュ力が高い/低い」は幻想 — スタイルに優劣はない
                        </Link>
                        <Link href="/types" className="text-neon-blue hover:underline">
                            → 16タイプ一覧を見る
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
