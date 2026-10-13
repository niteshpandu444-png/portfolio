import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The Originkit Vector Wordmark is supplied third-party source that must
    // stay byte-for-byte verbatim (its base function name and some style
    // choices trip these rules). Exempt this one file only; the rest of the
    // project keeps full lint coverage.
    files: ["src/components/ui/vector-wordmark.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "prefer-const": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
