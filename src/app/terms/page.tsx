import React from "react";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function TermsOfService() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <div className="bg-white/90 p-8 rounded-lg notebook-border shadow-lg max-w-3xl mx-auto w-full">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink mb-6 border-b-2 border-neon-pink pb-2 inline-block">
                    利用規約
                </h1>

                <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <p>
                        この利用規約（以下，「本規約」といいます。）は，CommunicationType16運営チーム（以下，「当チーム」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第1条（適用）
                        </h2>
                        <p>
                            本規約は，ユーザーと当チームとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第2条（禁止事項）
                        </h2>
                        <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                            <li>当チーム，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                            <li>本サービスによって得られた情報を商業的に利用する行為</li>
                            <li>当チームのサービスの運営を妨害するおそれのある行為</li>
                            <li>不正アクセスをし，またはこれを試みる行為</li>
                            <li>他のユーザーまたは第三者に不利益，損害，不快感を与える行為</li>
                            <li>その他，当チームが不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第3条（本サービスの提供の停止等）
                        </h2>
                        <p>
                            当チームは，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他，当チームが本サービスの提供が困難と判断した場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第4条（免責事項）
                        </h2>
                        <p>
                            当チームは，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br />
                            当チームは，本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第5条（利用規約の変更）
                        </h2>
                        <p>
                            当チームは，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            第6条（準拠法・裁判管轄）
                        </h2>
                        <p>
                            本規約の解釈にあたっては，日本法を準拠法とします。<br />
                            本サービスに関して紛争が生じた場合には，当チームの所在地を管轄する裁判所を専属的合意管轄とします。
                        </p>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button variant="secondary">トップに戻る</Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
