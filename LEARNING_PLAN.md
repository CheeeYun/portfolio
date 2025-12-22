# 🎯 前端開發者面試準備計劃

> **目標職位**：前端開發者  
> **學習期限**：1 個月  
> **專案目的**：透過實作 Portfolio 專案來複習並精通所需技術

---

## 📋 技術需求總覽

根據職缺描述，需要掌握以下技術：

| 技術領域 | 具體技術 | 優先級 |
|---------|---------|--------|
| 前端框架 | Vue.js 3 (Composition API) | ⭐⭐⭐ |
| SSR 框架 | Nuxt.js 3 | ⭐⭐⭐ |
| API 整合 | RESTful API / Fetch / Axios | ⭐⭐⭐ |
| 樣式技術 | SCSS/SASS, PostCSS | ⭐⭐ |
| 基礎技術 | HTML5, CSS3 | ⭐⭐ |
| UI/UX | 響應式設計, 使用者體驗 | ⭐⭐ |
| 版本控制 | Git | ⭐⭐ |

---

## 📅 四週學習時程表

### 第一週：基礎複習與環境建置

#### Day 1-2: 環境設定與 Git 複習
- [ ] 設定開發環境 (Node.js, VS Code, 擴充套件)
- [ ] 複習 Git 基本操作 (commit, branch, merge, rebase)
- [ ] 建立 Portfolio 專案並推送至 GitHub
- [ ] 設定 `.gitignore` 和專案結構

#### Day 3-4: HTML5 與 CSS3 複習
- [ ] 複習語意化 HTML 標籤
- [ ] 複習 CSS Flexbox 和 Grid 佈局
- [ ] 練習響應式設計 (RWD)
- [ ] 學習 CSS 變數和現代 CSS 特性

#### Day 5-7: SCSS/SASS 與 PostCSS
- [ ] SCSS 變數、巢狀、mixin、函式
- [ ] 設定專案的 SCSS 架構 (7-1 模式)
- [ ] PostCSS 設定與 autoprefixer
- [ ] 建立 Portfolio 的樣式基礎

---

### 第二週：Vue.js 3 深入學習

#### Day 8-10: Vue 3 基礎
- [ ] Composition API vs Options API
- [ ] `ref`, `reactive`, `computed`, `watch`
- [ ] 生命週期鉤子 (Lifecycle Hooks)
- [ ] 模板語法與指令 (v-if, v-for, v-model, v-bind)

#### Day 11-12: Vue 3 進階
- [ ] 元件通訊 (props, emit, provide/inject)
- [ ] 插槽 (Slots) 使用
- [ ] 自訂指令 (Custom Directives)
- [ ] 組合式函式 (Composables)

#### Day 13-14: Vue Router 與狀態管理
- [ ] Vue Router 4 設定與使用
- [ ] 動態路由與路由守衛
- [ ] Pinia 狀態管理
- [ ] 在 Portfolio 中實作頁面導航

---

### 第三週：Nuxt.js 3 框架

#### Day 15-17: Nuxt 3 基礎
- [ ] Nuxt 3 專案結構理解
- [ ] 檔案系統路由 (File-based Routing)
- [ ] 頁面與佈局 (Pages & Layouts)
- [ ] 伺服器端渲染 (SSR) 概念

#### Day 18-19: Nuxt 3 進階功能
- [ ] `useFetch`, `useAsyncData` 資料獲取
- [ ] Nuxt 插件與模組
- [ ] SEO 與 Meta 標籤設定
- [ ] 錯誤處理與載入狀態

#### Day 20-21: API 整合
- [ ] RESTful API 概念複習
- [ ] 使用 `$fetch` 或 Axios 呼叫 API
- [ ] API 錯誤處理
- [ ] 在 Portfolio 中整合外部 API（如 GitHub API）

---

### 第四週：專案完成與面試準備

#### Day 22-24: Portfolio 專案完善
- [ ] 完成所有頁面開發
  - [ ] 首頁 (Hero Section)
  - [ ] 關於我 (About)
  - [ ] 技能展示 (Skills)
  - [ ] 作品集 (Projects)
  - [ ] 聯絡方式 (Contact)
- [ ] 響應式設計調整
- [ ] 效能優化

#### Day 25-26: 部署與測試
- [ ] 建置專案 (`npm run build`)
- [ ] 部署到 Vercel 或 Netlify
- [ ] 跨瀏覽器測試
- [ ] Lighthouse 效能評估

#### Day 27-28: 面試準備
- [ ] 準備技術面試常見問題
- [ ] 準備專案 Demo 和說明
- [ ] 複習 JavaScript 基礎概念
- [ ] 模擬面試練習

---

## 🏗️ Portfolio 專案結構規劃

```
portfolio/
├── app/
│   └── app.vue
├── assets/
│   └── scss/
│       ├── abstracts/     # 變數、mixin、函式
│       ├── base/          # 重置、排版
│       ├── components/    # 元件樣式
│       ├── layout/        # 佈局樣式
│       └── main.scss      # 主要入口
├── components/
│   ├── common/            # 通用元件
│   ├── layout/            # 佈局元件
│   └── sections/          # 頁面區塊元件
├── composables/           # 組合式函式
├── layouts/               # Nuxt 佈局
├── pages/                 # 頁面
├── plugins/               # Nuxt 插件
├── public/                # 靜態資源
├── stores/                # Pinia 狀態
└── nuxt.config.ts
```

---

## 📚 學習資源

### 官方文件
- [Vue.js 3 官方文件](https://vuejs.org/)
- [Nuxt 3 官方文件](https://nuxt.com/)
- [Pinia 官方文件](https://pinia.vuejs.org/)
- [Vue Router 4 官方文件](https://router.vuejs.org/)

### 教學影片
- Vue Mastery
- Nuxt Nation
- LearnVue YouTube 頻道

### CSS 相關
- [SASS 官方文件](https://sass-lang.com/)
- [PostCSS 官方文件](https://postcss.org/)
- [CSS Tricks](https://css-tricks.com/)

---

## ✅ 每日檢核

每天結束時自問：
1. 今天學到了什麼新概念？
2. 有什麼卡關的地方需要明天解決？
3. 進度是否符合預期？
4. 專案有什麼新進展？

---

## 🎤 面試常見問題準備

### Vue.js 相關
- Vue 2 和 Vue 3 的主要差異？
- Composition API 的優點？
- Vue 的響應式原理是什麼？
- 說明 Vue 的生命週期

### Nuxt.js 相關
- SSR vs CSR vs SSG 的差異？
- Nuxt 3 的資料獲取方式？
- 如何處理 SEO？

### 一般前端
- 網頁效能優化的方法？
- 跨域問題如何解決？
- 說明 HTTP 快取機制

---

## 📝 備註

- 每天至少投入 **3-4 小時** 學習
- 遇到問題先嘗試自己解決，培養問題解決能力
- 定期 commit 程式碼，記錄學習軌跡
- 可依實際情況調整時程

---

> 💪 **加油！一個月後你會成為更好的前端開發者！**
