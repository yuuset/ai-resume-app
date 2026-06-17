"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [skills, setSkills] = useState("");
  const [project, setProject] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

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
    setCopied(false);
  }

  async function copyResult() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
  }

  function fillExample() {
    setName("龔孟謙");
    setMajor("國立勤益科技大學 智慧自動化工程系");
    setSkills("Python、React、Next.js、Oracle Cloud、Nginx、GitHub、Railway");
    setProject("AEM 電解槽最佳化互動展示平台");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-900">
      <div className="pointer-events-none fixed left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <nav className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl text-white shadow-lg backdrop-blur">
              AI
            </div>
            <div>
              <p className="text-sm text-slate-300">Next.js + GitHub + Railway</p>
              <h1 className="text-lg font-bold text-white">AI Resume App</h1>
            </div>
          </div>

          <a
            href="https://github.com/yuuset/ai-resume-app"
            target="_blank"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              期末專案｜AI 履歷產生器
            </div>

            <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
              用幾個欄位，
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                快速產生履歷草稿
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              輸入姓名、科系、專業技能與專題經驗後，系統會自動整理成一份可複製、可修改的履歷文字，
              適合用於課堂展示、求職準備與作品集整理。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
                <p className="text-3xl font-black">01</p>
                <p className="mt-2 text-sm text-slate-300">輸入資料</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
                <p className="text-3xl font-black">02</p>
                <p className="mt-2 text-sm text-slate-300">自動生成</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
                <p className="text-3xl font-black">03</p>
                <p className="mt-2 text-sm text-slate-300">複製使用</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Resume Generator</p>
                <h3 className="text-2xl font-black text-slate-900">輸入資料</h3>
              </div>

              <button
                onClick={fillExample}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
              >
                填入範例
              </button>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">姓名</span>
                <input
                  className="rounded-2xl border border-slate-300 bg-white p-4 text-black placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="例如：王勝偉"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">科系 / 學校</span>
                <input
                  className="rounded-2xl border border-slate-300 bg-white p-4 text-black placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="例如：智慧自動化工程系"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">專業技能</span>
                <textarea
                  className="min-h-24 rounded-2xl border border-slate-300 bg-white p-4 text-black placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="例如：Python、React、Oracle Cloud、Nginx"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">專題作品</span>
                <input
                  className="rounded-2xl border border-slate-300 bg-white p-4 text-black placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="例如：智慧CNC纏屑監控與自動除屑整合系統"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </label>

              <button
                onClick={generateResume}
                className="mt-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 font-black text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.01] hover:shadow-xl"
              >
                產生履歷
              </button>
            </div>
          </div>
        </section>

        {result && (
          <section className="mt-10 rounded-[2rem] border border-white/20 bg-white p-8 shadow-2xl">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-blue-600">Generated Resume</p>
                <h3 className="text-3xl font-black text-slate-900">產生結果</h3>
              </div>

              <button
                onClick={copyResult}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                {copied ? "已複製" : "複製履歷內容"}
              </button>
            </div>

            <pre className="whitespace-pre-wrap rounded-3xl border border-slate-200 bg-slate-50 p-6 leading-8 text-slate-800">
              {result}
            </pre>
          </section>
        )}

        <footer className="mt-12 text-center text-sm text-slate-400">
          © 2026 AI Resume App｜Designed with Next.js, Tailwind CSS, GitHub and Railway
        </footer>
      </div>
    </main>
  );
}