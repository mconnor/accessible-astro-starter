module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  pluginSearchDirs: false,
}
