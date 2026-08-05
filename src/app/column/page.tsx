import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "コミュニケーション改善コラム",
    description: "人間関係をスムーズにするためのコミュニケーションのコツや、会話スタイルの違いから生じるすれ違いを防ぐ方法などを解説するコラムです。",
};

const COLUMNS = [
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
