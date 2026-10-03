/** 公開作品的靜態介紹; category/tags 用於分類, url 指向原始碼, demo 僅提供已公開的試玩入口 */
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
    category: '遊戲 / 線上試玩',
    description:
      '以文字介面呈現的放置遊戲, 從配置工人與生產資源開始, 逐步建造設施並進行研究; 可備份存檔, 也會計算離線進度',
    tags: ['TypeScript', '放置遊戲', '瀏覽器存檔'],
    url: 'https://github.com/gaze9999/universe-idle',
    demo: 'https://gaze9999.github.io/universe-idle/',
  },
  {
    name: 'My Py Tools',
    category: '開發工具 / CLI 與桌面介面',
    description:
      '用 Python 整理 Angular / Nx 專案, 將文件轉成 Markdown, 並以 SHA-256 檢查檔案更新; 可透過指令或桌面介面操作',
    tags: ['Python', '文件處理', '開發流程'],
    url: 'https://github.com/gaze9999/my-py-tools',
  },
  {
    name: 'Codex Setup',
    category: 'Agent 工具 / 環境設定',
    description:
      '集中管理 Codex Skills, agent 指示與 MCP 安裝工具, 記錄設定變更, 方便安裝與重建開發環境',
    tags: ['Codex', 'Skills', 'MCP'],
    url: 'https://github.com/gaze9999/codex-setup',
  },
  {
    name: 'Codex Playbook',
    category: '文件 / 工作流程',
    description:
      '記錄使用 AI 輔助開發的經驗, 包含 prompt 範例, agent 分工方式與驗證步驟, 方便日後查閱與使用',
    tags: ['開發筆記', 'Prompt', '驗證'],
    url: 'https://github.com/gaze9999/codex-playbook',
  },
  {
    name: 'Local Activity Monitor',
    category: '開發工具 / 使用紀錄',
    description:
      '查看電腦上 Jev / Codex 的模型使用, 工具呼叫, 回應時間與 token 紀錄; 統計取自本機紀錄, 與供應商的帳戶用量可能有差異',
    tags: ['Python', '使用紀錄', '監看介面'],
    url: 'https://github.com/gaze9999/local-activity-monitor',
  },
  {
    name: 'Codex Sidebar Cleaner',
    category: '本機工具 / 工作區整理',
    description:
      '整理 Codex 側欄的過期項目與專案連結, 提供預覽, 備份與封存功能, 操作前會先要求確認',
    tags: ['Python', 'Codex', '預覽與備份'],
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
    title: '審計與監控',
    category: 'UI 示範 / 範例資料',
    description: '以範例資料展示操作紀錄, 權限資訊與稽核圖表',
    path: '/projects/audit',
  },
]
