import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column" },
    title: "コミュニケーション改善コラム",
    description: "人間関係をスムーズにするためのコミュニケーションのコツや、会話スタイルの違いから生じるすれ違いを防ぐ方法などを解説するコラムです。",
};

const COLUMNS = [
    {
        slug: "why-i-made-this",
        title: "私がこの診断を作った理由 — 自分を言語化できると、なぜ心が軽くなるのか",
        description: "中学生の頃に診断サイトにハマり、就職活動でも日常でも「自分を言葉にすること」に助けられてきました。運営者が16コミュニケーションタイプ診断を作るまでの、個人的な話です。",
        emoji: "✍️",
    },
    {
        slug: "why-mismatch",
        title: "「相性が悪い」の正体 — 私たちはただ\"違うゲーム\"をしているだけ",
        description: "あの人と話が噛み合わないのは、性格でも相性でもありません。会話スタイルという\"別のゲーム\"をしているだけ。4つの軸で、すれ違いの正体をほどきます。",
        emoji: "🎲",
    },
    {
        slug: "communication-styles",
        title: "コミュニケーションスタイルとは？4つの軸で読み解く会話のクセ",
        description: "会話が噛み合わない原因は性格でも相性でもなく「スタイルの違い」。Power・Warmth・Speed・Volumeという4つの軸から、あなたと相手の会話のクセを読み解きます。",
        emoji: "🧩",
    },
    {
        slug: "commu-skill-myth",
        title: "「コミュ力が高い/低い」は幻想 — スタイルに優劣はない",
        description: "「コミュ力が低い」と落ち込む前に。それは能力の差ではなく、会話スタイルの違いかもしれません。優劣のない4軸で、\"コミュ力神話\"をほどきます。",
        emoji: "🪞",
    },
    {
        slug: "axis-power",
        title: "Power(主導権) — 会話を引っ張るD、受け止めるR、それぞれの流儀",
        description: "会議で先に喋る人と、じっくり聞いてから話す人。その違いはPower(主導権)という軸のクセです。DとR、それぞれの強みとすれ違いを解説します。",
        emoji: "🎤",
    },
    {
        slug: "axis-warmth",
        title: "Warmth(温度感) — 「わかって(E)」と「つまり?(C)」はどこですれ違うか",
        description: "気持ちに寄り添ってほしいEと、まず結論を整理したいC。悪意のないすれ違いはWarmth(温度感)という軸のクセです。それぞれの流儀を解説します。",
        emoji: "🌡️",
    },
    {
        slug: "axis-speed",
        title: "Speed(テンポ) — 会話が\"卓球(I)\"の人と\"手紙(S)\"の人",
        description: "即レスでポンポン返す人と、じっくり考えてから話す人。テンポの違いはSpeed(テンポ)という軸のクセです。IとS、それぞれの流儀とすれ違いを解説します。",
        emoji: "🏓",
    },
    {
        slug: "axis-volume",
        title: "Volume(存在感) — 場に自分を刻むX、そっと溶け込むZ、それぞれの強み",
        description: "会議で目立つ人と、静かに聞き役に回る人。どちらも場に貢献しています。Volume(存在感)という軸から、XとZそれぞれの強みを解説します。",
        emoji: "🎨",
    },
    {
        slug: "improve-relationships",
        title: "人間関係を楽にする！コミュニケーションタイプ診断の活用法",
        description: "合わない人ともうまく付き合うには？相手のスタイルを理解することで、会話のストレスを減らす具体的な方法。",
        emoji: "🤝",
    },
    {
        slug: "workplace-communication",
        title: "職場で使えるコミュニケーション改善テクニック",
        description: "会議での意見のすれ違いや、上司・部下とのコミュニケーションギャップを埋めるためのタイプ別アプローチ。",
        emoji: "🏢",
    },
    {
        slug: "type-compatibility-map",
        title: "相性の良い組み合わせ・噛み合わない組み合わせ — 16タイプ関係地図",
        description: "「相性がいい/悪い」は実は少しズレた表現です。4軸の組み合わせで\"起きやすいこと\"を地図にすると、どんな2人の間にも扱い方が見えてきます。",
        emoji: "🗺️",
    },
    {
        slug: "combo-power-speed",
        title: "主導型(D)×熟考型(S)がすれ違う理由と、ルールのチューニング法",
        description: "「早く決めて」というDと「まだ考えてる」というS。急かされる方も急かす方もつらいこのすれ違いは、性格ではなくテンポの設定違いです。",
        emoji: "⏱️",
    },
    {
        slug: "combo-warmth",
        title: "共感型(E)×論理型(C) — 「気持ち」と「結論」の翻訳術",
        description: "「まず分かってほしい」というEと「まず結論から聞きたい」というC。すれ違うのは冷たいからでも重いからでもなく、優先順位の違いです。翻訳のコツを紹介します。",
        emoji: "🔄",
    },
    {
        slug: "workplace-approachability",
        title: "職場で「話しかけづらい」と思われるのは性格じゃない — Volume(Z)/Warmth(C)の見え方",
        description: "「話しかけづらい」と言われるのは、冷たいからでも怖いからでもありません。ZとCという2つの軸の\"見え方\"の問題です。誤解を解く工夫を紹介します。",
        emoji: "🚪",
    },
    {
        slug: "meeting-silence",
        title: "会議で発言できないのは熟考型(S)だから — 沈黙を味方にする一言の作り方",
        description: "会議で発言できず落ち込む必要はありません。それは能力の問題ではなく、熟考型(S)というテンポのクセです。沈黙を活かす一言の作り方を紹介します。",
        emoji: "🤐",
    },
    {
        slug: "boss-subordinate",
        title: "上司・部下のすれ違いを4軸で読み解く",
        description: "上司と合わない、部下の考えが分からない。それは立場の問題ではなく、4軸のスタイルの組み合わせです。よくあるすれ違いパターンを解説します。",
        emoji: "🧭",
    },
    {
        slug: "hourenso-style",
        title: "報連相が噛み合わないのは\"型\"の違い — 結論から(C)／背景から(E)、どちらも正しい",
        description: "「結論から話して」と言われて戸惑う人も、「もっと状況を教えて」と言われて戸惑う人もいます。報連相のすれ違いは、CとEという型の違いです。",
        emoji: "📋",
    },
    {
        slug: "remote-text-warmth",
        title: "リモート・テキストで冷たく見えない伝え方 — 声と表情が消えると何が起きるか",
        description: "「あの人のチャット、なんか冷たい」と思われがち、あるいは思ってしまう。それは性格ではなく、テキストでWarmth(温度感)の信号が消えてしまうからです。E・C別の対処法を紹介します。",
        emoji: "💬",
    },
    {
        slug: "first-meeting-speed",
        title: "初対面で会話が続かない — Speedと\"質問\"の技術",
        description: "初対面で会話が続かず気まずい沈黙が生まれるのは、コミュ力の低さではありません。Speed(テンポ)軸の噛み合わせと、質問の作り方の問題です。",
        emoji: "🤝",
    },
    {
        slug: "silence-awkward-i",
        title: "沈黙が気まずいのは即興型(I)だから — 会話の\"間\"との付き合い方",
        description: "友人との雑談中、数秒の沈黙が怖くて何か喋ってしまう。それは性格の弱さではなく、即興型(I)というテンポのクセです。沈黙との付き合い方を紹介します。",
        emoji: "🌀",
    },
    {
        slug: "romance-mismatch",
        title: "恋愛・パートナーの会話がすれ違う、4軸の理由",
        description: "「なんで分かってくれないの」の裏には、性格の不一致ではなく4軸のズレがあります。決め方・気持ちの伝え方・喧嘩のペース・愛情表現、それぞれのすれ違いを解説します。",
        emoji: "💌",
    },
    {
        slug: "family-style-gap",
        title: "親子・家族の\"通じなさ\"は世代でなくスタイルの組み合わせ",
        description: "「親とは価値観が合わない」の正体は、世代差ではなく4軸のスタイルの組み合わせかもしれません。実家に帰るたびに疲れる理由を、4軸で読み解きます。",
        emoji: "🏠",
    },
    {
        slug: "good-listener",
        title: "聞き上手になる — 相手のスタイルに合わせる相槌と質問",
        description: "聞き上手とは、話し方が上手いことではありません。相手の4軸のスタイルに合わせて、相槌と質問を微調整できることです。D/R・E/C・I/S・X/Z別の聞き方のコツをまとめました。",
        emoji: "👂",
    },
];

export default function ColumnIndex() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting">コラム一覧</h1>
                <Link href="/">
                    <Button variant="secondary" size="sm">TOP</Button>
                </Link>
            </div>

            <div className="text-center mb-8">
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    人間関係や会話に役立つヒントをお届けします。<br />
                    違いを知ることで、コミュニケーションはもっと楽になります。
                </p>
            </div>

            <div className="space-y-6">
                {COLUMNS.map((col) => (
                    <Link href={`/column/${col.slug}`} key={col.slug} className="block group hover:no-underline">
                        <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-sm group-hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">
                                    {col.emoji}
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl font-bold text-ink mb-2 group-hover:text-neon-pink transition-colors">
                                        {col.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {col.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center bg-gray-50 border border-dashed border-gray-300 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">自分の会話スタイルを知りたくなったら</h3>
                <p className="text-sm text-gray-600 mb-4">
                    まずは無料診断で、あなたの無意識のクセを可視化してみましょう。
                </p>
                <Link href="/diagnosis">
                    <Button className="animate-pulse shadow-md border-2 border-black">診断を始める</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
