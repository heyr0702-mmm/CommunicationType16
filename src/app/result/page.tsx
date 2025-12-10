
import { Suspense } from "react";
import { Metadata } from "next";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { ResultView } from "./ResultView";

interface Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const data = searchParams.data;
    let characterImage = "https://vibetype16.vercel.app/images/ogp-default.png"; // Fallback
    let title = "16コミュニケーションタイプ診断";
    let description = "あなたの会話・コミュニケーションスタイルを16タイプで診断します。";

    if (typeof data === "string") {
        try {
            const answers: Answers = JSON.parse(decodeURIComponent(data));
            const results = calculateScores(answers);
            const char = determineCharacter(results);

            // Use the character image for OGP
            characterImage = `https://vibetype16.vercel.app/images/characters/${char.code}.png`;
            title = `私のコミュタイプは【${char.label}】でした！ | 16コミュニケーションタイプ診断`;
            description = char.catchCopy || description;

        } catch (e) {
            console.error("Metadata generation error", e);
        }
    }

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: characterImage,
                    width: 1200,
                    height: 1200, // Assuming square images
                    alt: title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [characterImage],
        },
    };
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ResultView />
        </Suspense>
    );
}
