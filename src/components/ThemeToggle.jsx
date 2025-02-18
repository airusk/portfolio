import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <label>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={ev => {
          setTheme(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark
    </label>
  )
}
