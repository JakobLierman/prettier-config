/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  keywordCase: 'upper',
};

/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  plugins: [
    'prettier-plugin-sh',
    'prettier-plugin-packagejson',
    'prettier-plugin-properties',
    'prettier-plugin-prisma',
    'prettier-plugin-embed',
    'prettier-plugin-sql',
  ],
  ...prettierPluginSqlConfig,
};
