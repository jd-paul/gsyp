// eslint.config.mjs
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Ignore generated stuff
  {
    ignores: ["**/node_modules/**", ".next/**", "out/**", "dist/**"],
  },

  // Next.js + TypeScript base configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Project overrides
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Turn common blockers into warnings (won't fail builds)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "no-unused-vars": "off", // rely on the TS rule above
      "react-hooks/exhaustive-deps": "off", // your code intentionally diverges
      "react/no-unescaped-entities": "off", // allow apostrophes in JSX text
    },
  },
];
