/** 公開作品的靜態介紹; category/tags 用於分類, url 指向原始碼, demo 提供公開的線上版本入口 */
export interface Repository {
  name: string
  category: string
  description: string
  tags: string[]
  url: string
  demo?: string
}

export const repositories: Repository[] = [
  {
    name: 'Universe Idle',
    category: '遊戲 / 開發中',
    description: '開發中的文字放置遊戲, 透過工人分配, 資源生產, 建築與研究推進遊戲進度',
    tags: ['TypeScript', '放置遊戲', '資源管理'],
    url: 'https://github.com/gaze9999/universe-idle',
    demo: 'https://gaze9999.github.io/universe-idle/',
  },
  {
    name: 'My Py Tools',
    category: '開發工具 / CLI 與桌面介面',
    description:
      '以 Python 建立的開發工具集, 用來盤點 Angular / Nx 專案, 將文件轉成 Markdown, 並檢查檔案更新',
    tags: ['Python', '文件處理', '開發流程'],
    url: 'https://github.com/gaze9999/my-py-tools',
  },
  {
    name: 'Codex Setup',
    category: 'Agent 工具 / 環境設定',
    description: '管理 Codex Skills, agent 指示與 MCP 環境設定, 整理開發工具的安裝與設定流程',
    tags: ['Codex', 'Skills', 'MCP'],
    url: 'https://github.com/gaze9999/codex-setup',
  },
  {
    name: 'Codex Playbook',
    category: '文件 / 工作流程',
    description: '整理 AI 協作開發的實務筆記, 收錄 prompt 範例, agent 分工方式與驗證流程',
    tags: ['開發筆記', 'Prompt', '驗證'],
    url: 'https://github.com/gaze9999/codex-playbook',
  },
  {
    name: 'Local Activity Monitor',
    category: '開發工具 / 使用紀錄',
    description: '以網頁介面查看 Jev / Codex 的模型使用, 工具呼叫, 回應時間與 token 統計',
    tags: ['Python', '使用紀錄', '統計介面'],
    url: 'https://github.com/gaze9999/local-activity-monitor',
  },
  {
    name: 'Codex Sidebar Cleaner',
    category: '本機工具 / 工作區整理',
    description: '整理 Codex 側欄中的過期項目與專案連結, 讓工作區的專案清單更清楚',
    tags: ['Python', 'Codex', '工作區管理'],
    url: 'https://github.com/gaze9999/codex-sidebar-cleaner',
  },
]

export const demonstrations = [
  {
    title: '購物後台管理',
    category: 'UI 示範 / 範例資料',
    description: '採購, 庫存, 財務與報表的後台介面示範',
    path: '/projects/shop-admin',
  },
  {
    title: '購物網站',
    category: 'UI 示範 / 範例資料',
    description: '商品輪播, 服務介紹與電商首頁的版面示範',
    path: '/projects/shop',
  },
  {
    title: '圖形設計',
    category: '視覺設計作品',
    description: '瀏覽視覺設計作品與相冊',
    path: '/projects/graphic-design',
  },
  {
    title: 'TGS 2025 展覽商爬蟲',
    category: '展覽商資料 / 爬蟲作品',
    description: '用 Python 收集 TGS 2025 展覽商資料, 可搜尋展覽商並查看統計',
    path: '/projects/python-scraper',
  },
  {
    title: '新聞整合',
    category: '介面與 API 整合示範',
    description: '瀏覽 FFXIV 新聞與維護公告',
    path: '/projects/news',
  },
  {
    title: 'YouTube 電視牆',
    category: '影音嵌入示範',
    description: '在同一個頁面加入, 播放與管理多部 YouTube 影片',
    path: '/projects/youtube',
  },
  {
    title: '後台稽核',
    category: 'UI 示範 / 範例資料',
    description: '以範例資料展示操作紀錄, 權限資訊與稽核圖表',
    path: '/projects/audit',
  },
]
