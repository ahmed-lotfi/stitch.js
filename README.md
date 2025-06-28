
# 🧵 Stitch.js

<p align="center">
  <img src="./public/logo.png" alt="Stitch.js Logo" width="120" />
</p>

<h1 align="center">Stitch.js 🧵</h1>

<p align="center">
  <strong>A tiny reactive JavaScript framework to stitch your UI together.</strong>
</p>

---

## 🚀 Features

- ✅ Reactive state management
- ✅ Automatic DOM updates
- ✅ Tiny & dependency-free
- ✅ Simple API
- ✅ Supports light/dark mode

---

## 📦 Installation (via npm + Vite)

```bash
npm create vite@latest my-app -- --template vanilla
cd my-app
npm install
npm install stitchjs-mini
npm run dev
````

---

## 🔌 Usage

```js
// main.js
import { reactive, createEffect, render } from "stitchjs-mini";

const state = reactive({ count: 0 });

createEffect(() => {
  render("#app", `
    <h1>Count: ${state.count}</h1>
    <button id="inc">Increment</button>
  `);

  document.getElementById("inc").onclick = () => {
    state.count++;
  };
});
```

```html
<!-- index.html -->
<div id="app"></div>
<script type="module" src="/main.js"></script>
```

---

## 📂 Folder Structure

```
stitch/
├── src/            # Core framework modules
├── docs/           # Landing page (with theme toggle)
├── examples/       # Demo apps like weather-app
├── public/         # Logo and shared assets
├── package.json    # npm package config
└── README.md
```

---

## 🧪 Try the Example

👉 [View Weather Demo](https://weather-stitch-demo.vercel.app/)

---

## 🌗 Theme Support

The homepage supports toggling between light and dark themes.

---

## 📌 License

MIT License. Free to use, modify, and share.

---

## ✨ Author

Built with care by [Ahmed Lotfi](https://github.com/ahmed-lotfi)


