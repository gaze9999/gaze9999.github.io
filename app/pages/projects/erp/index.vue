<template>
  <section class="project-hero">
    <div class="hero-content">
      <p class="eyebrow">Commerce Back Office</p>
      <h1>購物後台管理系統</h1>
      <p class="lead">
        以電商營運為情境, 使用固定示範資料呈現採購, 庫存, 財務, 人資與報表的後台介面設計
      </p>
      <div class="hero-meta">
        <span>模組介面展示</span>
        <span>角色切換示範</span>
        <span>跨模組流程示意</span>
      </div>
    </div>
    <div class="hero-panel">
      <div class="panel-header">後台功能一覽</div>
      <div class="panel-grid">
        <div class="panel-card">
          <h4>採購與供應</h4>
          <p>採購需求 → 審核 → 供應商 → 驗收</p>
        </div>
        <div class="panel-card">
          <h4>庫存管理</h4>
          <p>批次控管, 庫位盤點與異動追蹤</p>
        </div>
        <div class="panel-card">
          <h4>財務結算</h4>
          <p>憑證, 應收應付, 月結報表</p>
        </div>
        <div class="panel-card">
          <h4>人資流程</h4>
          <p>招募, 排班, 績效, 薪資結算</p>
        </div>
      </div>
    </div>
  </section>

  <section class="project-section">
    <h2>核心模組設計</h2>
    <div class="module-grid">
      <article>
        <h3>供應鏈管理</h3>
        <p>以需求申請, 供應商評等與簽核節點呈現採購流程</p>
      </article>
      <article>
        <h3>資產與庫存</h3>
        <p>展示庫存清單, 批次資訊, 異動紀錄與預警畫面</p>
      </article>
      <article>
        <h3>財務與稅務</h3>
        <p>以示範金額與憑證呈現收入, 支出及月結核對畫面</p>
      </article>
      <article>
        <h3>人資管理</h3>
        <p>展示部門人力, 招募進度與待處理任務</p>
      </article>
    </div>
  </section>

  <section class="project-section dark">
    <h2>介面設計重點</h2>
    <div class="architecture-list">
      <div class="arch-item">
        <span>01</span>
        <p>按營運功能分組的模組頁面</p>
      </div>
      <div class="arch-item">
        <span>02</span>
        <p>模擬角色切換與導覽可見範圍</p>
      </div>
      <div class="arch-item">
        <span>03</span>
        <p>以固定資料呈現 KPI 與圖表</p>
      </div>
      <div class="arch-item">
        <span>04</span>
        <p>報表清單與匯出操作示意</p>
      </div>
    </div>
  </section>

  <section class="project-section">
    <h2>展示內容</h2>
    <div class="showcase">
      <div>
        <h3>視覺展示</h3>
        <p>在總覽頁查看各模組的進度與待處理事項</p>
      </div>
      <div>
        <h3>流程示意</h3>
        <p>以圖卡形式描述[需求 → 採購 → 交付 → 結算]完整流程</p>
      </div>
      <div>
        <h3>資料分析</h3>
        <p>以示範指標與預警清單呈現分析介面</p>
      </div>
    </div>
  </section>

  <section class="project-section">
    <div class="entry-card">
      <div>
        <h2>體驗購物後台</h2>
        <p>瀏覽模組介面與角色切換示範; 資料不會送往後端系統</p>
      </div>
      <NuxtLink to="/shop/admin" class="btn">前往後台 →</NuxtLink>
    </div>
  </section>

  <section class="project-footer">
    <NuxtLink to="/" class="btn">返回首頁</NuxtLink>
  </section>
</template>

<style scoped>
  .project-hero {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(min(17.5rem, 100%), 1fr));
    align-items: center;
    padding: 3.75rem 2rem 2.5rem;
    background: linear-gradient(135deg, #f2f5ff 0%, #fff8ef 100%);
  }

  .hero-content h1 {
    font-size: 2.25rem;
    margin: 0.75rem 0 1rem;
    font-family: 'Playfair Display', 'Times New Roman', serif;
  }

  .eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    color: #8f6b4f;
    margin: 0;
  }

  .lead {
    font-size: 1rem;
    color: #4d4a57;
    line-height: 1.7;
  }

  .hero-meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.8125rem;
    color: #6b4f3b;
    font-weight: 600;
  }

  .hero-panel {
    background: #1f1b2d;
    color: #f5f0e6;
    padding: 1.5rem;
    border-radius: 1.125rem;
    box-shadow: 0 1.125rem 2.5rem #1f1b2d33;
  }

  .panel-header {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .panel-grid {
    display: grid;
    gap: 0.75rem;
  }

  .panel-card {
    background: #ffffff14;
    padding: 0.75rem;
    border-radius: 0.75rem;
  }

  .panel-card h4 {
    margin: 0 0 0.375rem;
  }

  .project-section {
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 2.5rem 2rem;
  }

  .project-section h2 {
    margin-bottom: 1.25rem;
  }

  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(13.75rem, 100%), 1fr));
    gap: 1rem;
  }

  .module-grid article {
    padding: 1.125rem;
    border-radius: 0.875rem;
    background: #ffffff;
    box-shadow: 0 0.75rem 1.5rem #1f1b2d14;
  }

  .entry-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1.5rem;
    background: #ffffff;
    border-radius: 1.125rem;
    box-shadow: 0 1rem 2rem #1f1b2d14;
  }

  .entry-card h2 {
    margin: 0 0 0.5rem;
  }

  .entry-card p {
    margin: 0;
    color: #4d4a57;
  }

  @media (max-width: 45rem) {
    .project-hero,
    .project-section {
      padding-inline: 1rem;
    }

    .entry-card {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .project-section.dark {
    background: #1f1b2d;
    color: #f5f0e6;
    border-radius: 1.375rem;
  }

  .architecture-list {
    display: grid;
    gap: 0.75rem;
  }

  .arch-item {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.75rem 1rem;
    background: #ffffff14;
    border-radius: 0.75rem;
  }

  .arch-item span {
    font-weight: 700;
    color: #ff9f4a;
  }

  .showcase {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(13.75rem, 100%), 1fr));
  }

  .project-footer {
    display: flex;
    justify-content: center;
    padding: 1.25rem 0 3.75rem;
  }

  .btn {
    background: #ff9f4a;
    color: #1f1b2d;
    padding: 0.75rem 1.5rem;
    border-radius: 62.4375rem;
    text-decoration: none;
    font-weight: 600;
  }
</style>

<!-- @ts-nocheck -->
<script setup lang="ts">
// console 呼叫保留
console.log('ERP Project Page loaded')

definePageMeta({
  layout: 'erp',
})
</script>
