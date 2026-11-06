"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-beginner",
    question: "初心者でも大丈夫ですか？",
    answer:
      "はい、もちろん大丈夫です。参加される方の約8割がヨガや瞑想の未経験からスタートされています。身体が硬い方でも無理なく行える優しいストレッチと呼吸法が中心ですので、どうぞ安心してご参加ください。",
  },
  {
    id: "faq-camera",
    question: "カメラはオフでもいいですか？",
    answer:
      "はい、カメラオフ・音声ミュートでのご参加を推奨しております。起きたてのパジャマ姿やすっぴんのまま、誰の目も気にせずご自身のペースでリラックスして取り組んでいただけます。",
  },
  {
    id: "faq-items",
    question: "用意するものはありますか？",
    answer:
      "スマートフォンまたはパソコン（Zoomが利用できる端末）があればすぐにご参加いただけます。ヨガマットがなくても、バスタオルの上やラグ・ベッドの上など、半畳ほどのスペースがあれば問題ありません。",
  },
  {
    id: "faq-schedule",
    question: "毎朝決まった時間に参加できない日があっても続けられますか？",
    answer:
      "はい、予約や欠席連絡は一切不要です。ご自身の体調やスケジュールに合わせて、参加できる日だけワンタップで入室いただけます。また、見逃し配信アーカイブもご用意しているため、お好きな時間帯に実践することも可能です。",
  },
  {
    id: "faq-trial",
    question: "1週間無料体験のあと、自動的に課金されることはありませんか？",
    answer:
      "無料体験期間が終了しても、自動的に有料プランへ切り替わることは一切ございません。体験期間中は公式LINEからいつでもワンタップで配信停止・退会が可能ですので、まずはお気軽にお試しください。",
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-beginner");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${item.id}-button`;
        const panelId = `${item.id}-panel`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-paleBlue-200/80 bg-white transition-colors duration-200 hover:border-paleBlue-300"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-normal text-slate-800 transition-colors hover:text-paleBlue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-400 focus-visible:ring-offset-2 sm:px-8 sm:py-6 sm:text-lg"
              >
                <span className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paleBlue-100 text-xs font-medium text-paleBlue-800"
                  >
                    Q
                  </span>
                  <span className="leading-snug">{item.question}</span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-paleBlue-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={
                isOpen
                  ? "border-t border-paleBlue-100 px-6 pb-6 pt-4 sm:px-8 sm:pb-7"
                  : "hidden"
              }
            >
              <div className="flex items-start gap-3.5 text-sm font-light leading-relaxed text-slate-700 sm:text-base sm:leading-loose">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paleYellow-200 text-xs font-medium text-slate-800"
                >
                  A
                </span>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
