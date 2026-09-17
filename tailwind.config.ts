import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        // Token names retained from the skeleton so classnames stay stable across
        // components. Values sampled from the customer logo: `laub` is the
        // Gartenbau green ("Dachsanierung & Gartenbau"), `erde` the KOCER
        // vermilion-red (roofing wordmark). `kies` stays neutral warm gray.
        laub: {
          50: "#F0F4E8",
          100: "#DDE7C7",
          200: "#BFCF95",
          300: "#9FB668",
          400: "#7EA043",
          500: "#5F8A2C",
          600: "#4C6E23",
          700: "#39531A",
          800: "#293C13",
          900: "#1B270C"
        },
        erde: {
          50: "#FBEEEB",
          100: "#F5D2CB",
          200: "#EAA396",
          300: "#DE7660",
          400: "#D2523A",
          500: "#B8371F",
          600: "#952A17",
          700: "#712011",
          800: "#4E170C",
          900: "#2C0D06"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
