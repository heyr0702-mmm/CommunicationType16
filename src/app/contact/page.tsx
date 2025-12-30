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
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
                        <p className="text-yellow-800">
                            ⚠️ 少人数で運営しているため、すべてのお問い合わせにご返信できない場合がございます。ご了承ください。
                        </p>
                    </div>

                    {/* Google Forms Embed - Replace YOUR_FORM_ID with actual form ID */}
                    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
                        <iframe
                            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            className="w-full"
                        >
                            読み込んでいます…
                        </iframe>
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

