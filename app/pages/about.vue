<template>
  <div class="about-page">
    <section class="hero" aria-labelledby="about-title">
      <div class="hero-copy">
        <p class="eyebrow">About / Engineering Profile</p>
        <h1 id="about-title">把複雜的前端系統，整理成可靠且可持續演進的產品體驗。</h1>
        <p class="hero-summary">
          專注於企業級 Web 前端與系統整合，累積十年以上的開發經驗。從 Angular、TypeScript 到 Vue /
          Nuxt，我重視可維護的架構、可量測的效能，以及能讓團隊安心協作的交付品質。
        </p>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="primary-action">查看作品與實作</NuxtLink>
          <a href="#approach" class="secondary-action">了解工程方法</a>
        </div>
      </div>

      <aside class="focus-card" aria-label="目前專注方向">
        <p class="focus-label">Current Focus</p>
        <h2>Frontend Engineering<br />&amp; System Analysis</h2>
        <ul>
          <li>大型前端系統的架構演進與維護</li>
          <li>資料流程、API 整合與 SSR 體驗</li>
          <li>效能量測、問題定位與漸進式改善</li>
          <li>從資深前端延伸至技術規劃與系統分析</li>
        </ul>
      </aside>
    </section>

    <div class="content">
      <section class="section" aria-labelledby="skills-title">
        <div class="section-heading">
          <p class="section-index">01</p>
          <div>
            <h2 id="skills-title">技術視角</h2>
            <p>技術選擇服務於問題本身；我偏好以清楚的邊界、型別與資料流，降低系統長期維護成本。</p>
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
            <h2 id="experience-title">工程實踐</h2>
            <p>不只完成畫面，也處理資料量、版本演進、效能與團隊協作帶來的系統性挑戰。</p>
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
            <h2 id="approach-title">工程方法</h2>
            <p>以證據推進決策，讓每一次改善都能被理解、驗證與延續。</p>
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
        <p class="eyebrow">Next Direction</p>
        <h2 id="direction-title">在前端工程與系統規劃之間，持續建立更好的協作介面。</h2>
        <p>
          我期待參與需要釐清需求、整合多方限制並長期優化的產品工作，將前端實作轉化為可被團隊共同維護的系統能力。
        </p>
        <NuxtLink to="/projects" class="primary-action">探索作品與實作</NuxtLink>
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
    title: '關於｜前端工程與系統分析',
    description: '聚焦 Angular、TypeScript、Vue / Nuxt、SSR 與效能優化的前端工程介紹。',
  })

  const skillCategories: SkillCategory[] = [
    {
      kicker: 'Primary Expertise',
      title: '前端工程',
      description: '以 Angular 為主要實戰場域，兼顧元件設計、狀態管理與跨裝置體驗。',
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
      kicker: 'Full-stack Context',
      title: 'Web 整合',
      description: '理解從前端呈現到 API、伺服端渲染與非同步流程之間的整體資料路徑。',
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
      kicker: 'Product Quality',
      title: '體驗與品質',
      description: '把效能與可用性視為產品品質的一部分，從設計到上線持續觀察與調整。',
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
      kicker: 'Technical Exploration',
      title: '技術探索',
      description: '保持跨領域實作能力，將遊戲開發與本機 AI 工具的經驗帶回工程思考。',
      skills: [
        'Unity',
        'C#',
        'FSM',
        'Behavior Tree',
        'ScriptableObject',
        'Stable Diffusion',
        'ComfyUI',
        'LoRA',
        'Local LLM',
      ],
    },
  ]

  const experiences: Experience[] = [
    {
      label: 'Enterprise Frontend',
      title: '大型 Angular 系統維護與演進',
      summary: '在企業前端情境中，處理元件規模、資料一致性與既有架構逐步演進的需求。',
      highlights: [
        '維護超過 100 個 Angular 元件，持續整理可重用的介面與互動模式。',
        '運用 Signals、computed、effect、RxJS 與 NgRx，讓狀態與非同步流程更容易追蹤。',
        '以 Map / Set 處理大量資料比對，降低資料轉換與查找的複雜度。',
      ],
    },
    {
      label: 'Migration & Architecture',
      title: '版本升級與架構落地',
      summary: '面對框架升級時，先辨識相依性與風險，再將轉換拆成可驗證的階段。',
      highlights: [
        '參與 Angular 9 至 15 的升級工作，也投入 Angular 18–19 的專案開發。',
        '在既有系統中逐步導入較清楚的型別、元件邊界與資料流。',
        '與設計、後端及需求端協作，讓技術決策能回應實際使用情境。',
      ],
    },
    {
      label: 'SSR & Performance',
      title: '以量測驅動效能改善',
      summary: '從真實載入路徑與 Core Web Vitals 出發，找出影響體驗的瓶頸並驗證改善結果。',
      highlights: [
        '結合 Angular SSR 與 TransferState，避免不必要的重複資料請求。',
        '曾將 LCP 由約 20 秒改善至 4 秒內，並將 CLS 由 0.9 降至 0.001。',
        '使用 Lighthouse 與 Chrome DevTools 檢視載入、渲染與互動過程。',
      ],
    },
    {
      label: 'Integration',
      title: 'API 與資料視覺化整合',
      summary: '以 Node.js 與 REST API 的整合經驗，協助前端穩定處理資料交換與非同步互動。',
      highlights: [
        '設計可追蹤的請求、錯誤與載入狀態，讓 UI 能正確回應資料生命週期。',
        '使用 D3.js 將資料關係與趨勢轉化為容易理解的視覺呈現。',
        '在 Vue 3 / Nuxt / Pinia 專案中，實作 SSR / SSG 與前端狀態管理。',
      ],
    },
  ]

  const principles: Principle[] = [
    {
      title: '先拆解，再承諾',
      description: '先確認需求、假設與限制，將模糊問題拆成可討論、可驗證的工作單位。',
    },
    {
      title: '以量測定位根因',
      description: '不以直覺取代證據；透過效能指標、瀏覽器工具與資料流觀察來判斷改善方向。',
    },
    {
      title: '漸進式改善',
      description: '尊重既有系統與交付節奏，以低風險、可回溯的步驟持續降低複雜度。',
    },
    {
      title: 'AI 輔助後仍人工驗證',
      description:
        '善用 AI 加速探索與草擬，但仍以人工 Code Review、型別檢查、API 與套件版本確認、Build 和實際測試守住品質。',
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
