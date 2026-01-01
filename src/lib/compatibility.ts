import { COMMUNICATION_TYPE_META } from './constants';
import { CommunicationTypeMeta } from './types';

// タイプコードから4軸の値を抽出
export function parseTypeCode(code: string): {
    power: 'D' | 'R';
    warmth: 'E' | 'C';
    speed: 'I' | 'S';
    volume: 'X' | 'Z';
} {
    return {
        power: code[0] as 'D' | 'R',
        warmth: code[1] as 'E' | 'C',
        speed: code[2] as 'I' | 'S',
        volume: code[3] as 'X' | 'Z',
    };
}

// 軸ごとの相性パターン
export type CompatibilityPattern = '共鳴' | 'やや似' | '中間' | 'やや違う' | '補完';

export interface AxisCompatibility {
    axis: 'power' | 'warmth' | 'speed' | 'volume';
    axisLabel: string;
    pattern: CompatibilityPattern;
    position: number; // 0(共鳴) ~ 4(補完)
    comment: string;
}

export interface CompatibilityResult {
    type1: CommunicationTypeMeta;
    type2: CommunicationTypeMeta;
    overallScore: number; // 0-100
    starRating: number; // 1-5
    catchCopy: string;
    axisDetails: AxisCompatibility[];
    conversationExample: ConversationLine[];
    goodPoints: string[];
    cautionPoints: CautionPoint[];
    adviceFor1: string;
    adviceFor2: string;
}

export interface ConversationLine {
    speaker: 1 | 2;
    emoji: string;
    text: string;
}

export interface CautionPoint {
    point: string;
    advice: string;
}

// 軸のラベル
const AXIS_LABELS = {
    power: '主導権バランス',
    warmth: '感情の温度',
    speed: '会話のテンポ',
    volume: '自己主張の強さ',
};

// 軸ごとのコメントテンプレート
const AXIS_COMMENTS = {
    power: {
        same: (label1: string, label2: string) => `${label1}も${label2}も似たスタンス。どっちがリードするか、最初だけ少し探り合うかも`,
        complement: (label1: string, label2: string) => `${label1}がグイグイ引っ張って、${label2}がついていく。自然と役割が決まるから、ケンカになりにくい◎`,
        middle: (label1: string, label2: string) => `リードしたい度が少し違う。時々「え、私が決めるの？」ってなるかも`,
    },
    warmth: {
        same: (label1: string, label2: string) => `感情の扱い方が似てる。気持ちの共有がスムーズにできる関係`,
        complement: (label1: string, label2: string) => `片方は「で、結論は？」タイプ、もう片方は「まず気持ち聞いて？」タイプ。ここだけ注意かも`,
        middle: (label1: string, label2: string) => `共感と論理のバランスが少し違う。お互いの「当たり前」がズレることも`,
    },
    speed: {
        same: (label1: string, label2: string) => `会話のテンポがぴったり合う。沈黙も気まずくならない相性`,
        complement: (label1: string, label2: string) => `片方の「即決！」と、もう片方の「ちょっと考える...」。うまくハマれば心地いいリズムに`,
        middle: (label1: string, label2: string) => `テンポ感が少し違う。「早くない？」「遅くない？」って思う瞬間があるかも`,
    },
    volume: {
        same: (label1: string, label2: string) => `自己主張の強さが似てる。言いたいことを言い合える関係`,
        complement: (label1: string, label2: string) => `片方がガンガン喋って、もう片方は聞き役。バランス良いけど、聞き役の意見も聞いてあげてね`,
        middle: (label1: string, label2: string) => `主張のスタイルがちょっと違う。「もっと言ってよ」「言いすぎ？」ってなることも`,
    },
};

// 相性を計算
export function calculateCompatibility(code1: string, code2: string): CompatibilityResult {
    const type1 = COMMUNICATION_TYPE_META.find(t => t.code === code1);
    const type2 = COMMUNICATION_TYPE_META.find(t => t.code === code2);

    if (!type1 || !type2) {
        throw new Error('Invalid type code');
    }

    const parsed1 = parseTypeCode(code1);
    const parsed2 = parseTypeCode(code2);

    // 各軸の相性を計算
    const axisDetails: AxisCompatibility[] = [];
    let totalScore = 0;

    // Power
    const powerSame = parsed1.power === parsed2.power;
    const powerDetail = calculateAxisCompatibility('power', powerSame, type1.label, type2.label);
    axisDetails.push(powerDetail);
    totalScore += powerSame ? 20 : 25; // 補完も良い

    // Warmth
    const warmthSame = parsed1.warmth === parsed2.warmth;
    const warmthDetail = calculateAxisCompatibility('warmth', warmthSame, type1.label, type2.label);
    axisDetails.push(warmthDetail);
    totalScore += warmthSame ? 25 : 15;

    // Speed
    const speedSame = parsed1.speed === parsed2.speed;
    const speedDetail = calculateAxisCompatibility('speed', speedSame, type1.label, type2.label);
    axisDetails.push(speedDetail);
    totalScore += speedSame ? 25 : 20;

    // Volume
    const volumeSame = parsed1.volume === parsed2.volume;
    const volumeDetail = calculateAxisCompatibility('volume', volumeSame, type1.label, type2.label);
    axisDetails.push(volumeDetail);
    totalScore += volumeSame ? 20 : 25;

    // 星評価
    const starRating = Math.min(5, Math.max(1, Math.round(totalScore / 20)));

    // キャッチコピー生成
    const catchCopy = generateCatchCopy(type1.label, type2.label, totalScore);

    // 会話例生成
    const conversationExample = generateConversation(type1, type2, parsed1, parsed2);

    // 噛み合わせポイント
    const goodPoints = generateGoodPoints(type1.label, type2.label, parsed1, parsed2);

    // 注意ポイント
    const cautionPoints = generateCautionPoints(type1.label, type2.label, parsed1, parsed2);

    // アドバイス
    const { advice1, advice2 } = generateAdvice(type1.label, type2.label, parsed1, parsed2);

    return {
        type1,
        type2,
        overallScore: totalScore,
        starRating,
        catchCopy,
        axisDetails,
        conversationExample,
        goodPoints,
        cautionPoints,
        adviceFor1: advice1,
        adviceFor2: advice2,
    };
}

function calculateAxisCompatibility(
    axis: 'power' | 'warmth' | 'speed' | 'volume',
    isSame: boolean,
    label1: string,
    label2: string
): AxisCompatibility {
    const pattern: CompatibilityPattern = isSame ? '共鳴' : '補完';
    const position = isSame ? 1 : 4;
    const comments = AXIS_COMMENTS[axis];
    const comment = isSame
        ? comments.same(label1, label2)
        : comments.complement(label1, label2);

    return {
        axis,
        axisLabel: AXIS_LABELS[axis],
        pattern,
        position,
        comment,
    };
}

function generateCatchCopy(label1: string, label2: string, score: number): string {
    if (score >= 90) return `最高の組み合わせ！息ぴったりなコンビ`;
    if (score >= 80) return `突っ走る人と、見守る人。息の合ったコンビ`;
    if (score >= 70) return `違いが刺激になる、成長できる関係`;
    if (score >= 60) return `お互いの良さを引き出せるかも`;
    return `化学反応が起きるかも？挑戦的な組み合わせ`;
}

function generateConversation(
    type1: CommunicationTypeMeta,
    type2: CommunicationTypeMeta,
    parsed1: ReturnType<typeof parseTypeCode>,
    parsed2: ReturnType<typeof parseTypeCode>
): ConversationLine[] {
    const emoji1 = parsed1.power === 'D' ? '👊' : '🌸';
    const emoji2 = parsed2.power === 'D' ? '👊' : '🌸';

    // 主導権の違いに基づいた会話例
    if (parsed1.power === 'D' && parsed2.power === 'R') {
        return [
            { speaker: 1, emoji: emoji1, text: `週末どこ行く？海か山かどっち？` },
            { speaker: 2, emoji: emoji2, text: `どっちもいいな〜...` },
            { speaker: 1, emoji: emoji1, text: `よし、海！決まり！朝8時ね！` },
            { speaker: 2, emoji: emoji2, text: `おっけ〜、お弁当持ってくね` },
            { speaker: 1, emoji: emoji1, text: `お、さすが！気が利く〜` },
        ];
    } else if (parsed1.power === 'R' && parsed2.power === 'D') {
        return [
            { speaker: 2, emoji: emoji2, text: `週末どこ行く？海か山かどっち？` },
            { speaker: 1, emoji: emoji1, text: `どっちもいいな〜...` },
            { speaker: 2, emoji: emoji2, text: `よし、海！決まり！朝8時ね！` },
            { speaker: 1, emoji: emoji1, text: `おっけ〜、お弁当持ってくね` },
            { speaker: 2, emoji: emoji2, text: `お、さすが！気が利く〜` },
        ];
    } else if (parsed1.power === 'D' && parsed2.power === 'D') {
        return [
            { speaker: 1, emoji: emoji1, text: `週末海行かない？` },
            { speaker: 2, emoji: emoji2, text: `えー、山の方がよくない？` },
            { speaker: 1, emoji: emoji1, text: `いやいや、絶対海でしょ！` },
            { speaker: 2, emoji: emoji2, text: `じゃあ今回海、次回山ね！` },
            { speaker: 1, emoji: emoji1, text: `おっけ、それでいこう！` },
        ];
    } else {
        return [
            { speaker: 1, emoji: emoji1, text: `週末どうする...？` },
            { speaker: 2, emoji: emoji2, text: `うーん、どっちでもいいかな...` },
            { speaker: 1, emoji: emoji1, text: `じゃあ、海...とか？` },
            { speaker: 2, emoji: emoji2, text: `いいね、海にしよっか` },
            { speaker: 1, emoji: emoji1, text: `うん、そうしよう〜` },
        ];
    }
}

function generateGoodPoints(
    label1: string,
    label2: string,
    parsed1: ReturnType<typeof parseTypeCode>,
    parsed2: ReturnType<typeof parseTypeCode>
): string[] {
    const points: string[] = [];

    if (parsed1.power !== parsed2.power) {
        points.push(`役割分担がハッキリしてて迷わない`);
    } else {
        points.push(`対等な関係で意見を言い合える`);
    }

    if (parsed1.warmth === parsed2.warmth) {
        points.push(`感情の共有がスムーズ`);
    } else {
        points.push(`論理と感情、両方の視点が手に入る`);
    }

    if (parsed1.speed === parsed2.speed) {
        points.push(`会話のテンポが心地いい`);
    } else {
        points.push(`お互いのペースを尊重できれば最強`);
    }

    return points.slice(0, 3);
}

function generateCautionPoints(
    label1: string,
    label2: string,
    parsed1: ReturnType<typeof parseTypeCode>,
    parsed2: ReturnType<typeof parseTypeCode>
): CautionPoint[] {
    const points: CautionPoint[] = [];

    if (parsed1.power === 'D' && parsed2.power === 'R') {
        points.push({
            point: `${label1}が急かしがち`,
            advice: `${label2}には考える時間が必要。待ってあげて`,
        });
        points.push({
            point: `${label2}の沈黙`,
            advice: `黙ってても怒ってない。考え中なだけ。焦らないで`,
        });
    } else if (parsed1.power === 'R' && parsed2.power === 'D') {
        points.push({
            point: `${label2}が急かしがち`,
            advice: `${label1}には考える時間が必要。待ってあげて`,
        });
    } else if (parsed1.power === 'D' && parsed2.power === 'D') {
        points.push({
            point: `主導権争いになりがち`,
            advice: `交互にリードを取る約束をしておくとスムーズ`,
        });
    }

    if (parsed1.warmth !== parsed2.warmth) {
        points.push({
            point: `共感のズレ`,
            advice: `「まず気持ちを聞く」を意識してみて`,
        });
    }

    if (parsed1.volume === 'X' && parsed2.volume === 'Z') {
        points.push({
            point: `${label2}の意見が埋もれがち`,
            advice: `たまには「どう思う？」って聞いてみて`,
        });
    }

    return points.slice(0, 3);
}

function generateAdvice(
    label1: string,
    label2: string,
    parsed1: ReturnType<typeof parseTypeCode>,
    parsed2: ReturnType<typeof parseTypeCode>
): { advice1: string; advice2: string } {
    let advice1 = '';
    let advice2 = '';

    if (parsed1.power === 'D') {
        advice1 = `${label2}はあなたについていきたいって思ってる。でも、たまには待ってあげて。「一緒に決める」も悪くないよ。`;
    } else {
        advice1 = `遠慮しなくていいから！${label2}はあなたの意見、聞きたがってるよ。思ったこと、言ってみよう。`;
    }

    if (parsed2.power === 'D') {
        advice2 = `${label1}はあなたについていきたいって思ってる。でも、たまには待ってあげて。「一緒に決める」も悪くないよ。`;
    } else {
        advice2 = `遠慮しなくていいから！${label1}はあなたの意見、聞きたがってるよ。思ったこと、言ってみよう。`;
    }

    return { advice1, advice2 };
}

// タイプを取得するヘルパー
export function getTypeByCode(code: string): CommunicationTypeMeta | undefined {
    return COMMUNICATION_TYPE_META.find(t => t.code === code);
}
