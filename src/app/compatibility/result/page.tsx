import { Metadata } from "next";
import CompatibilityResultView from "./CompatibilityResultView";

export const metadata: Metadata = {
    title: "相性診断の結果",
    description:
        "2人のコミュニケーションタイプの組み合わせから、会話の噛み合わせ方とすれ違いやすいポイントを表示します。",
    robots: {
        index: false,
        follow: true,
    },
};

export default function CompatibilityResultPage() {
    return <CompatibilityResultView />;
}
