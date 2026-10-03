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
    category: '遊戲 / 地面原型',
    description:
      '文字增量與放置遊戲的試玩版, 從工人配置與資源生產逐步發展建築及研究; 支援本機存檔備份與離線結算',
    tags: ['TypeScript', '放置遊戲', '本機存檔'],
    url: 'https://github.com/gaze9999/universe-idle',
    demo: 'https://gaze9999.github.io/universe-idle/',
  },
  {
    name: 'My Py Tools',
    category: '開發工具 / CLI 與桌面介面',
    description:
      'Python 工具集, 整合 Angular / Nx 專案盤點, 文件轉 Markdown, SHA-256 更新檢查與驗證紀錄; 提供 CLI 與桌面介面',
    tags: ['Python', '文件處理', '開發流程'],
    url: 'https://github.com/gaze9999/my-py-tools',
  },
  {
    name: 'Codex Setup',
    category: 'Agent 工具 / 環境設定',
    description:
      '以版本控制管理 Skills, agent 指示與 MCP 安裝工具, 讓個人開發環境的設定與安裝流程能被追蹤及重建',
    tags: ['Codex', 'Skills', 'MCP'],
    url: 'https://github.com/gaze9999/codex-setup',
  },
  {
    name: 'Codex Playbook',
    category: '文件 / 工作流程',
    description:
      '整理 coding-agent 工作流程, prompt 範例, 分工與驗證方法, 將實作經驗轉成可重複參考的工程筆記',
    tags: ['工程方法', 'Prompt', '驗證'],
    url: 'https://github.com/gaze9999/codex-playbook',
  },
  {
    name: 'Local Activity Monitor',
    category: '本機工具 / 活動監看',
    description:
      '用 Python 與網頁介面觀察本機 Jev / Codex 的 model, tool, 延遲與 token metadata; 統計來自本機觀測, 不代表供應商帳戶用量',
    tags: ['Python', 'Metadata', '本機 Dashboard'],
    url: 'https://github.com/gaze9999/local-activity-monitor',
  },
  {
    name: 'Codex Sidebar Cleaner',
    category: '本機工具 / 工作區整理',
    description: '整理過期的 Codex 側欄索引與專案參照, 透過預覽, 備份與明確確認執行封存流程',
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
    description: '視覺設計與作品相冊的呈現方式',
    path: '/projects/graphic-design',
  },
  {
    title: 'TGS 2025 展覽商爬蟲',
    category: '資料擷取成果',
    description: 'Python 擷取的 TGS 2025 展覽商資料, 提供搜尋與統計呈現',
    path: '/projects/python-scraper',
  },
  {
    title: '新聞整合',
    category: '介面與 API 整合示範',
    description: 'FFXIV 新聞與維護公告的資訊呈現',
    path: '/projects/news',
  },
  {
    title: 'YouTube 電視牆',
    category: '影音嵌入示範',
    description: '多影片嵌入與管理的互動介面',
    path: '/projects/youtube',
  },
  {
    title: '審計與監控',
    category: 'UI 示範 / 範例資料',
    description: '操作紀錄, 權限與監控資訊的 Dashboard 示範',
    path: '/projects/audit',
  },
]
