export const toggleTheme = () => {
  const html = document.documentElement
  html.classList.toggle('dark')
  const isDark = html.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  }
}