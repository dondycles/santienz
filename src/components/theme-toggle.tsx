import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export default function ThemeToggle() {
	function toggleTheme() {
		if (
			document.documentElement.classList.contains("dark") ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.remove("dark")
			localStorage.theme = "light"
		} else {
			document.documentElement.classList.add("dark")
			localStorage.theme = "dark"
		}
	}
	return (
		<Button onClick={toggleTheme} size={"icon"} variant={"secondary"}>
			<Sun className="not-dark:hidden size-6 dark:block" />
			<Moon className="not-dark:block size-6 dark:hidden " />
		</Button>
	)
}
