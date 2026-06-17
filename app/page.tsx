"use client";

import { useState } from "react";

type Page = "home" | "profile" | "skills" | "project";

export default function Home() {
  const [page, setPage] = useState<Page>("home");

  const navButtonClass = (target: Page) =>
    page === target
      ? "rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow"
      : "rounded-full border border-white/30 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/10";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        {/* 導覽列 */}
        <nav className="mb-10 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-cyan-200">Resume Website</p>
            <h1 className="text-2xl font-black">王勝偉｜個人履歷網站</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => setPage("home")} className={navButtonClass("home")}>
              首頁
            </button>
            <button onClick={() => setPage("profile")} className={navButtonClass("profile")}>
              個人資料
            </button>
            <button onClick={() => setPage("skills")} className={navButtonClass("skills")}>
              專長能力
            </button>
            <button onClick={() => setPage("project")} className={navButtonClass("project")}>
              專題介紹
            </button>
          </div>
        </nav>

        {/* 首頁 */}
        {page === "home" && (
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur">
              <p className="mb-4 inline-block rounded-full bg-cyan-400/20 px-4 py-2 text-sm font-bold text-cyan-100">
                智慧自動化工程系｜專題成果展示
              </p>

              <h2 className="text-5xl font-black leading-tight md:text-6xl">
                王勝偉
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  個人履歷網站
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                我目前就讀於智慧自動化工程系，具備 Python、YOLO 影像辨識與網頁設計能力。
                本網站用於展示個人基本資料、專業技能與專題作品。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setPage("profile")}
                  className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-black text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
                >
                  查看個人資料
                </button>

                <button
                  onClick={() => setPage("project")}
                  className="rounded-2xl border border-white/30 px-6 py-3 font-black text-white transition hover:bg-white/10"
                >
                  查看專題作品
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
              <p className="text-sm font-bold text-blue-600">Personal Card</p>
              <h3 className="mt-2 text-3xl font-black">王勝偉</h3>
              <p className="mt-2 text-slate-600">智慧自動化工程系</p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm font-bold text-slate-500">專長</p>
                  <p className="mt-1 text-lg font-bold">Python、YOLO、網頁設計</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm font-bold text-slate-500">專題</p>
                  <p className="mt-1 text-lg font-bold">
                    智慧 CNC 纏屑監控與自動除屑整合系統
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 個人資料 */}
        {page === "profile" && (
          <section className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <p className="text-sm font-bold text-blue-600">Profile</p>
            <h2 className="mt-2 text-4xl font-black">個人資料</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm font-bold text-slate-500">姓名</p>
                <p className="mt-2 text-2xl font-black">王勝偉</p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm font-bold text-slate-500">系所</p>
                <p className="mt-2 text-2xl font-black">智慧自動化工程系</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 p-6">
              <h3 className="text-2xl font-black">自我介紹</h3>
              <p className="mt-4 leading-8 text-slate-700">
                我是王勝偉，目前就讀於智慧自動化工程系。學習方向包含程式設計、
                影像辨識、智慧製造與網頁設計，並希望將人工智慧技術應用於工業自動化系統中。
                透過專題實作，我累積了影像處理、模型應用與系統整合的經驗。
              </p>
            </div>

            <button
              onClick={() => setPage("skills")}
              className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              下一頁：專長能力
            </button>
          </section>
        )}

        {/* 專長能力 */}
        {page === "skills" && (
          <section className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <p className="text-sm font-bold text-blue-600">Skills</p>
            <h2 className="mt-2 text-4xl font-black">專長能力</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white">
                  Py
                </div>
                <h3 className="text-2xl font-black">Python</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  具備 Python 程式設計能力，可應用於資料處理、影像分析、模型訓練與自動化流程。
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-xl font-black text-white">
                  AI
                </div>
                <h3 className="text-2xl font-black">YOLO</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  熟悉 YOLO 物件辨識概念，可用於即時影像監控、物件偵測與工業瑕疵辨識。
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-emerald-50 p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-xl font-black text-white">
                  Web
                </div>
                <h3 className="text-2xl font-black">網頁設計</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  能設計簡潔的網頁介面，並使用前端技術製作作品展示、履歷網站與互動式系統。
                </p>
              </div>
            </div>

            <button
              onClick={() => setPage("project")}
              className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              下一頁：專題介紹
            </button>
          </section>
        )}

        {/* 專題介紹 */}
        {page === "project" && (
          <section className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <p className="text-sm font-bold text-blue-600">Project</p>
            <h2 className="mt-2 text-4xl font-black">
              智慧 CNC 纏屑監控與自動除屑整合系統
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl bg-slate-900 p-7 text-white">
                <h3 className="text-2xl font-black">專題重點</h3>
                <ul className="mt-5 space-y-4 leading-7 text-slate-300">
                  <li>• 使用影像辨識監控 CNC 加工狀態</li>
                  <li>• 透過 YOLO 模型偵測纏屑或異常情況</li>
                  <li>• 結合自動除屑機構，降低人工巡檢負擔</li>
                  <li>• 提升加工安全性、穩定性與設備維護效率</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-2xl font-black">專題說明</h3>
                <p className="mt-4 leading-8 text-slate-700">
                  本專題以 CNC 加工過程中的纏屑問題為研究目標，建立一套智慧監控與自動除屑整合系統。
                  系統透過攝影機擷取加工影像，並利用 YOLO 影像辨識模型判斷是否發生纏屑狀況。
                  當系統偵測到異常時，可進一步觸發除屑機構或提醒操作人員處理，以提升加工過程的安全性與自動化程度。
                </p>

                <p className="mt-4 leading-8 text-slate-700">
                  此系統結合 Python、YOLO 物件辨識、網頁介面與自動化控制概念，
                  展現智慧製造中影像辨識與設備整合的應用價值。
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("home")}
                className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
              >
                回到首頁
              </button>

              <button
                onClick={() => setPage("profile")}
                className="rounded-2xl border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
              >
                查看個人資料
              </button>
            </div>
          </section>
        )}

        <footer className="mt-10 text-center text-sm text-slate-400">
          © 2026 王勝偉｜智慧自動化工程系｜Next.js + GitHub + Railway
        </footer>
      </div>
    </main>
  );
}