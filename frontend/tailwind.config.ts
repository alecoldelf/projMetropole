
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88",
        background: "#0A0A0A"
      }
    }
  },
  plugins: []
}

export default config
