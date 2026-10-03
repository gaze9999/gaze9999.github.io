<template>
  <div class="grid grid-cols-[240px_1fr] min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="bg-gray-900 text-amber-50 flex flex-col p-6">
      <div class="mb-7">
        <span class="text-lg font-bold block">購物後台</span>
        <span class="text-xs text-amber-50/70 mt-1.5 block">Commerce System</span>
      </div>
      
      <nav class="flex flex-col gap-2.5">
        <NuxtLink to="/projects" class="px-3 py-2.5 rounded-lg bg-white/8 text-sm transition-colors hover:bg-white/15 [&.router-link-active]:bg-white/20">
          ← 返回專案
        </NuxtLink>
        <NuxtLink to="/projects/erp" class="px-3 py-2.5 rounded-lg bg-white/8 text-sm transition-colors hover:bg-white/15 [&.router-link-active]:bg-white/20">
          系統總覽
        </NuxtLink>
      </nav>
      
      <div class="mt-auto text-xs text-amber-50/70">
        <p class="m-0">使用範例資料的後台示範</p>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col">
      <header class="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-900/8">
        <div>
          <p class="m-0 mb-1 text-xs tracking-widest uppercase text-amber-700">目前頁面</p>
          <h1 class="m-0 text-[26px] text-gray-900">{{ activeTitle }}</h1>
        </div>
        <div class="flex gap-2.5 items-center">
          <div class="flex flex-col gap-1 px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 text-xs font-semibold">
            <span>{{ currentUser.name }}</span>
            <span class="text-[11px] text-amber-700">{{ roleLabel }}</span>
          </div>
          <span class="px-3 py-1.5 rounded-full bg-orange-500 text-gray-900 text-xs font-semibold">展示環境</span>
          <span class="px-3 py-1.5 rounded-full border border-orange-500 text-orange-500 text-xs font-semibold">版本 v1.0</span>
        </div>
      </header>

      <section class="p-8">
        <p class="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">這是後台介面示範, 圖表與清單都使用範例資料. 切換角色可以查看不同的頁面權限, 未串接登入或後端系統</p>
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()

const erpStore = useErpStore()
const { currentUser } = storeToRefs(erpStore)

const roleLabel = computed(() => {
  return erpStore.roleLabels[currentUser.value.role] || currentUser.value.role
})

const activeTitle = computed(() => {
  if (route.path === '/projects/erp') {
    return '購物後台管理系統'
  }
  return '專案總覽'
})
</script>

<style scoped lang="scss">
/* Layout styles */
</style>
