import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { RESULT_CONTENTS } from "@/data/contents";
import { CharacterProfile } from "@/components/character/CharacterProfile";
import { DetailedReport } from "@/components/character/DetailedReport";
import { ShareButtons } from "@/components/character/ShareButtons";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
// import { AdUnit } from "@/components/AdUnit";

export const dynamicParams = false;

interface Props {
    params: { code: string };
}

// 🟢 Generate Static Paths for all 16 types (SSG)
export async function generateStaticParams() {
    return COMMUNICATION_TYPE_META.map((type) => ({
        code: type.code,
    }));
}

// 🟢 Generate Metadata & JSON-LD
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const char = COMMUNICATION_TYPE_META.find((c) => c.code === params.code.toUpperCase());
    if (!char) return {};

    const content = RESULT_CONTENTS[char.code] || RESULT_CONTENTS["DEIX"];
    const title = `${char.code}: ${char.label} | 16コミュニケーションタイプ詳細図鑑`;
    const description = `${char.label} (${char.code}) の性格特徴、会話スタイル、相性診断の結果を解説。キャッチコピー: ${content.free.catchCopy}`;
    const url = `https://communicationtype16.vercel.app/types/${char.code}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            images: [`https://vibetype16.vercel.app/images/characters/${char.code}.png`],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`https://vibetype16.vercel.app/images/characters/${char.code}.png`],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default function TypeDetailPage({ params }: Props) {
    const code = params.code.toUpperCase();
    const char = COMMUNICATION_TYPE_META.find((c) => c.code === code);
    const content = RESULT_CONTENTS[code];

    if (!char || !content) {
        notFound();
    }

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${char.label} (${char.code}) の性格分析`,
        image: `https://vibetype16.vercel.app/images/characters/${char.code}.png`,
        author: {
            '@type': 'Organization',
            name: 'VibeType16',
            url: 'https://communicationtype16.vercel.app'
        },
        description: content.free.catchCopy,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://communicationtype16.vercel.app/types/${code}`
        }
    };

    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Character Profile (No Graph) */}
            <CharacterProfile character={char} content={content}>
                {/* No graph child for static pages */}
            </CharacterProfile>

            {/* Detailed Report (Always Expanded) */}
            <div className="max-w-2xl mx-auto w-full">
                <div className="bg-gray-100 p-4 rounded-t-lg border-2 border-b-0 border-dashed border-gray-400 text-center">
                    <h2 className="text-lg font-bold text-gray-700">👇 詳細レポート (Unlocked)</h2>
                </div>
                <div className="pt-0 p-4 border-2 border-t-0 border-dashed border-gray-400 rounded-b-lg bg-gray-50/50">
                    <DetailedReport content={content} />
                </div>
            </div>

            {/* Share Buttons */}
            <ShareButtons character={char} content={content} />

            {/* Navigation / Call to Action */}
            <div className="max-w-2xl mx-auto w-full text-center space-y-6 mt-12 bg-white/90 p-8 rounded-lg notebook-border">
                <h3 className="text-xl font-bold font-handwriting text-ink">あなたのタイプは？</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    16のタイプから、あなたのコミュニケーションスタイルを診断しよう！
                </p>
                <Link href="/diagnosis">
                    <Button size="lg" className="w-full text-lg py-6 animate-pulse shadow-xl border-2 border-black bg-black text-white hover:bg-gray-800">
                        診断スタート
                    </Button>
                </Link>
                <div className="pt-2">
                    <Link href="/types">
                        <Button variant="ghost" className="text-gray-500">← タイプ一覧に戻る</Button>
                    </Link>
                </div>
            </div>

            {/* Footer Ad */}
            {/* <AdUnit slot="1122334455" /> */}
        </NotebookLayout>
    );
}
