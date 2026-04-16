# 1do 官网（1do-website）

Next.js 15 + React 19 的 1do 官方站点，沿用 1do-core 的粉色背景与 frosted glass 视觉，链接到 1do App、1do Store 与 Labs。

## 快速开始
- 安装依赖：`npm install`
- 本地开发：`npm run dev`（默认 3000）
- 产物构建：`npm run build`
- 代码检查：`npm run lint`

## 结构说明
- `src/app/layout.tsx`：页面基础框架，包含品牌字体与 favicon 链接。
- `src/app/page.tsx`：单页内容与导航，CTA 指向 App / Store / Labs。
- `src/app/globals.css`：品牌色、背景光斑、Material 图标与字体（复用 1do-core 公共资源）。
- `public/`：从 1do-core 拷贝的字体与图标（Space Grotesk、Material Symbols、favicon）。

若需调整跳转地址，可直接修改 `LINKS`（`src/app/page.tsx` 顶部）。内容文案依据 1do-core（1do Account 前端与 SDK）与 1do-store（合约与 Store）整理，可按发布节奏更新。
