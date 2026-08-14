import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/remote-text-warmth" },
    title: "リモート・テキストで冷たく見えない伝え方 — 声と表情が消えると何が起きるか",
    description: "「あの人のチャット、なんか冷たい」と思われがち、あるいは思ってしまう。それは性格ではなく、テキストでWarmth(温度感)の信号が消えてしまうからです。E・C別の対処法を紹介します。",
};

export default function RemoteTextWarmthArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">💬</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        リモート・テキストで冷たく見えない伝え方<br/>声と表情が消えると何が起きるか
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        Slackで送った「了解です。」に、なぜか既読スルーで返ってくる。逆に、自分が受け取った一文だけの返信に、「怒ってるのかな」と数分悩んだことはないでしょうか。
                    </p>
                    <p>
                        対面なら数秒で終わる確認が、テキストだと妙に緊張する。句点ひとつ、絵文字の有無で、相手の機嫌を推理するはめになる。これは、あなたの読解力の問題でも、相手の性格の問題でもありません。<strong className="text-neon-pink">テキストという場所では、Warmth(温度感)を伝える回路の半分が、そもそも切れている</strong>んです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        対面の会話は、実は&quot;多チャンネル&quot;だった
                    </h2>
                    <p>
                        対面の会話には、言葉以外にたくさんの信号が乗っています。声のトーン、間の取り方、うなずき、口角の上がり具合。これらが全部まとめて、「言葉の温度」を運んでいました。
                    </p>
                    <p>
                        テキストは、この多チャンネルの中から<strong>文字だけ</strong>を取り出したものです。同じ「了解です」でも、対面なら笑顔とうなずきがセットで届く。テキストだと、文字だけが単独で届く。中身は同じなのに、届く温度がまったく違うんです。<strong>これは受け手の誤解ではなく、送り手が意図していなかった&quot;欠落&quot;</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Eの人が損をしやすい理由
                    </h2>
                    <p>
                        <strong>共感型(E)</strong>の人は、普段は表情や相槌でWarmthを無意識に足しています。だから、対面ではまったく冷たく見えない人でも、テキストになった瞬間、その&quot;足し算&quot;の道具を失います。急いで打った「了解です」は、Eの人が思っているより何倍も素っ気なく届いてしまう。本人はいつも通りのつもりでも、受け手には「今日、機嫌悪い?」と映ることさえあります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Cの人が損をしやすい理由
                    </h2>
                    <p>
                        <strong>論理型(C)</strong>の人は、もともと結論から簡潔に話すクセがあります。対面なら、それでも声のトーンや姿勢で「攻撃的な意図はない」ことが伝わっていました。でもテキストではその補正がなくなり、簡潔さが<strong>そのまま冷たさ</strong>として読まれてしまいます。Cの人にとっては、いつも通り効率よく答えただけなのに、相手には「怒ってる?」「面倒くさがってる?」と受け取られる。これはCの落ち度ではなく、<strong>テキストという媒体が持つ構造的なクセ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        温度を&quot;わざと&quot;足す、という発想
                    </h2>
                    <p>
                        対処法はシンプルです。対面では自然に出ていた温度を、テキストでは<strong>意識的に足す</strong>。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">Eの人へ</strong>
                            <p className="text-sm">急いでいても、最後にひとこと足す。「了解です！」の「！」ひとつ、絵文字ひとつで、失われた温度はかなり戻ります。無理に感情を演じる必要はありません。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">Cの人へ</strong>
                            <p className="text-sm">結論の前か後に、ワンクッション置く。「承知しました。ありがとうございます」のひとことで十分です。結論の速さはそのままで構いません。</p>
                        </div>
                    </div>
                    <p>
                        どちらも、キャラクターを変える話ではありません。<strong>対面なら勝手に足されていた温度を、テキストでは自分の手で足し直すだけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        冷たいのではなく、回路が足りていないだけ
                    </h2>
                    <p>
                        テキストで誰かを「冷たい人」と判断する前に、思い出してみてください。あなたが見ているのは、その人の性格そのものではなく、<strong>声とうなずきが抜け落ちた後の、言葉だけの断片</strong>です。
                    </p>
                    <p>
                        相手が本当はどんな温度で話しているか。それは、直接会って話せば、たいてい一瞬で分かります。テキストの向こう側にいるのは、いつもあなたが知っている、その人のままです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはE寄り、それともC寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        テキストでの伝わり方も、自分のWarmthを知ると想像しやすくなります。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
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
