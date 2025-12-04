"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

type Props = {
    pId: string;
};

export const GoogleAdsense = ({ pId }: Props) => {
    const pathname = usePathname();

    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    // Only load AdSense on the result page to avoid policy violations on low-content pages
    if (!pathname?.startsWith("/result")) {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};
