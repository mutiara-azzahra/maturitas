import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

/*
 * Need to disable some ESLint rules?
 * Learn more: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
 *
 * Cara menonaktifkan aturan ESLint:
 *
 * 1. Untuk baris tertentu:
 *    // eslint-disable-next-line @typescript-eslint/no-unused-vars
 *    const unused = 123;
 *
 * 2. Untuk seluruh file:
 *    /* eslint-disable @typescript-eslint/no-unused-vars *\/
 *
 * 3. Untuk seluruh project (tambahkan di bawah ini):
 *    {
 *      rules: {
 *        "@typescript-eslint/no-unused-vars": "off",
 *        // aturan lain
 *      },
 *    },
 */
