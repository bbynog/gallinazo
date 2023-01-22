/** @type {import("prettier").Config} */
module.exports = {
  rintWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
};
