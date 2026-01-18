export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme")
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  )
}