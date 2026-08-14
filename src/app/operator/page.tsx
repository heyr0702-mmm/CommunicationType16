import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/operator" },
    title: "運営者情報",
    description:
        "16コミュニケーションタイプ診断は、涼平が個人で運営しているサイトです。運営者、運営開始時期、作った理由、運営方針、連絡先を掲載しています。",
    openGraph: {
        title: "運営者情報 | 16コミュニケーションタイプ診断",
        description:
            "16コミュニケーションタイプ診断は、涼平が個人で運営しているサイトです。運営方針と連絡先を掲載しています。",
        type: "article",
    },
};

export default function OperatorPage() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🧑‍💻</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        運営者情報
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">最終更新: 2026年8月15日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        このサイトは、
                        <strong>涼平</strong>
                        が個人で運営しています。企画も、28問の設問設計も、記事の執筆も、サイトの構築も、すべて一人でやっています。会社や団体は関わっていません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        基本情報
                    </h2>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                        <dl className="divide-y divide-gray-200 text-sm">
                            <div className="px-4 py-3 sm:flex sm:gap-4">
                                <dt className="font-bold text-ink sm:w-32 shrink-0">サイト名</dt>
                                <dd>16コミュニケーションタイプ診断</dd>
                            </div>
                            <div className="px-4 py-3 sm:flex sm:gap-4">
                                <dt className="font-bold text-ink sm:w-32 shrink-0">URL</dt>
                                <dd>https://communicationtype16.com/</dd>
                            </div>
                            <div className="px-4 py-3 sm:flex sm:gap-4">
                                <dt className="font-bold text-ink sm:w-32 shrink-0">運営者</dt>
                                <dd>涼平（個人）</dd>
                            </div>
                            <div className="px-4 py-3 sm:flex sm:gap-4">
                                <dt className="font-bold text-ink sm:w-32 shrink-0">運営開始</dt>
                                <dd>2025年</dd>
                            </div>
                            <div className="px-4 py-3 sm:flex sm:gap-4">
                                <dt className="font-bold text-ink sm:w-32 shrink-0">連絡先</dt>
                                <dd>
                                    <Link href="/contact" className="text-neon-blue hover:underline">
                                        お問い合わせフォーム
                                    </Link>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        なぜこのサイトを作ったのか
                    </h2>
                    <p>
                        私は中学生の頃から診断サイトが好きで、自己分析をずっと趣味のように続けてきました。就職活動でも、日常の悩みごとでも、
                        <strong>自分の状態を言葉にできることに何度も助けられてきた</strong>
                        という実感があります。
                    </p>
                    <p>
                        漠然とした不安は、形がないうちが一番しんどい。「たぶん自分はこういうことかな」と一言でも置けると、頭の中のぐるぐるが止まります。友達の話を聞いていて、その人が抱えているものを言葉にして返したら、表情がふっとゆるんだ——という経験もありました。
                    </p>
                    <p>
                        そういう体験の延長で作ったのが、このサイトです。詳しくは
                        <Link href="/column/why-i-made-this" className="text-neon-blue hover:underline">
                            「私がこの診断を作った理由」
                        </Link>
                        に書いています。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        運営の方針
                    </h2>
                    <p>このサイトを続けるうえで、自分に課していることが3つあります。</p>
                    <p>
                        <strong>1. 優劣をつけない。</strong>
                        <br />
                        16のタイプに、良いも悪いもありません。会議を前に進める人も、みんなの声を拾う人も、どちらもその場に必要な役割です。「このタイプは優秀」「このタイプは向いていない」といった書き方は、記事でも診断結果でもしません。
                    </p>
                    <p>
                        <strong>2. 限界を隠さない。</strong>
                        <br />
                        この診断は学術的な性格検査ではありませんし、当たらないこともあります。それを伏せて「よく当たる」とだけ言うのは誠実ではないので、
                        <Link href="/methodology" className="text-neon-blue hover:underline">
                            設計の中身と限界
                        </Link>
                        を専用のページで公開しています。集計式まで書いてあるので、どこまで信じるかはご自身で判断してください。
                    </p>
                    <p>
                        <strong>3. 診断結果を売らない。</strong>
                        <br />
                        結果を見るために課金を求めたり、詳細を見るために広告視聴を強制したりはしません。診断はすべて無料で、登録も不要です。計算はお使いのブラウザ内で完結します。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        ご意見をお待ちしています
                    </h2>
                    <p>
                        設問も解説も、完成しているとは思っていません。「この記述は自分には当てはまらない」「こういう場面の話も読みたい」といったご意見は、そのまま改善の材料になります。
                    </p>
                    <p>
                        個人で運営しているためすべてにご返信はできませんが、いただいたものには目を通しています。
                        <Link href="/contact" className="text-neon-blue hover:underline">
                            お問い合わせフォーム
                        </Link>
                        からお気軽にどうぞ。
                    </p>

                    <div className="flex flex-col items-center gap-2 text-sm mt-8">
                        <Link href="/methodology" className="text-neon-blue hover:underline">
                            → この診断の作り方と、限界について
                        </Link>
                        <Link href="/column/why-i-made-this" className="text-neon-blue hover:underline">
                            → 私がこの診断を作った理由
                        </Link>
                        <Link href="/vision" className="text-neon-blue hover:underline">
                            → このサイトの考え方（Vision）
                        </Link>
                        <Link href="/privacy-policy" className="text-neon-blue hover:underline">
                            → プライバシーポリシー
                        </Link>
                    </div>
                </div>
            </article>

            <div className="mt-8 text-center bg-gray-50 border border-dashed border-gray-300 p-6 sm:p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">あなたのスタイルはどれ？</h3>
                <p className="text-sm text-gray-600 mb-6">全28問・約3分。登録は必要ありません。</p>
                <Link href="/diagnosis">
                    <Button size="lg" className="animate-pulse shadow-md border-2 border-black w-full sm:w-auto">
                        無料診断スタート
                    </Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
