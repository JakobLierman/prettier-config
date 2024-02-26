/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
  embeddedSqlIdentifiers: ['sql'],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: 'sql',
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
  ...prettierPluginEmbedConfig,
  ...prettierPluginSqlConfig,
};
