<template>
  <div class="about-page">
    <section class="hero" aria-labelledby="about-title">
      <div class="hero-copy">
        <p class="eyebrow">About / 關於我</p>
        <h1 id="about-title">讓前端系統好用,<br />也方便長期維護</h1>
        <p class="hero-summary">
          我主要做 Web 前端與系統整合, 使用 Angular, TypeScript 與 Vue / Nuxt; 開發時會一起考慮架構,
          效能與後續維護, 讓團隊更容易接手與協作
        </p>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="primary-action">查看作品與實作</NuxtLink>
          <a href="#approach" class="secondary-action">了解我的開發方式</a>
        </div>
      </div>

      <aside class="focus-card" aria-label="目前專注方向">
        <p class="focus-label">最近的開發方向</p>
        <h2>前端開發<br />與實用工具</h2>
        <ul>
          <li>大型前端系統的維護與架構調整</li>
          <li>資料處理, API 整合與伺服器端渲染</li>
          <li>Python 文件處理與開發流程工具</li>
          <li>Codex Skills, MCP 與 AI 輔助開發</li>
        </ul>
      </aside>
    </section>

    <div class="content">
      <section class="section" aria-labelledby="skills-title">
        <div class="section-heading">
          <p class="section-index">01</p>
          <div>
            <h2 id="skills-title">使用的技術</h2>
            <p>依照需求選擇工具, 把元件責任, 型別與資料流整理清楚, 讓後續修改更容易</p>
          </div>
        </div>

        <div class="skill-grid">
          <article v-for="category in skillCategories" :key="category.title" class="skill-card">
            <p class="skill-kicker">{{ category.kicker }}</p>
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
            <ul class="tag-list" :aria-label="`${category.title} 技術項目`">
              <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section" aria-labelledby="experience-title">
        <div class="section-heading">
          <p class="section-index">02</p>
          <div>
            <h2 id="experience-title">開發與維護經驗</h2>
            <p>除了介面開發, 也參與框架升級, 大量資料處理, 效能調整與跨團隊協作</p>
          </div>
        </div>

        <div class="experience-list">
          <article v-for="item in experiences" :key="item.title" class="experience-card">
            <div class="experience-header">
              <span>{{ item.label }}</span>
              <h3>{{ item.title }}</h3>
            </div>
            <p>{{ item.summary }}</p>
            <ul>
              <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="approach" class="section split-section" aria-labelledby="approach-title">
        <div class="section-heading compact-heading">
          <p class="section-index">03</p>
          <div>
            <h2 id="approach-title">我的開發方式</h2>
            <p>先把問題弄清楚, 再實作, 測試, 並留下之後能查閱的紀錄</p>
          </div>
        </div>

        <div class="principles">
          <article v-for="(principle, index) in principles" :key="principle.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="closing" aria-labelledby="direction-title">
        <p class="eyebrow">一起合作</p>
        <h2 id="direction-title">一起把產品做好, 也讓後續維護更順手</h2>
        <p>
          我希望參與需要長期開發與維護的產品, 和設計, 後端及需求端一起把問題理清楚,
          做出符合使用情境, 也方便團隊持續修改的介面
        </p>
        <NuxtLink to="/projects" class="primary-action">查看我的作品</NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface SkillCategory {
    kicker: string
    title: string
    description: string
    skills: string[]
  }

  interface Experience {
    label: string
    title: string
    summary: string
    highlights: string[]
  }

  interface Principle {
    title: string
    description: string
  }

  useSeoMeta({
    title: '關於 | gaze9999 的前端開發與工具作品',
    description:
      '了解 gaze9999 的前端開發經驗, 包含 Angular, TypeScript, Vue / Nuxt, Python 工具與 AI 輔助開發',
    ogTitle: '關於 | gaze9999 的前端開發與工具作品',
    ogDescription: '分享前端開發與系統整合經驗, 以及 Python 工具, AI 輔助開發與放置遊戲的製作嘗試',
  })

  const skillCategories: SkillCategory[] = [
    {
      kicker: 'Frontend',
      title: '前端工程',
      description: '主要使用 Angular 開發前端, 處理元件設計, 狀態管理與不同裝置上的操作體驗',
      skills: [
        'Angular 9–19',
        'TypeScript',
        'JavaScript',
        'RxJS',
        'NgRx',
        'Signals',
        'SASS/SCSS',
        'RWD',
      ],
    },
    {
      kicker: 'Web Integration',
      title: 'Web 整合',
      description: '串接 API, 處理非同步資料與伺服器端渲染, 讓畫面正確顯示載入結果',
      skills: [
        'Vue 3',
        'Nuxt',
        'Pinia',
        'Node.js',
        'REST API',
        'SSR/SSG',
        'TransferState',
        'D3.js',
      ],
    },
    {
      kicker: 'Quality & Design',
      title: '體驗與品質',
      description: '關注頁面速度, 操作是否順手與版面是否清楚, 從設計到上線持續檢查與調整',
      skills: [
        'Core Web Vitals',
        'Lighthouse',
        'Chrome DevTools',
        'Figma',
        'UI/UX',
        'Photoshop',
        'Illustrator',
      ],
    },
    {
      kicker: 'Side Projects',
      title: '個人專案',
      description:
        '寫 Python 工具處理文件, 整理 Codex Skills 與 MCP 設定, 也製作 Universe Idle 放置遊戲, 嘗試不同的開發方式',
      skills: [
        'Python',
        '文件轉 Markdown',
        'Codex',
        'Skills',
        'MCP',
        'Codex 使用紀錄',
        '放置遊戲',
        'Unity / C#',
        'ComfyUI / Local LLM',
      ],
    },
  ]

  const experiences: Experience[] = [
    {
      label: 'Enterprise Frontend',
      title: '大型 Angular 系統維護與演進',
      summary: '維護企業使用的前端系統, 整理元件, 確保資料一致, 並配合新需求調整既有架構',
      highlights: [
        '維護 Angular 元件, 持續整理可重用的介面與互動模式',
        '運用 Signals, computed, effect, RxJS 與 NgRx, 讓狀態與非同步流程更容易追蹤',
        '以 Map / Set 處理大量資料比對, 降低資料轉換與查找的複雜度',
      ],
    },
    {
      label: 'Migration & Architecture',
      title: '框架升級與架構調整',
      summary: '升級前先檢查相依套件與可能受影響的功能, 分階段修改並確認結果',
      highlights: [
        '參與 Angular 9 至 15 的升級工作, 也投入 Angular 18–19 的專案開發',
        '在既有系統中逐步導入較清楚的型別, 元件邊界與資料流',
        '與設計, 後端及需求端協作, 讓技術決策能回應實際使用情境',
      ],
    },
    {
      label: 'SSR & Performance',
      title: '頁面效能改善',
      summary: '觀察實際頁面載入過程與 Core Web Vitals, 找出瓶頸, 比較修改前後的差異',
      highlights: [
        '結合 Angular SSR 與 TransferState, 避免不必要的重複資料請求',
        '以 LCP 與 CLS 等指標追蹤載入體驗, 檢查改善前後的差異',
        '使用 Lighthouse 與 Chrome DevTools 檢視載入, 渲染與互動過程',
      ],
    },
    {
      label: 'Integration',
      title: 'API 與資料視覺化整合',
      summary: '使用 Node.js 與 REST API 串接資料, 處理前端的載入, 更新與錯誤情況',
      highlights: [
        '處理請求中的載入提示, 錯誤訊息與結果顯示, 讓使用者知道目前進度',
        '使用 D3.js 將資料關係與趨勢轉化為容易理解的視覺呈現',
        '在 Vue 3 / Nuxt / Pinia 專案中, 實作 SSR / SSG 與前端狀態管理',
      ],
    },
  ]

  const principles: Principle[] = [
    {
      title: '先釐清需求',
      description: '先確認要解決的問題與目前限制, 再拆成能實作與驗收的步驟',
    },
    {
      title: '用實際結果判斷',
      description: '透過效能指標, 瀏覽器工具與資料流檢查, 找出問題發生的位置',
    },
    {
      title: '分階段改善',
      description: '配合既有系統與開發時程, 每次處理一個明確問題, 確認結果後再繼續',
    },
    {
      title: 'AI 協助, 自己確認',
      description:
        '用 AI 協助查找資料與撰寫初稿, 再自己檢查程式碼, 核對 API 與套件版本, 並執行型別檢查, 建置與測試',
    },
  ]
</script>

<style scoped>
  .about-page {
    --ink: #20212b;
    --muted: #676472;
    --line: #20212b1a;
    --accent: #e87836;
    --accent-soft: #fff0e5;
    min-height: 100vh;
    color: var(--ink);
  }
  .hero,
  .content {
    width: min(100%, 72rem);
    margin-inline: auto;
  }
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.75fr);
    gap: 2rem;
    align-items: stretch;
    padding-block: 3.5rem 4.5rem;
  }
  .hero-copy {
    padding: 1rem 0;
  }
  .eyebrow,
  .skill-kicker,
  .focus-label {
    color: #a65327;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .hero h1 {
    max-width: 48rem;
    margin: 1rem 0 1.25rem;
    font-size: clamp(2.35rem, 5vw, 4.75rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }
  .hero-summary {
    max-width: 47rem;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.9;
  }
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }
  .primary-action,
  .secondary-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.9rem;
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 750;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background 160ms ease;
  }
  .primary-action {
    background: var(--ink);
    color: #fff;
    box-shadow: 0 0.7rem 1.5rem #20212b24;
  }
  .secondary-action {
    border: 1px solid var(--line);
    background: #ffffff99;
    color: var(--ink);
  }
  .primary-action:hover,
  .secondary-action:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
  .primary-action:focus-visible,
  .secondary-action:focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
  }
  .focus-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 26rem;
    padding: 2rem;
    border-radius: 1.5rem;
    background: var(--ink);
    color: #fff;
    box-shadow: 0 1.5rem 3.5rem #20212b2e;
  }
  .focus-card h2 {
    margin: 0.8rem 0 1.5rem;
    font-size: clamp(1.65rem, 3vw, 2.25rem);
    line-height: 1.2;
  }
  .focus-card ul,
  .experience-card ul {
    display: grid;
    gap: 0.7rem;
    padding-left: 1.2rem;
    line-height: 1.65;
  }
  .focus-card li::marker {
    color: #ffad75;
  }
  .content {
    display: grid;
    gap: 5rem;
    padding-bottom: 4rem;
  }
  .section {
    scroll-margin-top: 2rem;
  }
  .section-heading {
    display: grid;
    grid-template-columns: 3.5rem minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line);
  }
  .section-heading h2 {
    margin: 0 0 0.4rem;
    font-size: clamp(1.8rem, 3vw, 2.55rem);
  }
  .section-heading p:not(.section-index),
  .skill-card > p:not(.skill-kicker),
  .experience-card > p,
  .principles p,
  .closing > p:not(.eyebrow) {
    color: var(--muted);
    line-height: 1.75;
  }
  .section-index {
    padding-top: 0.4rem;
    color: var(--accent);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 800;
  }
  .skill-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .skill-card,
  .experience-card {
    border: 1px solid var(--line);
    border-radius: 1.2rem;
    background: #ffffffb8;
  }
  .skill-card {
    padding: 1.6rem;
  }
  .skill-card h3 {
    margin: 0.45rem 0 0.65rem;
    font-size: 1.4rem;
  }
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding: 0;
    list-style: none;
  }
  .tag-list li {
    padding: 0.4rem 0.65rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: #8d431d;
    font-size: 0.78rem;
    font-weight: 700;
  }
  .experience-list {
    display: grid;
    gap: 1rem;
  }
  .experience-card {
    display: grid;
    grid-template-columns: minmax(12rem, 0.65fr) minmax(0, 1.35fr);
    gap: 1.5rem 2.5rem;
    padding: 1.8rem;
  }
  .experience-header span {
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .experience-header h3 {
    margin-top: 0.6rem;
    font-size: 1.45rem;
    line-height: 1.35;
  }
  .experience-card > p {
    margin: 0;
  }
  .experience-card ul {
    grid-column: 2;
    margin: 0;
    color: #3f3d47;
  }
  .experience-card li::marker {
    color: var(--accent);
  }
  .split-section {
    display: grid;
    grid-template-columns: minmax(16rem, 0.72fr) minmax(0, 1.28fr);
    gap: 3rem;
  }
  .compact-heading {
    grid-template-columns: 3.5rem minmax(0, 1fr);
    align-content: start;
    margin: 0;
    border: 0;
  }
  .principles {
    display: grid;
  }
  .principles article {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr);
    gap: 1rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--line);
  }
  .principles article:last-child {
    border-bottom: 1px solid var(--line);
  }
  .principles span {
    color: var(--accent);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.8rem;
    font-weight: 800;
  }
  .principles h3 {
    margin-bottom: 0.35rem;
    font-size: 1.1rem;
  }
  .closing {
    padding: clamp(2rem, 6vw, 4rem);
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #fff5ec, #fffdf9 62%, #f0eee8);
    box-shadow: inset 0 0 0 1px var(--line);
  }
  .closing h2 {
    max-width: 48rem;
    margin: 0.7rem 0 1rem;
    font-size: clamp(2rem, 4vw, 3.3rem);
    line-height: 1.2;
  }
  .closing > p:not(.eyebrow) {
    max-width: 48rem;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 54rem) {
    .hero,
    .split-section {
      grid-template-columns: 1fr;
    }
    .hero {
      padding-top: 1.5rem;
    }
    .focus-card {
      min-height: 0;
    }
    .experience-card {
      grid-template-columns: 1fr;
    }
    .experience-card ul {
      grid-column: 1;
    }
  }
  @media (max-width: 38rem) {
    .hero {
      padding-bottom: 3.5rem;
    }
    .hero h1 {
      font-size: 2.45rem;
    }
    .skill-grid {
      grid-template-columns: 1fr;
    }
    .section-heading,
    .compact-heading {
      grid-template-columns: 2.5rem minmax(0, 1fr);
    }
    .skill-card,
    .experience-card,
    .focus-card {
      padding: 1.3rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .primary-action,
    .secondary-action {
      transition: none;
    }
  }
</style>

<style>
  html.dark-mode .about-page {
    --ink: #f0f2f7;
    --muted: #aeb4c2;
    --line: #ffffff1f;
    --accent: #ffab73;
    --accent-soft: #ff9f4a1f;
  }

  html.dark-mode .about-page .focus-card {
    background: #202538;
  }

  html.dark-mode .about-page .primary-action {
    background: #ffab73;
    color: #171b2a;
    box-shadow: 0 0.7rem 1.5rem #00000040;
  }

  html.dark-mode .about-page .skill-card,
  html.dark-mode .about-page .experience-card,
  html.dark-mode .about-page .secondary-action {
    background: #171b2acc;
  }

  html.dark-mode .about-page .tag-list li {
    color: #ffc399;
  }

  html.dark-mode .about-page .experience-card ul {
    color: #d2d6e0;
  }

  html.dark-mode .about-page .closing {
    background: linear-gradient(135deg, #202538, #171b2a 65%, #121521);
  }
</style>
