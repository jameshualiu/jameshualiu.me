import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
} satisfies Config;
