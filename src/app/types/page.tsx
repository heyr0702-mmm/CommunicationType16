import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { TypeCard } from "@/components/ui/TypeCard";

export default function TypeList() {
    return (
        <NotebookLayout className="flex flex-col space-y-8">
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting">タイプ一覧</h1>
                <Link href="/">
                    <Button variant="secondary" size="sm">TOP</Button>
                </Link>
            </div>

            <div className="text-center mb-8">
                <p className="text-sm font-medium text-gray-600">
                    全16種類のコミュニケーションタイプを紹介します。<br />
                    あなたのタイプは見つかりましたか？
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COMMUNICATION_TYPE_META.map((type) => (
                    <Link key={type.code} href={`/result?code=${type.code}`} className="block hover:no-underline">
                        <TypeCard
                            code={type.code}
                            label={type.label}
                            catchCopy={type.catchCopy}
                        />
                    </Link>
                ))}
            </div>

            <div className="pt-8 text-center border-t border-dashed border-gray-300">
                <Link href="/diagnosis">
                    <Button size="lg" className="animate-pulse shadow-xl border-2 border-black bg-black text-white hover:bg-gray-800">
                        あなたも診断してみる
                    </Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
