"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [skills, setSkills] = useState("");
  const [project, setProject] = useState("");
  const [result, setResult] = useState("");

  function generateResume() {
    const resume = `【個人簡介】
我叫 ${name || "未填姓名"}，目前就讀於 ${major || "相關科系"}。我對人工智慧、前端開發、雲端部署與專題實作具有高度興趣，並具備持續學習與解決問題的能力。

【專業技能】
我具備 ${skills || "程式設計、網頁開發、資料整理"} 等技能，能夠將課堂所學應用於實際專案中。

【專題經驗】
我曾參與或製作「${project || "AI 應用系統"}」相關專題，過程中學習到系統設計、資料處理、使用者介面設計與問題除錯能力。

【未來目標】
未來希望持續精進 AI 應用、前端開發與雲端部署能力，成為能夠整合軟體、硬體與實際應用的工程人才。`;

    setResult(resume);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white shadow-lg">
          <h1 className="text-4xl font-bold">AI 履歷產生器</h1>
          <p className="mt-4 text-slate-300">
            輸入基本資料後，系統會自動產生一份簡單履歷草稿。
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">輸入資料</h2>

          <div className="grid gap-4">
            <input
              className="rounded-xl border border-slate-300 p-3 text-black placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="姓名，例如：王勝偉"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="rounded-xl border border-slate-300 p-3 text-black placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="科系，例如：智慧自動化工程系"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />

            <input
              className="rounded-xl border border-slate-300 p-3 text-black placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="技能，例如：Python、React、Oracle Cloud、Nginx"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <input
              className="rounded-xl border border-slate-300 p-3 text-black placeholder:text-slate-400 outline-none focus:border-blue-500"
              placeholder="專題，例如：智慧CNC纏屑監控與自動除屑整合系統"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />

            <button
              onClick={generateResume}
              className="rounded-xl bg-blue-600 p-3 font-bold text-white transition hover:bg-blue-700"
            >
              產生履歷
            </button>
          </div>
        </section>

        {result && (
          <section className="mt-8 rounded-3xl bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              產生結果
            </h2>
            <pre className="whitespace-pre-wrap rounded-2xl bg-slate-100 p-5 leading-8 text-slate-800">
              {result}
            </pre>
          </section>
        )}

        <footer className="mt-10 text-center text-sm text-slate-500">
          © 2026 AI Resume App｜Next.js + GitHub + Railway
        </footer>
      </div>
    </main>
  );
}