import React from "react";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
    alternates: { canonical: "/contact" },
    title: "お問い合わせ",
    description: "16コミュニケーションタイプ診断へのお問い合わせページです。",
    openGraph: {
        title: "お問い合わせ | 16コミュニケーションタイプ診断",
        description: "16コミュニケーションタイプ診断へのお問い合わせページです。",
    },
};

export default function ContactPage() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <div className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg max-w-2xl mx-auto w-full">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink mb-6 border-b-2 border-neon-pink pb-2 inline-block">
                    お問い合わせ
                </h1>

                <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <p>
                        当サイトに関するお問い合わせは、下のフォームよりお送りください。個人で運営している小さなサイトですが、いただいたご意見にはすべて目を通しています。
                    </p>

                    <h2 className="text-lg font-bold text-ink border-l-4 border-neon-blue pl-3 py-1 mt-6">
                        こんなご連絡をお待ちしています
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>診断結果や解説へのご意見</strong>
                            — 「この記述は自分には当てはまらない」「こういう場面の話も読みたい」など。設問や解説文の改善に使わせていただきます。
                        </li>
                        <li>
                            <strong>不具合のご報告</strong>
                            — 診断が途中で進まない、結果が表示されない、表示が崩れているなど。お使いの端末とブラウザを添えていただけると助かります。
                        </li>
                        <li>
                            <strong>掲載内容についてのお問い合わせ</strong>
                            — 記事の引用、取材、その他サイトの内容に関するご連絡。
                        </li>
                        <li>
                            <strong>プライバシーに関するご請求</strong>
                            — 個人情報の開示・訂正・削除のご依頼は、こちらのフォームからお申し付けください。詳細は
                            <Link href="/privacy-policy" className="text-neon-blue hover:underline">
                                プライバシーポリシー
                            </Link>
                            に記載しています。
                        </li>
                    </ul>

                    <h2 className="text-lg font-bold text-ink border-l-4 border-neon-pink pl-3 py-1 mt-6">
                        お返事について
                    </h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
                        <p className="text-yellow-800">
                            ⚠️ 個人で運営しているため、すべてのお問い合わせにご返信できない場合がございます。あらかじめご了承ください。不具合のご報告とプライバシーに関するご請求は優先して対応いたします。
                        </p>
                    </div>

                    <h2 className="text-lg font-bold text-ink border-l-4 border-neon-yellow pl-3 py-1 mt-6">
                        お問い合わせフォーム
                    </h2>
                    <p className="text-sm text-gray-600">
                        フォームが表示されない場合は、ブラウザの拡張機能やプライバシー設定でGoogleフォームの読み込みがブロックされている可能性があります。その場合は、下のボタンから別タブで直接開いてください。
                    </p>

                    {/* Google Forms Embed */}
                    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdvbVGUHky1C9No0LfwcINnAZE8X3HXIr48KF9Op2D_ZgsC0g/viewform?embedded=true"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            className="w-full"
                            title="お問い合わせフォーム"
                        >
                            読み込んでいます…
                        </iframe>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdvbVGUHky1C9No0LfwcINnAZE8X3HXIr48KF9Op2D_ZgsC0g/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-blue hover:underline text-sm"
                        >
                            → フォームを別タブで開く
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/">
                        <Button variant="secondary">トップに戻る</Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}

