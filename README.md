# 🧵 Stitch.js

<p align="center">
  <img src="./public/logo.png" alt="Stitch.js Logo" width="120" align="center" />
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

## 📦 Installation

Just include the script in your project:

```html
<script type="module" src="./stitch.js"></script>
```

Or import it in your JS file:

```js
import { reactive, createEffect, render } from "./stitch.js";
```

---

## 🧠 Example

```js
const state = reactive({ count: 0 });

createEffect(() => {
  render(
    "#app",
    `<button onclick="increment()">Count: ${state.count}</button>`
  );
});

function increment() {
  state.count++;
}
```

---

## 📂 Folder Structure

```
stitch/
├── core/           # Core reactivity logic
├── docs/           # Entry page, logo, theme toggle
├── examples/       # Demos like weather-app
├── public/         # Assets like logo.svg
├── stitch.js       # Framework entry point
└── README.md
```

---

## 🧪 Try It

👉 [View Weather Demo](./examples/weather-app/index.html)

---

## 🌗 Theme Support

The homepage includes light/dark mode toggling via a simple `<button>`.

---

## 📌 License

MIT License. Use it freely and build something awesome.

---

## ✨ Author

Built with care by [Ahmed Lotfi](https://github.com/AhmedLotfi8)

```


```
