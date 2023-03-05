/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        '@pnpm/eslint-config',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
      },
    },
  ],
};

module.exports = config;
