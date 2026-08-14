export type ResultContent = {
    code: string; // DEIXなどの4文字コード

    // 🟢 第1層：無料エリア（Free Zone）
    free: {
        catchCopy: string; // ヘッダー用コピー
        hashTags: string[]; // 例: ["#陽キャの王", "#メンタル無敵"]
        summary: string; // 2~3行の要約

        // 基本スペック（いつもの喋りかた）
        basicSpecs: {
            title: string;
            description: string;
        }[];

        // 周りからの見え方
        reputation: {
            title: string;
            items: string[];
        };

        // #あるある
        aruaru: {
            title: string;
            items: string[];
        };

        // 居心地がいい場面
        comfortZone: {
            title: string;
            items: string[];
        };

        // タイプ固有の掘り下げ（見出しもタイプごとに変える。共通テンプレートに乗せない）
        signature?: {
            title: string;
            body: string;
        }[];
    };

    // 🟡 第2層：詳細エリア（審査用アコーディオン / 将来は動画リワード）
    unlocked: {
        // 会話がすれ違いやすいポイント（弱点・バグ）
        communicationGaps: {
            title: string;
            items: {
                pattern: string;
                advice: string;
            }[];
        };

        // 相性のくわしい話
        compatibility: {
            best: {
                code: string;
                reason: string;
            };
            worst: {
                code: string;
                reason: string;
            };
        };
    };
};
