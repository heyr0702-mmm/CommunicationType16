import Link from "next/link";
import { Metadata } from "next";
import DiagnosisClient from "./DiagnosisClient";

export const metadata: Metadata = {
    title: "コミュニケーションタイプ診断（全28問・無料）",
    description:
        "全28問・約3分。Power(主導権)・Warmth(温度感)・Speed(テンポ)・Volume(存在感)の4軸から、あなたの会話スタイルを16タイプで判定します。登録不要・無料。",
    openGraph: {
        title: "コミュニケーションタイプ診断（全28問・無料）| 16コミュニケーションタイプ診断",
        description:
            "全28問・約3分。4軸からあなたの会話スタイルを16タイプで判定します。登録不要・無料。",
        type: "article",
    },
};

export default function DiagnosisPage() {
    return (
        <DiagnosisClient>
            <section className="mt-16 pt-8 border-t-2 border-dashed border-gray-300 space-y-5 text-gray-800 leading-relaxed font-medium text-sm">
                <h2 className="text-xl font-bold font-handwriting text-ink">この診断について</h2>

                <p>
                    この診断は、あなたが会話のときに無意識にとっている「スタイル（型）」を可視化するものです。性格の良し悪しや、コミュ力の高低を測るテストではありません。
                </p>

                <h3 className="text-base font-bold text-ink border-l-4 border-neon-blue pl-3 py-1 mt-6">
                    設問の構成
                </h3>
                <p>
                    全28問、所要時間はおよそ3分です。登録もメールアドレスも必要ありません。各設問には「No」から「Yes」まで5段階で答えます。深く考え込まず、
                    <strong>直感で反応したほうが結果は正確になります。</strong>
                    どちらとも言えない設問は、真ん中を選んで先に進んで大丈夫です。
                </p>
                <p>
                    28問は、4つの軸に7問ずつ割り当てられています。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>⚡ Power（主導権）</strong>
                        — 会話のハンドルを握るクセ。自分で決めて前に進めるD（主導）と、まず受け止めるR（受容）
                    </li>
                    <li>
                        <strong>❤️ Warmth（温度感）</strong>
                        — 言葉に乗せる感情の量。共感でつながるE（共感）と、筋道で整理するC（論理）
                    </li>
                    <li>
                        <strong>🚀 Speed（テンポ）</strong>
                        — 思いついてから口に出すまでの速さ。即レスのI（即興）と、噛みしめてから返すS（熟考）
                    </li>
                    <li>
                        <strong>🔊 Volume（存在感）</strong>
                        — 場の中でどれくらい自分を出すか。発信するX（表現大）と、聞き役に回るZ（聞き役）
                    </li>
                </ul>
                <p>
                    この4軸それぞれで、どちら寄りかを判定します。2×2×2×2で、結果は16タイプのいずれかになります。
                </p>

                <h3 className="text-base font-bold text-ink border-l-4 border-neon-pink pl-3 py-1 mt-6">
                    結果の見方
                </h3>
                <p>
                    診断が終わると、あなたのタイプ名（「親分」「オカン」「黒幕」など）と、4軸それぞれがどちらにどれくらい寄っているかのバーが表示されます。
                </p>
                <p>
                    大事なのは、
                    <strong>タイプ名よりもバーの傾き</strong>
                    です。ぴったり真ん中に近い軸は、相手や場面によって振れやすい軸ということ。「家族といるときと職場にいるときで、自分の喋り方がぜんぜん違う」と感じたことがある人は、その軸が中央付近にあることが多いです。
                </p>
                <p>
                    また、
                    <strong>16タイプに優劣はありません。</strong>
                    会議を前に進める人も、みんなの声を拾う人も、どちらもその場に必要な役割です。この診断は、あなたを分類して評価するためではなく、「自分はこういう喋り方をしているんだ」と気づくためのものです。
                </p>

                <h3 className="text-base font-bold text-ink border-l-4 border-neon-yellow pl-3 py-1 mt-6">
                    診断のあとにできること
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>結果ページから、自分のタイプの詳しい解説（あるある・すれ違いポイント・相性）が読めます</li>
                    <li>
                        <Link href="/compatibility" className="text-neon-blue hover:underline">
                            2人の相性診断
                        </Link>
                        で、友達・恋人・家族との組み合わせを確かめられます
                    </li>
                    <li>
                        <Link href="/types" className="text-neon-blue hover:underline">
                            16タイプ一覧
                        </Link>
                        で、周りの人がどのタイプかを探せます
                    </li>
                </ul>

                <h3 className="text-base font-bold text-ink border-l-4 border-neon-blue pl-3 py-1 mt-6">
                    ご注意
                </h3>
                <p className="text-gray-600">
                    この診断は学術的な性格検査ではなく、日常の会話を振り返るためのツールです。医学的・心理学的な診断や、採用選考・人事評価の判断材料として使うことは想定していません。結果の計算はすべてお使いのブラウザ内で行われ、当サイトが回答内容を会員情報として蓄積することはありません（アクセス解析の取り扱いは
                    <Link href="/privacy-policy" className="text-neon-blue hover:underline">
                        プライバシーポリシー
                    </Link>
                    をご覧ください）。
                </p>
                <p className="text-gray-600">
                    診断の設計の考え方については
                    <Link href="/about" className="text-neon-blue hover:underline">
                        About
                    </Link>
                    、この診断を作った背景については
                    <Link href="/vision" className="text-neon-blue hover:underline">
                        Vision
                    </Link>
                    をご覧ください。
                </p>
            </section>
        </DiagnosisClient>
    );
}
