import React from "react";
import {
  Activity,
  ArrowRight,
  Award,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Coffee,
  EyeOff,
  Laptop,
  MessageCircle,
  Repeat,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  Video,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { FaqAccordion } from "@/components/FaqAccordion";

const LINE_CTA_URL = "https://lin.ee/dummy12345";

const CONCERNS = [
  {
    icon: Activity,
    title: "通勤がなくなった分の慢性的な運動不足",
    description:
      "自宅から一歩も出ない日が続き、肩こりや身体のこわばりを感じながらも、運動するきっかけがつかめない。",
  },
  {
    icon: Coffee,
    title: "頭がスッキリしないまま始まる始業時間",
    description:
      "起きてすぐパソコンを開き、ぼんやりした頭のままメールやチャットを返し始めてしまい、午前中の集中力が上がらない。",
  },
  {
    icon: Repeat,
    title: "一人でYouTubeのヨガ動画を始めても三日坊主",
    description:
      "「明日から早起きして運動しよう」と動画をお気に入り登録しても、一人ではなかなか習慣化できず挫折してしまう。",
  },
  {
    icon: Laptop,
    title: "仕事とプライベートのオン・オフが切り替えづらい",
    description:
      "生活空間と仕事場が同じリモートワーク環境で、気持ちの切り替えができず常に頭が休まらない。",
  },
];

const REASONS = [
  {
    number: "01",
    icon: EyeOff,
    title: "パジャマ・すっぴんでOK",
    subtitle: "カメラオフ推奨の気軽さ",
    description:
      "レッスンはすべてカメラオフ・マイクミュートでの参加を推奨しています。起きたそのままのパジャマ姿でも、部屋の片付けを気にすることなく、ベッド脇やデスク横から気軽にご参加いただけます。",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80",
    imageAlt: "朝の静かな部屋でリラックスして過ごすイメージ",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "予約不要、スマホからワンタップで参加",
    subtitle: "Zoom利用で手間なく継続",
    description:
      "毎回の面倒な事前予約やキャンセル手続きは一切ありません。朝起きたら、公式LINEに届く専用ZoomリンクをスマートフォンやPCからワンタップするだけ。忙しい朝でも迷わず3秒で入室できます。",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=700&q=80",
    imageAlt: "スマートフォンからワンタップで手軽にアクセスするイメージ",
  },
  {
    number: "03",
    icon: Brain,
    title: "ヨガ×マインドフルネス瞑想の相乗効果",
    subtitle: "ストレッチだけでなく集中力を高める脳の休息",
    description:
      "前半10分の優しい朝ヨガで縮こまった背中や肩まわりをほぐし、後半5分のマインドフルネス瞑想で思考のノイズを鎮めます。身体のストレッチだけでなく「脳の休息」を取り入れることで、始業後の集中力をクリアに引き出します。",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
    imageAlt: "朝の光の中でマインドフルネス瞑想を行うイメージ",
  },
];

const STEPS = [
  {
    step: "STEP 1",
    icon: MessageCircle,
    title: "LINE友だち追加",
    duration: "所要時間：約10秒",
    description:
      "ページ内のボタンから「朝の余白」公式LINEアカウントを友だち追加します。面倒なフォーム入力は不要です。",
  },
  {
    step: "STEP 2",
    icon: Video,
    title: "Zoomリンクを受け取る",
    duration: "自動メッセージで即座にお届け",
    description:
      "友だち追加後すぐに、初回1週間無料体験のご案内と朝ヨガ参加用のZoomリンクがLINEに届きます。",
  },
  {
    step: "STEP 3",
    icon: Sun,
    title: "翌朝から参加可能",
    duration: "カメラオフ・予約不要",
    description:
      "翌朝の配信時間になったらリンクをタップして入室するだけ。パジャマのまま、心地よい15分間を体験してください。",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-paleBlue-100/90 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <a
            href="#"
            aria-label="朝の余白 トップへ戻る"
            className="group flex items-baseline gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-400"
          >
            <span className="text-xl font-light tracking-[0.22em] text-slate-800 transition-colors group-hover:text-paleBlue-700 sm:text-2xl">
              朝の余白
            </span>
            <span className="text-[11px] font-light tracking-[0.15em] text-slate-500">
              あさのよはく
            </span>
          </a>

          <nav
            aria-label="メインナビゲーション"
            className="hidden items-center gap-8 text-sm font-light text-slate-600 md:flex"
          >
            <a
              href="#reasons"
              className="transition-colors hover:text-paleBlue-700"
            >
              選ばれる理由
            </a>
            <a
              href="#instructor"
              className="transition-colors hover:text-paleBlue-700"
            >
              実績・講師紹介
            </a>
            <a
              href="#steps"
              className="transition-colors hover:text-paleBlue-700"
            >
              参加の流れ
            </a>
            <a
              href="#faq"
              className="transition-colors hover:text-paleBlue-700"
            >
              よくある質問
            </a>
          </nav>

          <a
            href={LINE_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-paleYellow-300 px-4 py-2 text-xs font-medium text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-paleYellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-500 focus-visible:ring-offset-2 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span>無料体験をはじめる</span>
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* [FV] ファーストビュー */}
        <section
          aria-labelledby="fv-heading"
          className="relative overflow-hidden bg-gradient-to-b from-paleBlue-50 via-paleBlue-50/60 to-white pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
        >
          {/* 朝の光と空気感を表現する柔らかい装飾背景 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-paleYellow-100/70 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-paleBlue-100/70 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* FV Text Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-paleBlue-200 bg-white/90 px-4 py-1.5 text-xs font-normal tracking-wider text-paleBlue-800 shadow-sm sm:text-sm">
                  <Sun
                    aria-hidden="true"
                    className="h-4 w-4 text-amber-500"
                  />
                  <span>リモートワーカーのためのオンライン朝ヨガ＆瞑想サロン</span>
                </div>

                <h1
                  id="fv-heading"
                  className="mt-6 text-2xl font-light leading-[1.45] tracking-wider text-slate-900 sm:text-4xl sm:leading-[1.45] lg:text-[42px] lg:leading-[1.45]"
                >
                  パジャマのまま、たった15分。
                  <span className="mt-2 block font-normal text-paleBlue-800">
                    朝の余白が、1日の生産性を変える。
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-slate-600 sm:text-base sm:leading-loose">
                  画面を閉じたまま、深呼吸からはじまる15分間。
                  自宅にいながら心と身体をゆるやかに目覚めさせ、始業前のデスクに清々しい集中力を届けます。
                </p>

                {/* FV Highlights */}
                <ul className="mt-6 flex flex-wrap gap-2.5 text-xs font-normal text-slate-700 sm:text-sm">
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-paleBlue-200">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-paleBlue-600"
                    />
                    <span>カメラオフ・すっぴんOK</span>
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-paleBlue-200">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-paleBlue-600"
                    />
                    <span>予約不要・スマホでワンタップ</span>
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-paleBlue-200">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-paleBlue-600"
                    />
                    <span>ヨガ10分＋マインドフルネス5分</span>
                  </li>
                </ul>

                {/* FV CTA */}
                <div className="mt-9 sm:mt-10">
                  <div className="inline-flex flex-col items-center sm:items-start">
                    <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-paleYellow-200 px-4 py-1 text-xs font-medium tracking-wider text-slate-900 ring-1 ring-paleYellow-400/50 sm:text-sm">
                      <Sparkles
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-amber-700"
                      />
                      <span>初回1週間無料体験をプレゼント</span>
                    </span>
                    <a
                      href={LINE_CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-paleYellow-300 px-8 py-4 text-base font-medium text-slate-900 shadow-md shadow-paleYellow-400/25 ring-1 ring-paleYellow-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-paleYellow-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-600 focus-visible:ring-offset-2 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                    >
                      <MessageCircle
                        aria-hidden="true"
                        className="h-5 w-5 text-slate-900"
                      />
                      <span>公式LINEを友だち追加して無料体験</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                    <p className="mt-2.5 text-xs font-light text-slate-500">
                      ※登録後すぐにZoomリンクが届きます・自動課金は一切ありません
                    </p>
                  </div>
                </div>
              </div>

              {/* FV Image Column */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-paleBlue-200/50 via-paleYellow-100/60 to-transparent blur-xl"
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-white bg-paleBlue-50 shadow-xl shadow-paleBlue-900/5">
                    <img
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
                      alt="朝の光が差し込む爽やかな部屋でストレッチをする女性"
                      width={900}
                      height={675}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="aspect-[4/3] h-auto w-full object-cover"
                    />
                    <div className="flex items-center justify-between bg-white/95 px-5 py-3.5 backdrop-blur-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-normal text-slate-700 sm:text-sm">
                          毎朝 7:00 / 7:30 / 8:00 ライブ配信
                        </span>
                      </div>
                      <span className="rounded-full bg-paleBlue-50 px-3 py-1 text-xs font-medium text-paleBlue-800">
                        1回 15分
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [Section 1] 悩みへの共感（課題提起） */}
        <section
          id="concerns"
          aria-labelledby="concerns-heading"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                Issues
              </span>
              <h2
                id="concerns-heading"
                className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl"
              >
                こんな「朝のモヤモヤ」を抱えていませんか？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                オン・オフの切り替えが難しいリモートワーカーやフリーランスの方から、毎朝このようなお悩みを多くいただいています。
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
              {CONCERNS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <FadeIn key={item.title} delayMs={index * 80}>
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-paleBlue-100 bg-paleBlue-50/40 p-6 transition-colors hover:bg-paleBlue-50/80 sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-paleBlue-700 shadow-sm ring-1 ring-paleBlue-100">
                        <IconComponent aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal leading-snug text-slate-900 sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* [Section 2] 理想の未来（解決策） */}
        <section
          id="solution"
          aria-labelledby="solution-heading"
          className="relative overflow-hidden bg-gradient-to-b from-paleBlue-50/70 via-paleBlue-50/40 to-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <FadeIn className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-lg shadow-paleBlue-900/5">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                    alt="朝の柔らかな日差しの中で深呼吸し心身をリセットする様子"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-6" delayMs={100}>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                  Ideal Morning
                </span>
                <h2
                  id="solution-heading"
                  className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl lg:leading-normal"
                >
                  毎朝たった15分の「リセット」で、クリアな1日を。
                </h2>
                <p className="mt-5 text-sm font-light leading-loose text-slate-700 sm:text-base sm:leading-loose">
                  朝の短い時間で心身を整えることで、仕事の集中力と生産性が劇的に向上します。
                  深い呼吸とともに身体をゆるめ、頭の中のタスクや雑念を一度手放す「朝の余白」をつくることで、自然と早起きの健康的なルーティンが身につく、清々しい毎日をご提案します。
                </p>

                <div className="mt-8 space-y-4 rounded-2xl border border-paleBlue-100 bg-white/90 p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Clock
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-paleBlue-600"
                    />
                    <div>
                      <p className="text-sm font-normal text-slate-900 sm:text-base">
                        始業前の15分で「オンモード」へ自然にスイッチ
                      </p>
                      <p className="mt-1 text-xs font-light leading-relaxed text-slate-600 sm:text-sm">
                        通勤の代わりに朝ヨガ＆瞑想を取り入れることで、午前9時からクリアな思考でデスクに向かえます。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-paleBlue-50 pt-4">
                    <CalendarCheck
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-paleBlue-600"
                    />
                    <div>
                      <p className="text-sm font-normal text-slate-900 sm:text-base">
                        頑張らなくても続く「心地よい早起き習慣」
                      </p>
                      <p className="mt-1 text-xs font-light leading-relaxed text-slate-600 sm:text-sm">
                        同じ時間に集まる仲間の存在とライブ感があるから、一人では続かなかった朝活が無理なく日常に溶け込みます。
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* [Section 3] 選ばれる3つの理由（強み/USP） */}
        <section
          id="reasons"
          aria-labelledby="reasons-heading"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                Why Choose Us
              </span>
              <h2
                id="reasons-heading"
                className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl"
              >
                「朝の余白」が選ばれる3つの理由
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                忙しいリモートワーカーが「気負わず、心地よく続けられること」を第一に設計しています。
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
              {REASONS.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <FadeIn key={reason.number} delayMs={index * 100}>
                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-paleBlue-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-paleBlue-50">
                        <img
                          src={reason.image}
                          alt={reason.imageAlt}
                          width={700}
                          height={438}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-medium tracking-widest text-paleBlue-800 shadow-sm">
                          REASON {reason.number}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paleBlue-50 text-paleBlue-700">
                            <IconComponent
                              aria-hidden="true"
                              className="h-5 w-5"
                            />
                          </div>
                          <span className="text-xs font-normal text-paleBlue-700">
                            {reason.subtitle}
                          </span>
                        </div>

                        <h3 className="mt-4 text-lg font-normal leading-snug text-slate-900 sm:text-xl">
                          {reason.title}
                        </h3>

                        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-slate-600">
                          {reason.description}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* [Section 4] 実績と信頼（権威性） */}
        <section
          id="instructor"
          aria-labelledby="instructor-heading"
          className="bg-paleBlue-50/60 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                Track Record &amp; Instructor
              </span>
              <h2
                id="instructor-heading"
                className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl"
              >
                確かな実績とインストラクター紹介
              </h2>
            </FadeIn>

            {/* 実績インフォグラフィックカード */}
            <FadeIn className="mt-12">
              <div className="overflow-hidden rounded-3xl border border-paleBlue-200/80 bg-white p-6 shadow-sm sm:p-10">
                <div className="grid items-center gap-8 md:grid-cols-3 md:divide-x md:divide-paleBlue-100">
                  {/* 継続率95% */}
                  <div className="text-center md:px-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paleYellow-200 px-3.5 py-1 text-xs font-medium text-slate-800">
                      <Users aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>プレオープン実績（モニター30名）</span>
                    </span>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-xs font-normal text-slate-600 sm:text-sm">
                        1ヶ月継続率
                      </span>
                      <span className="text-5xl font-light tracking-tight text-paleBlue-800 sm:text-6xl">
                        95
                      </span>
                      <span className="text-2xl font-normal text-paleBlue-700">
                        %
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="mx-auto mt-3 h-2 w-48 overflow-hidden rounded-full bg-paleBlue-100"
                    >
                      <div className="h-full w-[95%] rounded-full bg-paleBlue-600" />
                    </div>
                    <p className="mt-2 text-xs font-light text-slate-600">
                      運動習慣がなかった方も無理なく継続
                    </p>
                  </div>

                  {/* RYT200 */}
                  <div className="border-t border-paleBlue-100 pt-6 text-center md:border-t-0 md:px-4 md:pt-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paleBlue-50 px-3.5 py-1 text-xs font-medium text-paleBlue-800">
                      <Award aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>国際資格ライセンス</span>
                    </span>
                    <p className="mt-4 text-3xl font-light tracking-wider text-slate-900 sm:text-4xl">
                      RYT200
                    </p>
                    <p className="mt-2 text-xs font-light text-slate-600 sm:text-sm">
                      全米ヨガアライアンス認定資格保持
                    </p>
                  </div>

                  {/* 指導歴5年 */}
                  <div className="border-t border-paleBlue-100 pt-6 text-center md:border-t-0 md:px-4 md:pt-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paleBlue-50 px-3.5 py-1 text-xs font-medium text-paleBlue-800">
                      <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>確かな指導経験</span>
                    </span>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-xs font-normal text-slate-600 sm:text-sm">
                        都内スタジオ指導歴
                      </span>
                      <span className="text-5xl font-light tracking-tight text-slate-900 sm:text-6xl">
                        5
                      </span>
                      <span className="text-xl font-normal text-slate-700">
                        年
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-light text-slate-600 sm:text-sm">
                      初心者にも分かりやすい丁寧な声かけ
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* インストラクター紹介 */}
            <FadeIn className="mt-8" delayMs={100}>
              <div className="overflow-hidden rounded-3xl border border-paleBlue-100 bg-white p-6 shadow-sm sm:p-10">
                <div className="grid items-center gap-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <div className="mx-auto max-w-[260px] overflow-hidden rounded-2xl border border-paleBlue-100 bg-paleBlue-50">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                        alt="朝の余白 メインインストラクター 佐藤 凛の顔写真"
                        width={600}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="aspect-square h-auto w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="rounded-full bg-paleBlue-100 px-3 py-1 text-xs font-medium text-paleBlue-800">
                        代表インストラクター
                      </span>
                      <h3 className="text-xl font-normal tracking-wider text-slate-900 sm:text-2xl">
                        佐藤 凛（さとう りん）
                      </h3>
                    </div>

                    <p className="mt-2 text-xs font-normal text-paleBlue-800 sm:text-sm">
                      全米ヨガアライアンス認定（RYT200）保持 ／ 都内ヨガスタジオ指導歴5年
                    </p>

                    <p className="mt-4 text-sm font-light leading-loose text-slate-700 sm:text-base sm:leading-loose">
                      IT企業でのデスクワーク時代に心身のバランスを崩したことをきっかけに、ヨガとマインドフルネス瞑想に出会いました。
                      その後、全米ヨガアライアンス（RYT200）を取得し、都内スタジオにて5年間、延べ3,000名以上のビジネスパーソンへ指導を行ってきました。
                    </p>
                    <p className="mt-3 text-sm font-light leading-loose text-slate-700 sm:text-base sm:leading-loose">
                      「朝の余白」では、画面を見なくても声のガイドだけで心地よく動けるプログラムを設計しています。プレオープン時に実施したモニター30名様では、1ヶ月継続率95%を達成しました。身体が硬い方や初心者の方も、どうぞ安心してお任せください。
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* [Section 5] 参加の流れ */}
        <section
          id="steps"
          aria-labelledby="steps-heading"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                How to Join
              </span>
              <h2
                id="steps-heading"
                className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl"
              >
                無料体験までの3ステップ
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                思い立った今、わずか1分で手続き完了。翌朝からすぐにご参加いただけます。
              </p>
            </FadeIn>

            <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
              {STEPS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <FadeIn key={item.step} delayMs={index * 100}>
                    <li className="relative flex h-full flex-col rounded-3xl border border-paleBlue-100 bg-paleBlue-50/30 p-7 sm:p-8">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-paleBlue-700 px-3.5 py-1 text-xs font-medium tracking-widest text-white">
                          {item.step}
                        </span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-paleBlue-700 shadow-sm ring-1 ring-paleBlue-100">
                          <IconComponent
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>
                      </div>

                      <h3 className="mt-6 text-lg font-normal text-slate-900 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-paleBlue-700">
                        {item.duration}
                      </p>
                      <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </li>
                  </FadeIn>
                );
              })}
            </ol>
          </div>
        </section>

        {/* [Section 6] よくある質問（FAQ） */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="bg-paleBlue-50/40 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-paleBlue-700">
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="mt-3 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl"
              >
                よくある質問
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                ご参加前に多くいただくご質問をまとめました。
              </p>
            </FadeIn>

            <FadeIn className="mt-12" delayMs={100}>
              <FaqAccordion />
            </FadeIn>
          </div>
        </section>

        {/* [Section 7] 最終アクション喚起（ボトムCTA） */}
        <section
          aria-labelledby="bottom-cta-heading"
          className="relative overflow-hidden bg-gradient-to-b from-paleBlue-100/80 via-paleBlue-100 to-paleBlue-50 py-20 sm:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-paleYellow-100/80 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/80 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <div className="rounded-3xl border border-white/90 bg-white/85 px-6 py-12 shadow-lg shadow-paleBlue-900/5 backdrop-blur-sm sm:px-12 sm:py-16">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-paleBlue-50 px-4 py-1.5 text-xs font-normal tracking-wider text-paleBlue-800 ring-1 ring-paleBlue-200 sm:text-sm">
                  <Sun aria-hidden="true" className="h-4 w-4 text-amber-500" />
                  <span>オンライン朝ヨガ＆マインドフルネスサロン「朝の余白」</span>
                </span>

                <h2
                  id="bottom-cta-heading"
                  className="mt-6 text-2xl font-light leading-snug tracking-wider text-slate-900 sm:text-3xl lg:text-4xl"
                >
                  さあ、新しい朝のルーティンを始めましょう。
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-slate-700 sm:text-base sm:leading-loose">
                  パジャマのまま、たった15分。
                  まずは1週間の無料体験で、朝の心地よい余白と1日の生産性の変化を実感してください。
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-paleYellow-200 px-4 py-1 text-xs font-medium tracking-wider text-slate-900 ring-1 ring-paleYellow-400/50 sm:text-sm">
                    <Sparkles
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-amber-700"
                    />
                    <span>初回1週間無料体験をプレゼント</span>
                  </span>

                  <a
                    href={LINE_CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-paleYellow-300 px-8 py-4 text-base font-medium text-slate-900 shadow-md shadow-paleYellow-400/30 ring-1 ring-paleYellow-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-paleYellow-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-600 focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:py-5 sm:text-lg"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-900"
                    />
                    <span>公式LINEを友だち追加して無料体験</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <p className="mt-3 text-xs font-light text-slate-600">
                    ※ワンタップで友だち追加完了・いつでもブロックや配信停止が可能です
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* [Footer] フッター */}
      <footer className="border-t border-paleBlue-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <a
                href="#"
                className="inline-flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-paleBlue-400"
              >
                <span className="text-lg font-light tracking-[0.22em] text-slate-800">
                  朝の余白
                </span>
                <span className="text-xs font-light tracking-[0.12em] text-slate-500">
                  あさのよはく
                </span>
              </a>
              <p className="mt-1.5 text-xs font-light text-slate-500">
                リモートワーカーのためのオンライン朝ヨガ＆マインドフルネスサロン
              </p>
            </div>

            <nav aria-label="フッターナビゲーション">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-light text-slate-600">
                <li>
                  <a
                    href="#company"
                    className="transition-colors hover:text-paleBlue-700"
                  >
                    運営会社
                  </a>
                </li>
                <li>
                  <a
                    href="#tokushoho"
                    className="transition-colors hover:text-paleBlue-700"
                  >
                    特定商取引法に基づく表記
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="transition-colors hover:text-paleBlue-700"
                  >
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="transition-colors hover:text-paleBlue-700"
                  >
                    利用規約
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 border-t border-paleBlue-50 pt-6 text-center">
            <p className="text-xs font-light tracking-wider text-slate-500">
              © 2026 朝の余白 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
