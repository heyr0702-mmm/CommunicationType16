import { Metadata } from "next";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { TypeDetailClient } from "./TypeDetailClient";

interface Props {
    params: { code: string };
}

export async function generateStaticParams() {
    return COMMUNICATION_TYPE_META.map((type) => ({
        code: type.code,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const code = params.code.toUpperCase();
    const type = COMMUNICATION_TYPE_META.find((t) => t.code === code);
    if (!type) return {};
    // layout.tsx の title.template が「| サイト名」を付けるので、ここでは付けない（二重表記の防止）
    const title = `${type.label}（${code}）`;
    // OGP/Twitter にはテンプレートが効かないため、こちらはサイト名込みの完全形を使う
    const fullTitle = `${title} | 16コミュニケーションタイプ診断`;
    const description = type.catchCopy;
    const ogImage = `/images/ogp/${code}.png`;
    const url = `https://communicationtype16.com/types/${code}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: fullTitle,
            description,
            url,
            type: "article",
            images: [{ url: ogImage, width: 1200, height: 630, alt: `${type.label}（${code}）のコミュニケーションタイプ` }],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [ogImage],
        },
    };
}

export default function TypeDetailPage({ params }: Props) {
    const code = params.code.toUpperCase();
    return <TypeDetailClient code={code} />;
}
