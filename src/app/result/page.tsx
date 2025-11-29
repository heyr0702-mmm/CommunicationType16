"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { Character, AxisResult } from "@/lib/types";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<Character | null>(null);
    const [axisResults, setAxisResults] = useState<AxisResult[]>([]);

    useEffect(() => {
        const data = searchParams.get("data");
        if (!data) {
            router.push("/");
            return;
        }

        try {
            const answers: Answers = JSON.parse(decodeURIComponent(data));
            const results = calculateScores(answers);
            const char = determineCharacter(results);

            setAxisResults(results);
            setCharacter(char);
        </Suspense >
    );
}
