<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center gap-4 sm:gap-6">
        <NuxtLink to="/projects" class="text-gray-500 hover:text-gray-900 text-sm transition-colors">
          ← 返回專案
        </NuxtLink>
        <h1 class="text-2xl font-semibold text-gray-900">Python 爬蟲展示</h1>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <p class="mb-6 text-sm text-gray-600">此頁展示 TGS 2025 固定資料集與查詢介面, 不會在瀏覽時執行爬蟲或更新展覽資訊</p>
      <slot />
    </main>
  </div>
</template>
