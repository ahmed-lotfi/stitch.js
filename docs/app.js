import { render } from "../src/render.js";

document.getElementById("toggleTheme").onclick = () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
};

render(
  "#container",
  `
  <div class="landing">
    <img src="../public/logo.png" alt="Stitch.js Logo" width="120" />
    <h1>Welcome to <span class="accent">Stitch.js</span></h1>
    <p>A tiny reactive JavaScript framework.</p>
    <a class="demo-link" href="../examples/weather-app/index.html">▶ Try the Weather Demo</a>
  </div>
`
);
