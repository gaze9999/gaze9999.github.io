<template>
  <div class="projects-overview">
    <section class="overview-hero" aria-labelledby="projects-title">
      <p class="eyebrow">作品概覽</p>
      <h1 id="projects-title">公開專案與實作展示</h1>
      <p class="subtitle">
        近期專注 Python 工具, coding-agent 工作流程與遊戲原型; 從這裡前往原始碼,
        試玩版與本站介面示範
      </p>
    </section>

    <section class="repository-section" aria-labelledby="repositories-title">
      <div class="section-heading">
        <h2 id="repositories-title">近期公開專案</h2>
        <p>依主題整理的公開作品, 完整使用方式與目前限制請參考各專案 README</p>
      </div>
      <ProjectsRepositoryCards />
    </section>

    <section id="demonstrations" class="demo-section" aria-labelledby="demonstrations-title">
      <div class="section-heading">
        <h2 id="demonstrations-title">本站介面示範與資料成果</h2>
        <p>以下保留既有展示路由, 各卡片標示內容性質; UI 示範與範例資料用來呈現互動設計</p>
      </div>
      <div class="demo-grid">
        <article v-for="demo in demonstrations" :key="demo.path" class="demo-card">
          <p class="category">{{ demo.category }}</p>
          <h3>{{ demo.title }}</h3>
          <p class="description">{{ demo.description }}</p>
          <NuxtLink :to="demo.path">開啟展示 →</NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { demonstrations } from '~/modules/projects'

  definePageMeta({ layout: 'default' })
  useSeoMeta({
    title: '作品概覽 | gaze9999',
    description:
      'gaze9999 的公開 repositories 與實作展示, 包含 Universe Idle, My Py Tools, Codex Setup, Codex Playbook 與本機活動工具',
    ogTitle: '公開專案與實作展示 | gaze9999',
    ogDescription: '探索 Python 工具, coding-agent 工作流程, 遊戲原型與前端互動示範',
  })
</script>

<style scoped>
  .projects-overview {
    max-width: 76rem;
    margin: 0 auto;
  }
  .overview-hero {
    padding: 2rem 0 3rem;
    max-width: 52rem;
  }
  .eyebrow,
  .category {
    color: #a65327;
    font-size: 0.75rem;
    font-weight: 800;
  }
  h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    line-height: 1.2;
    margin: 1rem 0;
  }
  .subtitle,
  .section-heading p,
  .description {
    color: #676472;
    line-height: 1.8;
  }
  .repository-section,
  .demo-section {
    padding-bottom: 4rem;
    scroll-margin-top: 2rem;
  }
  .section-heading {
    margin-bottom: 1.5rem;
  }
  .section-heading h2 {
    font-size: clamp(1.7rem, 3vw, 2.3rem);
    margin-bottom: 0.6rem;
  }
  .demo-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
  .demo-card {
    display: flex;
    flex-direction: column;
    background: #ffffff99;
    border: 1px solid #20212b1a;
    border-radius: 1.2rem;
    padding: 1.5rem;
  }
  .category {
    margin: 0 0 0.8rem;
  }
  .demo-card h3 {
    font-size: 1.25rem;
    margin: 0 0 0.8rem;
  }
  .description {
    flex: 1;
    font-size: 0.9rem;
    margin: 0 0 1.25rem;
  }
  .demo-card a {
    align-self: start;
    color: #6b4f3b;
    font-weight: 700;
    text-decoration: none;
    padding: 0.5rem 0;
  }
  .demo-card a:hover {
    text-decoration: underline;
  }
  .demo-card a:focus-visible {
    outline: 3px solid #e87836;
    outline-offset: 4px;
  }
  @media (max-width: 65rem) {
    .demo-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 42rem) {
    .demo-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

<style>
  html.dark-mode .projects-overview .eyebrow,
  html.dark-mode .projects-overview .category,
  html.dark-mode .projects-overview .demo-card a {
    color: #ffab73;
  }
  html.dark-mode .projects-overview .subtitle,
  html.dark-mode .projects-overview .section-heading p,
  html.dark-mode .projects-overview .description {
    color: #aeb4c2;
  }
  html.dark-mode .projects-overview .demo-card {
    background: #171b2acc;
    border-color: #ffffff1f;
  }
</style>
