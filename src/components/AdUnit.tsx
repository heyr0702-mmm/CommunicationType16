import React from "react";

type Props = {
    slot?: string;
    format?: "auto" | "fluid" | "rectangle";
    responsive?: boolean;
};

export const AdUnit = ({ slot = "1234567890", format = "auto", responsive = true }: Props) => {
    // 審査対応: プレースホルダーのIDがあると悪影響になる可能性があるため、手動広告ユニットは非表示にします。
    // Auto Ads (自動広告) がページ全体で有効になるようにします。
    return null;
};
