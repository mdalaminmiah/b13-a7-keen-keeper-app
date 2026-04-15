<div align="center">

### 👥 _Keep Your Friendships Alive — One Check-In at a Time_

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)
[![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

> 🌐 **[Live Demo →](#)** &nbsp;&nbsp;|&nbsp;&nbsp; 🐛 **[Report a Bug →](#)** &nbsp;&nbsp;|&nbsp;&nbsp; ✨ **[Request a Feature →](#)**

<br/>

---

</div>

## 📖 Table of Contents

- [💡 About The Project](#-about-the-project)
- [✨ Features At A Glance](#-features-at-a-glance)
- [🛠️ Tech Stack & Packages](#️-tech-stack--packages)
- [🚀 Getting Started](#-getting-started)
    - [✅ Prerequisites](#-prerequisites)
    - [📦 Clone & Install](#-clone--install)
    - [▶️ Run the App](#️-run-the-app)
- [📁 Project Structure](#-project-structure)
- [🗺️ App Pages — User Guide](#️-app-pages--user-guide)
- [🌍 Deployment Guide](#-deployment-guide)
- [📸 Screenshots](#-screenshots)
- [👨‍💻 Author](#-author)

---

## 💡 About The Project

<br/>

> _"We don't drift away from people because we stop caring — we drift because life gets busy."_

<br/>

**KeenKeeper** is a personal relationship management web app that helps you stay intentionally connected with your closest friends. It tracks when you last reached out, shows you who needs attention, and logs every interaction — calls, texts, and video chats — in a clean, visual timeline.

Think of it as a **personal CRM for friendships**, not business contacts.

<br/>

---

## ✨ Features At A Glance

<br/>

| #   | Feature                  | Description                                                               |
| --- | ------------------------ | ------------------------------------------------------------------------- |
| 🏠  | **Home Dashboard**       | View all friends in a responsive grid with color-coded status cards       |
| 👤  | **Friend Profiles**      | Full detail pages with stats, contact goals, bio, and action buttons      |
| ⚡  | **Quick Check-In**       | Log a Call, Text, or Video interaction in a single click                  |
| 📜  | **Interaction Timeline** | A full chronological history of all logged check-ins                      |
| 🔍  | **Timeline Filtering**   | Filter entries by interaction type: Call, Text, or Video                  |
| 📊  | **Friendship Analytics** | Recharts pie chart showing your communication habits breakdown            |
| 🔔  | **Toast Notifications**  | Instant feedback on every action via `react-hot-toast` & `react-toastify` |
| 📱  | **Fully Responsive**     | Works on all screen sizes — mobile, tablet, and desktop                   |
| 🚫  | **Custom 404 Page**      | A friendly, designed error page for unknown routes                        |
| ⏳  | **Loading States**       | Smooth loading animation while friend data is being fetched               |

<br/>

**Status Color System:**

| Status       | Color     | Meaning                                 |
| ------------ | --------- | --------------------------------------- |
| `on-track`   | 🟢 Green  | Last contact is within your goal range  |
| `almost due` | 🟡 Yellow | Getting close — time to reach out soon  |
| `overdue`    | 🔴 Red    | Past your contact goal — reach out now! |

<br/>

---

## 🛠️ Tech Stack & Packages

<br/>

### 🏗️ Core Framework

| Package               | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `next`                | React framework — App Router, SSR, file-based routing |
| `react` + `react-dom` | UI rendering                                          |

<br/>

### 🎨 Styling & UI

| Package          | Install Command                 | Purpose                                                        |
| ---------------- | ------------------------------- | -------------------------------------------------------------- |
| `tailwindcss`    | _(built-in with Next.js setup)_ | Utility-first CSS framework                                    |
| `daisyui`        | `npm i -D daisyui@latest`       | Tailwind UI component library — buttons, cards, badges, modals |
| `clsx`           | `npm install --save clsx`       | Conditional className helper                                   |
| `tailwind-merge` | `npm i tailwind-merge`          | Merge conflicting Tailwind classes safely                      |

> **DaisyUI plugin — add this to your `app/globals.css`:**
>
> ```css
> @plugin "daisyui";
> ```

<br/>

### 📣 Notifications

| Package           | Install Command                     | Purpose                                |
| ----------------- | ----------------------------------- | -------------------------------------- |
| `react-toastify`  | `npm install --save react-toastify` | Rich toast notification system         |
| `react-hot-toast` | `npm install react-hot-toast`       | Lightweight, elegant toast alternative |

<br/>

### 📊 Data Visualization

| Package    | Install Command        | Purpose                                    |
| ---------- | ---------------------- | ------------------------------------------ |
| `recharts` | `npm install recharts` | Pie chart on the Friendship Analytics page |

<br/>

### 🗄️ State Management

| Package   | Install Command       | Purpose                                                          |
| --------- | --------------------- | ---------------------------------------------------------------- |
| `zustand` | `npm install zustand` | Lightweight global store — manages timeline entries across pages |

<br/>

---

## 🚀 Getting Started

<br/>

### ✅ Prerequisites

Make sure you have these installed before starting:

| Tool        | Minimum Version    | Download                            |
| ----------- | ------------------ | ----------------------------------- |
| **Node.js** | v18.0.0 or higher  | [nodejs.org](https://nodejs.org/)   |
| **npm**     | v9.0.0 or higher   | Bundled with Node.js                |
| **Git**     | Any modern version | [git-scm.com](https://git-scm.com/) |

**Check your versions:**

```bash
node --version    # v18.x.x or higher
npm --version     # 9.x.x or higher
git --version     # git version x.x.x
```

<br/>

---

### 📦 Clone & Install

**Step 1 — Clone the repository**

```bash
git clone https://github.com/mdalaminmiah/B13-A6-DigiTools-Platform-App.git
```

**Step 2 — Navigate into the project folder**

```bash
cd B13-A6-DigiTools-Platform-App
```

**Step 3 — Install all dependencies**

```bash
npm install
```

This installs everything in `package.json` — Next.js, Tailwind, DaisyUI, Recharts, Zustand, react-toastify, react-hot-toast, clsx, and tailwind-merge.

<br/>

> 💡 **Want to set up from scratch?** Here's the exact install sequence used to build this project:
>
> ```bash
> # Step 1 — Create a new Next.js app
> npx create-next-app@latest B13-A6-DigiTools-Platform-App
> cd B13-A6-DigiTools-Platform-App
>
> # Step 2 — DaisyUI (Tailwind component library)
> npm i -D daisyui@latest
> # Then add to app/globals.css → @plugin "daisyui";
>
> # Step 3 — Toast notifications
> npm install --save react-toastify
> npm install react-hot-toast
>
> # Step 4 — Charts
> npm install recharts
>
> # Step 5 — State management
> npm install zustand
>
> # Step 6 — Class name utilities
> npm install --save clsx
> npm i tailwind-merge
> ```

<br/>

---

### ▶️ Run the App

**Start the development server:**

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:3000
```

The app supports **hot reloading** — any saved file change updates the browser instantly.

<br/>

**All available commands:**

| Command         | What It Does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Starts the dev server at `localhost:3000` |
| `npm run build` | Builds an optimized production bundle     |
| `npm run start` | Runs the production build locally         |
| `npm run lint`  | Lints the project with ESLint             |

<br/>

---

## 🗺️ App Pages — User Guide

<br/>

### 🏠 Home Page &nbsp;→&nbsp; `/`

The main landing page.

- **Navbar** — Logo left, nav links right (Home · Timeline · Stats), each with an icon. Active link is visually highlighted.
- **Banner** — Centered title, subtitle, and an _"Add a Friend"_ button.
- **Summary Cards** — 4 stat cards: Total Friends · Overdue · Almost Due · On-Track.
- **Friends Grid** — All friends from `friends.json` in a **4-column grid** (collapses on mobile/tablet).
    - Each card shows: photo, name, days since contact, tags, color-coded status.
    - Clicking a card → navigates to the **Friend Details page**.
- **Loading animation** is shown while data is fetching.

<br/>

---

### 👤 Friend Details Page &nbsp;→&nbsp; `/friend/:id`

Full profile view — two-column layout.

**Left Column — Info Card**

| Shown           | Details                             |
| --------------- | ----------------------------------- |
| Profile Picture | Friend's photo                      |
| Name            | Full name                           |
| Status Badge    | Green / Yellow / Red                |
| Tags            | e.g. "college", "work"              |
| Bio             | Personal note about this friendship |
| Email           | Friend's email                      |

**Action Buttons (UI only):**

| Button         | Icon |
| -------------- | ---- |
| Snooze 2 Weeks | ⏰   |
| Archive        | 📦   |
| Delete         | 🗑️   |

<br/>

**Right Column — 3 Sections**

**① Stats Cards**

- Days Since Contact · Goal (days) · Next Due Date

**② Relationship Goal Card**

- Displays your contact frequency goal with an Edit button.

**③ Quick Check-In Card**

| Button   | Timeline Entry Added                 | Notification   |
| -------- | ------------------------------------ | -------------- |
| 📞 Call  | _"Call with [Name]"_ + today's date  | ✅ Toast shown |
| 💬 Text  | _"Text with [Name]"_ + today's date  | ✅ Toast shown |
| 🎥 Video | _"Video with [Name]"_ + today's date | ✅ Toast shown |

<br/>

---

### 📜 Timeline Page &nbsp;→&nbsp; `/timeline`

Full interaction history.

- Shows all entries from the **Zustand global store** (populated via Quick Check-In).
- Each entry: date, icon (📞 / 💬 / 🎥), and title.
- **Filter bar**: All · Call · Text · Video.
- Sorted newest first by default.

<br/>

---

### 📊 Stats Page &nbsp;→&nbsp; `/stats`

Visual analytics via Recharts.

- **"Friendship Analytics"** heading.
- **Pie Chart** — Live breakdown of Call vs. Text vs. Video interactions.
- Data is read from the Zustand store — updates in real time as you log check-ins.

<br/>

---

### 🚫 404 Page

Shown for any invalid or unknown URL route.

- Custom message and a link back to Home.

<br/>

---

## 🌍 Deployment Guide

<br/>

### ▲ Deploy to Vercel _(Recommended)_

**Option A — GitHub Integration (Easiest)**

1. Push your code to a GitHub repository.
2. Visit [vercel.com](https://vercel.com) → **"Add New Project"** → Import your repo.
3. Vercel auto-detects Next.js — no config needed.
4. Click **"Deploy"** — live in about 60 seconds.

**Option B — Vercel CLI**

```bash
npm install -g vercel
vercel
```

> ✅ Next.js on Vercel requires **zero extra configuration**. Page reloads on dynamic routes work out of the box — no `vercel.json` needed.

<br/>

## 👨‍💻 Author

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-@mdalaminmiah-181717?style=flat-square&logo=github)](https://github.com/mdalaminmiah)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mdalaminmiah-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mdalaminmiah/)

<br/>

---

<div align="center">

### 🌟 If this project helped you, please star it!

_Built with ❤️ to keep friendships alive_

<br/>

[![Star on GitHub](https://img.shields.io/github/stars/mdalaminmiah/B13-A6-DigiTools-Platform-App
?style=social)](https://github.com/mdalaminmiah/B13-A6-DigiTools-Platform-App)

</div>
