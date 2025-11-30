import { ResultContent } from "@/types/content";

export const RESULT_CONTENTS: Record<string, ResultContent> = {
    // 🟢 DEIX (切り込み隊長)
    DEIX: {
        code: "DEIX",
        free: {
            catchCopy: "沈黙は敵。誰よりも早く口火を切る、特攻のトップバッター。",
            hashTags: ["#陽キャの王", "#メンタル無敵艦隊", "#歩くパワースポット"],
            summary: "考えるより先に「とりあえず何か話そう」が出てくる人。沈黙が続くとソワソワしてしまい、最初のひと言で場の空気を決めに行きがち。",
            basicSpecs: [
                {
                    title: "いつもの喋りかた",
                    description: "雑談が始まるとき、あなたの頭の中ではすでにいくつかの話題がスタンバイされています。「誰か話さないかな」と待つより、自分が先に口火を切った方が楽だと感じることが多いはず。沈黙が続くと、空気が重くなっていく感じが嫌で、つい「そういえばさ」と新しい話題を放り込みます。"
                }
            ],
            reputation: {
                title: "周りからの見えかた",
                items: [
                    "「とりあえずこの人がいれば場が止まらない」と思われている。",
                    "初対面同士が多い飲み会で、なぜか勝手にMC扱いされがち。",
                    "一部の人からは「元気ない日、ちゃんと休んでる？」と心配される。"
                ]
            },
            aruaru: {
                title: "#切り込み隊長あるある",
                items: [
                    "無言のエレベーターやタクシーが苦手で、謎の天気トークを始めがち。",
                    "「今日は聞き役に回ろう」と決めていたのに、気づいたら一番喋っている。",
                    "グダグダした会議を見ると、「誰か決めてよ」ではなく「じゃあ私が進行するわ」と言ってしまう。"
                ]
            },
            comfortZone: {
                title: "居心地がいい場面",
                items: [
                    "初対面同士が多くて、最初ちょっと空気が固い飲み会や合コン。",
                    "話題が次々変わっていくテンポの早い雑談。",
                    "気心知れたメンバーでの“くだらない話メイン”の集まり。"
                ]
            }
        },
        unlocked: {
            communicationGaps: {
                title: "会話がすれ違いやすいポイント",
                items: [
                    {
                        pattern: "相手が話し始めたタイミングで、別の話題をかぶせてしまう。",
                        advice: "相手は「話聞いてもらえなかったかも」と感じやすいので注意。"
                    },
                    {
                        pattern: "沈黙が怖くて、相手の考える“間”を埋めてしまう。",
                        advice: "本当は相手がゆっくり言葉を探していただけ、ということもあります。"
                    }
                ]
            },
            compatibility: {
                best: {
                    code: "REIZ",
                    reason: "あなたが話題を切り出し、オカン（REIZ）が「うんうん」と受け止めてくれる形になりやすい。"
                },
                worst: {
                    code: "DCSZ",
                    reason: "あなたのノリや回数多めの発言に対して、スパルタコーチ（DCSZ）が「で、結局どうしたいの？」と現実的な一言を返してくることも。"
                }
            }
        }
    },

    // 🟡 Placeholders for other types
    DEIZ: createEmptyContent("DEIZ"),
    DESX: createEmptyContent("DESX"),
    DESZ: createEmptyContent("DESZ"),
    DCIX: createEmptyContent("DCIX"),
    DCIZ: createEmptyContent("DCIZ"),
    DCSX: createEmptyContent("DCSX"),
    DCSZ: createEmptyContent("DCSZ"),
    REIX: createEmptyContent("REIX"),
    REIZ: createEmptyContent("REIZ"),
    RESX: createEmptyContent("RESX"),
    RESZ: createEmptyContent("RESZ"),
    RCIX: createEmptyContent("RCIX"),
    RCIZ: createEmptyContent("RCIZ"),
    RCSX: createEmptyContent("RCSX"),
    RCSZ: createEmptyContent("RCSZ"),
};

function createEmptyContent(code: string): ResultContent {
    return {
        code,
        free: {
            catchCopy: "",
            hashTags: [],
            summary: "",
            basicSpecs: [],
            reputation: { title: "", items: [] },
            aruaru: { title: "", items: [] },
            comfortZone: { title: "", items: [] },
        },
        unlocked: {
            communicationGaps: { title: "", items: [] },
            compatibility: {
                best: { code: "", reason: "" },
                worst: { code: "", reason: "" },
            },
        },
    };
}
