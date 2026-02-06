# 🎨 Kraviona – Brand Color System (README)

This README defines the **official color system** for the Kraviona website and UI.
The palette is custom-built for a **dark, premium tech brand** with **blue–orange accents** and **sky variants**.

---

## 🔹 Base Theme Overview

* **Theme Type:** Dark / Premium / Tech
* **Primary Mood:** Calm, confident, professional
* **Design Goal:** Unique identity (non-generic SaaS look)

---

## 🧱 Dark Foundation Colors

### 1️⃣ Primary Background – Obsidian Blue

```
#0A0F1A
```

**Use:**

* Full website background
* Hero section
* Footer

Visual:
🟦🟦🟦 (Very dark blue, almost black)

---

### 2️⃣ Secondary Background – Graphite Navy

```
#141B2D
```

**Use:**

* Cards
* Sections
* Navbar
* Modals

Visual:
🟦🟦 (Dark navy surface)

---

## ✍️ Text Colors (Light)

### 3️⃣ Primary Text – Soft White

```
#EDEFF4
```

**Use:**

* Headings (H1–H6)
* Main content
* Logo text

Visual:
⬜⬜⬜ (Soft white, not harsh)

---

### 4️⃣ Secondary Text – Cool Ash

```
#9AA3B2
```

**Use:**

* Paragraph text
* Labels
* Footer content

Visual:
⬜◽◽ (Muted gray)

---

## 🔵 Blue Brand System (Core Identity)

### 5️⃣ Primary Brand Blue – Deep Sky Indigo

```
#3B4EFF
```

**Use:**

* Primary buttons
* Active links
* Icons
* Highlights

Visual:
🔵🔵 (Strong but premium blue)

---

### 6️⃣ Blue Hover / Active State

```
#2F3ED9
```

**Use:**

* Button hover
* Active states

Visual:
🔵 (Darker blue)

---

### 7️⃣ Sky Variant – Light Tech Blue

```
#7DA2FF
```

**Use:**

* Secondary buttons
* Badges
* Info highlights
* Charts

Visual:
🔹🔹 (Soft sky blue)

---

## 🟠 Orange Accent System (Controlled Use)

> ⚠️ Orange is **accent-only**, never dominant.

### 8️⃣ Premium Orange – Muted Amber

```
#FF9F45
```

**Use:**

* Small highlights
* Notifications
* Attention indicators

Visual:
🟠 (Warm but not loud)

---

### 9️⃣ Soft Orange – Light Accent

```
#FFD2A8
```

**Use:**

* Background glow
* Subtle UI accents

Visual:
🟧 (Soft pastel orange)

---

## 🧩 Borders & Dividers

### 🔟 Border Color – Carbon Line

```
#1E2538
```

**Use:**

* Card borders
* Section dividers
* Input outlines

Visual:
⬛⬛ (Dark divider)

---

## 🎯 Recommended Usage Ratio

```
60%  Dark backgrounds (#0A0F1A, #141B2D)
20%  Text (White + Gray)
12%  Blue system (Primary + Sky)
8%   Orange accents (Very limited)
```

---

## 🔘 Button Color Guide

### Primary Button

* Background: `#3B4EFF`
* Text: `#EDEFF4`
* Hover: `#2F3ED9`

### Secondary Button

* Background: Transparent
* Border: `#7DA2FF`
* Text: `#7DA2FF`
* Hover BG: `#141B2D`

---

## 🧾 CSS Variables (Direct Use)

```css
:root {
  --bg-main: #0A0F1A;
  --bg-surface: #141B2D;

  --text-primary: #EDEFF4;
  --text-secondary: #9AA3B2;

  --blue-primary: #3B4EFF;
  --blue-hover: #2F3ED9;
  --blue-sky: #7DA2FF;

  --orange-accent: #FF9F45;
  --orange-soft: #FFD2A8;

  --border-color: #1E2538;
}
```

---

## ✅ Final Notes

* This color system is **unique to Kraviona**
* Avoid adding random colors
* Keep orange usage minimal
* Blue is the primary brand identity

> 🔒 **This README acts as the official brand color reference.**
