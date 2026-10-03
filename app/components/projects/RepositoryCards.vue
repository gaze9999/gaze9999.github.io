<template>
  <div class="repository-grid">
    <article v-for="repository in repositories" :key="repository.url" class="repository-card">
      <p class="category">{{ repository.category }}</p>
      <h3>{{ repository.name }}</h3>
      <p class="description">{{ repository.description }}</p>
      <ul class="tags" :aria-label="`${repository.name} 技術與主題`">
        <li v-for="tag in repository.tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="actions">
        <a
          :href="repository.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${repository.name} GitHub (另開分頁)`"
          >GitHub <span aria-hidden="true">↗</span></a
        >
        <a
          v-if="repository.demo"
          :href="repository.demo"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${repository.name} 線上版本 (另開分頁)`"
          >線上版本 <span aria-hidden="true">↗</span></a
        >
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  import { repositories } from '~/modules/projects'
</script>

<style scoped>
  .repository-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
  .repository-card {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    border: 1px solid #20212b1a;
    border-radius: 1.2rem;
    background: #ffffffc9;
    color: #20212b;
  }
  .category {
    color: #a65327;
    font-size: 0.75rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
  }
  h3 {
    font-size: 1.4rem;
    margin: 0 0 0.8rem;
    line-height: 1.3;
  }
  .description {
    color: #676472;
    line-height: 1.8;
    font-size: 0.9rem;
    margin: 0;
    flex: 1;
  }
  .tags {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    padding: 0;
    margin: 1.25rem 0;
    list-style: none;
  }
  .tags li {
    background: #fff0e5;
    color: #8d431d;
    border-radius: 999px;
    padding: 0.3rem 0.65rem;
    font-size: 0.72rem;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  .actions a {
    color: #6b4f3b;
    font-weight: 700;
    text-decoration: none;
    padding: 0.5rem 0;
  }
  .actions a:hover {
    text-decoration: underline;
  }
  .actions a:focus-visible {
    outline: 3px solid #e87836;
    outline-offset: 4px;
    border-radius: 0.2rem;
  }
  @media (max-width: 65rem) {
    .repository-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 42rem) {
    .repository-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

<style>
  html.dark-mode .repository-card {
    background: #171b2acc;
    color: #f0f2f7;
    border-color: #ffffff1f;
  }
  html.dark-mode .repository-card .category,
  html.dark-mode .repository-card .actions a {
    color: #ffab73;
  }
  html.dark-mode .repository-card .description {
    color: #aeb4c2;
  }
  html.dark-mode .repository-card .tags li {
    background: #ff9f4a1f;
    color: #ffc399;
  }
</style>
