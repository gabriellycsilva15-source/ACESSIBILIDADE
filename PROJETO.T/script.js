const panel = document.getElementById("accessibilityPanel");
const panelToggle = document.getElementById("panelToggle");
const closePanel = document.getElementById("closePanel");
const openPanelButton = document.getElementById("openPanelButton");
const resetButton = document.getElementById("resetSettings");
const actionButtons = document.querySelectorAll(".action-btn");

const fontSizeInput = document.getElementById("fontSize");
const lineHeightInput = document.getElementById("lineHeight");
const letterSpacingInput = document.getElementById("letterSpacing");
const contrastToggle = document.getElementById("contrastToggle");
const darkModeToggle = document.getElementById("darkModeToggle");
const focusToggle = document.getElementById("focusToggle");
const motionToggle = document.getElementById("motionToggle");
const cursorToggle = document.getElementById("cursorToggle");

const fontSizeValue = document.getElementById("fontSizeValue");
const lineHeightValue = document.getElementById("lineHeightValue");
const letterSpacingValue = document.getElementById("letterSpacingValue");

const root = document.documentElement;

function safeUpdateToggle(toggle, value) {
  if (toggle) {
    toggle.checked = Boolean(value);
  }
}

function updatePanelState() {
  const isOpen = panel.classList.contains("open");
  panelToggle.setAttribute("aria-expanded", String(isOpen));
}

function setPanel(open) {
  panel.classList.toggle("open", open);
  updatePanelState();
}

function applySettings() {
  if (!fontSizeInput || !lineHeightInput || !letterSpacingInput) {
    return;
  }

  const fontScale = Number(fontSizeInput.value) / 100;
  const lineHeight = Number(lineHeightInput.value) / 100;
  const letterSpacing = Number(letterSpacingInput.value);

  root.style.setProperty("--font-scale", fontScale.toFixed(2));
  root.style.setProperty("--line-height", lineHeight.toFixed(2));
  root.style.setProperty("--letter-spacing", `${letterSpacing}px`);

  fontSizeValue.textContent = `${fontSizeInput.value}%`;
  lineHeightValue.textContent = lineHeight.toFixed(1);
  letterSpacingValue.textContent = `${letterSpacing}px`;

  document.body.classList.toggle("high-contrast", Boolean(contrastToggle && contrastToggle.checked));
  document.body.classList.toggle("dark-theme", Boolean(darkModeToggle && darkModeToggle.checked));
  document.body.classList.toggle("strong-focus", Boolean(focusToggle && focusToggle.checked));
  document.body.classList.toggle("reduced-motion", Boolean(motionToggle && motionToggle.checked));
  document.body.classList.toggle("large-cursor", Boolean(cursorToggle && cursorToggle.checked));
}

function resetSettings() {
  if (fontSizeInput) fontSizeInput.value = 100;
  if (lineHeightInput) lineHeightInput.value = 140;
  if (letterSpacingInput) letterSpacingInput.value = 0;
  safeUpdateToggle(contrastToggle, false);
  safeUpdateToggle(darkModeToggle, false);
  safeUpdateToggle(focusToggle, false);
  safeUpdateToggle(motionToggle, false);
  safeUpdateToggle(cursorToggle, false);
  applySettings();
}

function increaseFont() {
  if (!fontSizeInput) return;
  const nextValue = Math.min(Number(fontSizeInput.value) + 10, Number(fontSizeInput.max));
  fontSizeInput.value = nextValue;
  applySettings();
}

function decreaseFont() {
  if (!fontSizeInput) return;
  const nextValue = Math.max(Number(fontSizeInput.value) - 10, Number(fontSizeInput.min));
  fontSizeInput.value = nextValue;
  applySettings();
}

function toggleHighContrast() {
  if (!contrastToggle) return;
  contrastToggle.checked = !contrastToggle.checked;
  applySettings();
}

function readPage() {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta leitura por voz.");
    return;
  }

  window.speechSynthesis.cancel();

  const mainContent = document.querySelector("main");
  const textToRead = mainContent ? mainContent.innerText : document.body.innerText;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = "pt-BR";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

if (panelToggle) {
  panelToggle.addEventListener("click", () => {
    const isOpen = panel.classList.contains("open");
    setPanel(!isOpen);
  });
}

if (closePanel) closePanel.addEventListener("click", () => setPanel(false));
if (openPanelButton) openPanelButton.addEventListener("click", () => setPanel(true));
if (resetButton) resetButton.addEventListener("click", resetSettings);

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "increase-font") increaseFont();
    if (action === "decrease-font") decreaseFont();
    if (action === "toggle-contrast") toggleHighContrast();
    if (action === "read-page") readPage();
    if (action === "stop-reading") stopReading();

    button.setAttribute("aria-pressed", String(button.dataset.action === "toggle-contrast" ? contrastToggle.checked : false));
  });
});

[
  fontSizeInput,
  lineHeightInput,
  letterSpacingInput,
  contrastToggle,
  darkModeToggle,
  focusToggle,
  motionToggle,
  cursorToggle
].forEach((element) => {
  if (!element) return;
  element.addEventListener("input", applySettings);
  element.addEventListener("change", applySettings);
});

resetSettings();
if (panel) setPanel(false);
