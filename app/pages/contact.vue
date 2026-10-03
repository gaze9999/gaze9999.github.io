<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <h1>聯絡方式</h1>
      <p class="subtitle">Contact Me</p>
    </section>

    <!-- Contact Methods -->
    <section class="contact-section">
      <div class="contact-grid">
        <div class="contact-card">
          <div class="card-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
          <a href="mailto:gazell9999@gmail.com" class="contact-link">gazell9999@gmail.com</a>
          <p class="card-desc">歡迎透過 Email 聯繫, 討論作品或交流開發經驗</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">
            <i class="fab fa-github"></i>
          </div>
          <h3>GitHub</h3>
          <a href="https://github.com/gaze9999/" target="_blank" rel="noopener noreferrer" class="contact-link">github.com/gaze9999</a>
          <p class="card-desc">查看我的公開專案 與程式碼</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">
            <i class="fab fa-behance"></i>
          </div>
          <h3>Behance</h3>
          <a href="https://www.behance.net/gazellelin" target="_blank" rel="noopener noreferrer" class="contact-link">Gazellelin</a>
          <p class="card-desc">瀏覽我的設計作品集</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">
            <i class="fab fa-linkedin"></i>
          </div>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/lin-wei-76a142193/" target="_blank" rel="noopener noreferrer" class="contact-link">lin-wei-76a142193</a>
          <p class="card-desc">查看我的專業經歷與交流資訊</p>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section class="social-section">
      <h2>其他平台</h2>
      <div class="social-links">
        <a href="https://github.com/gaze9999/" target="_blank" rel="noopener noreferrer" class="social-link github" title="GitHub" aria-label="開啟 GitHub 個人頁面">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.behance.net/gazellelin" target="_blank" rel="noopener noreferrer" class="social-link behance" title="Behance" aria-label="開啟 Behance 個人頁面">
          <i class="fab fa-behance"></i>
        </a>
        <a href="https://www.linkedin.com/in/lin-wei-76a142193/" target="_blank" rel="noopener noreferrer" class="social-link linkedin" title="LinkedIn" aria-label="開啟 LinkedIn 個人頁面">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: '聯絡 | gaze9999',
  description: '透過 Email, GitHub, Behance 與 LinkedIn 聯繫 gaze9999, 交流作品與開發經驗',
})
</script>

<style scoped>
  .contact-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8f5f0 0%, #f0f7ff 60%, #f4fff8 100%);
  }

  /* Hero Section */
  .contact-hero {
    padding: 3.75rem 2.5rem;
    text-align: center;
    background: #d4c4a833;
  }

  .contact-hero h1 {
    font-size: 3rem;
    margin: 0 0 0.75rem;
    color: #1f1b2d;
    letter-spacing: 0.0625rem;
  }

  .subtitle {
    font-size: 0.875rem;
    color: #9a7c5a;
    margin: 0;
    letter-spacing: 0.0625rem;
  }

  /* Contact Section */
  .contact-section {
    padding: 3.75rem 2.5rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
    gap: 2rem;
    max-width: 75rem;
    margin: 0 auto;
  }

  .contact-card {
    background: #ffffff;
    padding: 2.5rem 2rem;
    border-radius: 0.75rem;
    text-align: center;
    box-shadow: 0 0.25rem 0.75rem #1f1b2d14;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 0.5rem 1.25rem #1f1b2d1f;
  }

  .card-icon {
    font-size: 3rem;
    color: #b27936;
    margin-bottom: 1.25rem;
  }

  .contact-card h3 {
    font-size: 1.375rem;
    margin: 0 0 1rem;
    color: #1f1b2d;
  }

  .contact-link {
    display: inline-block;
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: #ff9f4a;
  }

  .card-desc {
    margin: 0;
    font-size: 0.8125rem;
    color: #9a7c5a;
    line-height: 1.6;
  }

  /* Social Section */
  .social-section {
    padding: 3.75rem 2.5rem;
    text-align: center;
    background: #d4c4a826;
  }

  .social-section h2 {
    font-size: 2rem;
    margin: 0 0 2.5rem;
    color: #1f1b2d;
    letter-spacing: 0.0625rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .social-link {
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
    background: #ffffff;
    box-shadow: 0 0.25rem 0.75rem #1f1b2d14;
    transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }

  .social-link:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 0.5rem 1.25rem #1f1b2d1f;
  }

  .social-link.github {
    color: #333;
  }

  .social-link.github:hover {
    background: #333;
    color: #ffffff;
  }

  .social-link.behance {
    color: #1473e6;
  }

  .social-link.behance:hover {
    background: #1473e6;
    color: #ffffff;
  }

  .social-link.linkedin {
    color: #0a66c2;
  }

  .social-link.linkedin:hover {
    background: #0a66c2;
    color: #ffffff;
  }

  /* Responsive */
  @media (max-width: 48rem) {
    .contact-hero {
      padding: 2.5rem 1rem;
    }

    .contact-hero h1 {
      font-size: 2rem;
    }

    .contact-section {
      padding: 2.5rem 1rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .contact-card {
      padding: 1.5rem 1rem;
    }

    .social-section {
      padding: 2.5rem 1rem;
    }

    .social-section h2 {
      font-size: 1.5rem;
    }

    .social-links {
      gap: 1rem;
    }
  }
</style>
