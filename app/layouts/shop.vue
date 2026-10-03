<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center gap-4 sm:gap-6">
        <NuxtLink to="/projects" class="text-gray-500 hover:text-gray-900 text-sm transition-colors">
          ← 返回專案
        </NuxtLink>
        <h1 class="text-2xl font-semibold text-gray-900">商城展示</h1>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <p class="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">這是商城介面示範, 商品, 價格與優惠都是展示內容. 目前無法下單或付款, 也未提供客服服務</p>
      <slot />
    </main>
  </div>
</template>
