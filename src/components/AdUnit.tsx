import React from "react";

type Props = {
    slot?: string;
    format?: "auto" | "fluid" | "rectangle";
    responsive?: boolean;
};

export const AdUnit = ({ slot = "1234567890", format = "auto", responsive = true }: Props) => {
    if (process.env.NODE_ENV !== "production") {
        return (
            <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 p-4 text-center my-4">
                <p className="text-xs text-gray-500 font-bold mb-1">スポンサーリンク</p>
                <div className="h-24 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                    AdSense Placeholder ({format})
                </div>
            </div>
        );
    }

    return (
        <div className="w-full my-4 text-center">
            <p className="text-xs text-gray-500 font-bold mb-1 text-left">スポンサーリンク</p>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8802783650388237"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? "true" : "false"}
            />
        </div>
    );
};
