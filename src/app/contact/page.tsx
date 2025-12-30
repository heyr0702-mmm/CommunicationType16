import React from "react";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "お問い合わせ | 16コミュニケーションタイプ診断",
    description: "16コミュニケーションタイプ診断へのお問い合わせページです。",
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
                        当サイトに関するお問い合わせは、以下のフォームよりお送りください。
                        <br />
                        通常3営業日以内にご返信いたします。
                    </p>

                    <form
                        action="https://formspree.io/f/placeholder"
                        method="POST"
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                                お名前
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-neon-blue focus:outline-none"
                                placeholder="山田 太郎"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-neon-blue focus:outline-none"
                                placeholder="example@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1">
                                件名
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-neon-blue focus:outline-none"
                                placeholder="お問い合わせの件名"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                                お問い合わせ内容
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-neon-blue focus:outline-none resize-none"
                                placeholder="お問い合わせ内容をご記入ください"
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black">
                                送信する
                            </Button>
                        </div>
                    </form>

                    <p className="text-xs text-gray-500 mt-4">
                        ※ お問い合わせ内容によっては、返信にお時間をいただく場合がございます。
                    </p>
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
