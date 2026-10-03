<template>
  <div class="home-page">
    <section class="portfolio-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">gaze9999 / 個人作品與工程筆記</p>
        <h1 id="home-title">把工程探索,<br />做成能使用的作品</h1>
        <p class="lead">
          從前端介面到 Python 工具與 coding-agent 工作流程, 記錄我持續實作, 整理與驗證的過程
        </p>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="btn primary">探索作品概覽 →</NuxtLink>
          <NuxtLink to="/about" class="btn secondary">關於我的工程方法</NuxtLink>
        </div>
      </div>
      <aside class="hero-panel" aria-labelledby="featured-title">
        <p class="eyebrow">近期作品 / 遊戲試玩</p>
        <h2 id="featured-title">Universe Idle</h2>
        <p>從一片地面開始, 安排工人, 生產資源, 建造與研究, 逐步推進你的放置遊戲進度</p>
        <div class="panel-note">地面原型 · 繁體中文 / English · 本機存檔</div>
        <a
          href="https://gaze9999.github.io/universe-idle/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn primary"
          >開啟試玩版 ↗<span class="sr-only"> (另開分頁)</span></a
        >
      </aside>
    </section>

    <section class="repository-section" aria-labelledby="repositories-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">持續實作的公開專案</p>
          <h2 id="repositories-title">近期 GitHub 專案</h2>
        </div>
        <a
          href="https://github.com/gaze9999"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >GitHub 個人頁 ↗<span class="sr-only"> (另開分頁)</span></a
        >
      </div>
      <ProjectsRepositoryCards />
    </section>

    <section class="demo-section" aria-labelledby="demos-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">本站展示</p>
          <h2 id="demos-title">介面示範與資料成果</h2>
        </div>
        <NuxtLink to="/projects#demonstrations" class="text-link">查看全部展示 →</NuxtLink>
      </div>
      <p class="section-note">
        保留電商, 後台與多媒體等互動示範; TGS 2025 爬蟲頁呈現實際擷取的展覽商資料
      </p>
      <div class="demo-links">
        <NuxtLink v-for="demo in demonstrations" :key="demo.path" :to="demo.path">
          <span>{{ demo.title }}</span>
          <small>{{ demo.category }}</small>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { demonstrations } from '~/modules/projects'

  useSeoMeta({
    title: 'gaze9999 | 個人作品與工程探索',
    description:
      '探索 gaze9999 的公開作品: Universe Idle, Python 開發工具, Codex Skills 與 MCP, 工程工作流程, 以及前端互動示範',
    ogTitle: 'gaze9999 | 個人作品與工程探索',
    ogDescription: '從前端介面到 Python 工具與 coding-agent 工作流程, 持續實作與驗證的公開作品',
  })
</script>

<style scoped>
  .home-page {
    max-width: 76rem;
    margin: 0 auto;
  }
  .portfolio-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.8fr);
    align-items: center;
    gap: 3rem;
    padding: 2rem 0 4rem;
  }
  .eyebrow {
    color: #a65327;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    font-weight: 800;
  }
  h1 {
    font-size: clamp(2.4rem, 5vw, 4.5rem);
    line-height: 1.15;
    letter-spacing: -0.04em;
    margin: 1rem 0 1.5rem;
  }
  .lead {
    color: #676472;
    font-size: 1.05rem;
    line-height: 1.9;
    max-width: 38rem;
  }
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    min-height: 2.9rem;
    border-radius: 999px;
    padding: 0.75rem 1.3rem;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
  }
  .primary {
    background: #ff9f4a;
    color: #1f1b2d;
  }
  .secondary {
    border: 1px solid #20212b26;
    color: #20212b;
  }
  .hero-panel {
    background: #1f1b2d;
    color: #f5f0e6;
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 1.5rem 3.5rem #20212b24;
  }
  .hero-panel .eyebrow {
    color: #ffb782;
  }
  .hero-panel h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  .hero-panel p:not(.eyebrow) {
    line-height: 1.9;
    color: #d6d1df;
  }
  .panel-note {
    color: #d6d1df;
    font-size: 0.78rem;
    margin: 1.5rem 0;
  }
  .repository-section,
  .demo-section {
    padding-bottom: 4rem;
  }
  .section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .section-heading h2 {
    font-size: clamp(1.7rem, 3vw, 2.3rem);
    margin: 0.6rem 0 0;
  }
  .text-link {
    color: #6b4f3b;
    font-weight: 700;
    text-decoration: none;
    padding: 0.4rem 0;
  }
  .text-link:hover {
    text-decoration: underline;
  }
  .section-note {
    color: #676472;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  .demo-links {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }
  .demo-links a {
    display: grid;
    gap: 0.4rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background: #ffffff8c;
    border: 1px solid #20212b1a;
    color: #20212b;
    text-decoration: none;
  }
  .demo-links a:hover {
    border-color: #e87836;
  }
  .demo-links small {
    color: #676472;
    font-size: 0.72rem;
  }
  a:focus-visible {
    outline: 3px solid #e87836;
    outline-offset: 4px;
  }
  @media (max-width: 54rem) {
    .portfolio-hero {
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }
    .demo-links {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 36rem) {
    .demo-links {
      grid-template-columns: minmax(0, 1fr);
    }
    .hero-panel {
      padding: 1.4rem;
    }
  }
</style>

<style>
  html.dark-mode .home-page .eyebrow,
  html.dark-mode .home-page .text-link {
    color: #ffab73;
  }
  html.dark-mode .home-page .lead,
  html.dark-mode .home-page .section-note,
  html.dark-mode .home-page .demo-links small {
    color: #aeb4c2;
  }
  html.dark-mode .home-page .secondary,
  html.dark-mode .home-page .demo-links a {
    color: #f0f2f7;
    border-color: #ffffff1f;
  }
  html.dark-mode .home-page .demo-links a {
    background: #171b2acc;
  }
  html.dark-mode .home-page .hero-panel {
    background: #202538;
  }
</style>
