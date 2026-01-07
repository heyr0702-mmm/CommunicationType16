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

export default function TypeDetailPage({ params }: Props) {
    const code = params.code.toUpperCase();
    return <TypeDetailClient code={code} />;
}
