# 蒼鼎國際法律事務所 - 設計系統

> 由 ui-ux-pro-max 生成，基於 Trust & Authority 風格

---

## 🎨 色彩系統

### 主色調
結合參考圖片的深綠金色系與工具推薦的專業配色：

| 名稱 | HEX | 用途 |
|-----|-----|------|
| **深林綠** | `#1B3A2F` | 導航欄、頁尾、主背景 |
| **經典金** | `#C5A572` | 標題裝飾、圖標、高亮 |
| **深海軍藍** | `#0F172A` | 替代主色、文字 |
| **專業灰** | `#334155` | 次要文字 |
| **象牙白** | `#F8FAFC` | 背景 |
| **CTA 藍** | `#0369A1` | 行動按鈕 |

### CSS 變數
```css
:root {
  --color-primary: #1B3A2F;
  --color-accent: #C5A572;
  --color-navy: #0F172A;
  --color-gray: #334155;
  --color-bg: #F8FAFC;
  --color-cta: #0369A1;
  --color-text: #020617;
}
```

---

## 📝 字體系統

### 推薦配對：EB Garamond / Lato

| 用途 | 字體 | 權重 |
|-----|------|------|
| 標題 | EB Garamond | 500-700 |
| 內文 | Lato | 300-700 |

### Google Fonts 引入
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

### 中文補充
```css
font-family: 'EB Garamond', 'Noto Serif TC', serif;
font-family: 'Lato', 'Noto Sans TC', sans-serif;
```

---

## 🏗️ 頁面結構

### Landing Page 模式：Hero + Testimonials + CTA

```
1. Hero (品牌標語 + CTA)
2. Problem Statement (法律困境)
3. Solution Overview (服務簡介)
4. Services (圓餅圖 + 詳細分類)
5. Team (律師團隊)
6. Testimonials (客戶評價)
7. CTA (預約諮詢)
```

### 導航結構
- 首頁
- 關於蒼鼎
- 律師團隊
- 服務項目
- 預約諮詢

---

## 📊 圓餅圖設計

### 技術選擇：Chart.js 或 自訂 SVG

**設計規範：**
- 最多 5 個分類
- 對比色配色
- 大區塊優先排列
- 懸停顯示詳情
- 配合無障礙：提供文字清單備選

### 色彩分配
| 服務項目 | 顏色 |
|---------|------|
| 民事訴訟 | `#1B3A2F` |
| 刑事訴訟 | `#C5A572` |
| 家事訴訟 | `#0369A1` |
| 企業法律顧問 | `#334155` |
| 代撰法律文件 | `#64748B` |

---

## 🎭 UI 元件

### 按鈕
```css
.btn-primary {
  background: linear-gradient(135deg, #C5A572, #D4B896);
  color: #1B3A2F;
  padding: 12px 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary {
  border: 2px solid #C5A572;
  color: #C5A572;
  background: transparent;
}
```

### 卡片
```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.card:hover { transform: translateY(-4px); }
```

---

## 📱 響應式斷點

```css
/* Tailwind 斷點 */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### 重要規則
- 導航欄: `fixed top-0 z-50`
- Padding: `px-4 md:px-6 lg:px-8`
- 行動端選單: `hidden md:flex`

---

## ✨ 動畫效果

### 允許
- 平滑滾動: `scroll-behavior: smooth`
- 懸停變色: `transition-colors duration-200`
- 載入指示: `animate-spin`

### 避免
- 無限循環動畫
- 跳躍式錨點
- 水平滾動

---

## ✅ 交付前檢查清單

- [ ] 無 emoji 作為圖標（用 SVG）
- [ ] 所有可點擊元素有 `cursor-pointer`
- [ ] 懸停狀態過渡 150-300ms
- [ ] 文字對比度 ≥ 4.5:1
- [ ] 鍵盤可聚焦
- [ ] 支援 `prefers-reduced-motion`
- [ ] 響應式測試：375/768/1024/1440px
