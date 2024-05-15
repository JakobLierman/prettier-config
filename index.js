const vercelConfig = require('@vercel/style-guide/prettier');

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  keywordCase: 'upper',
};

/** @type {import("prettier").Config} */
module.exports = {
  ...vercelConfig,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sh',
    'prettier-plugin-packagejson',
    'prettier-plugin-properties',
    'prettier-plugin-prisma',
    'prettier-plugin-embed',
    'prettier-plugin-sql',
  ],
  tailwindFunctions: ['clsx', 'cn', 'classnames', 'twMerge', 'twJoin'],
  ...prettierPluginSqlConfig,
};
