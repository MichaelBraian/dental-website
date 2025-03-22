module.exports = {
  name: 'dental-website',
  type: 'next',
  framework: 'nextjs',
  appFiles: {
    main: 'app/page.tsx',
    layout: 'app/layout.tsx',
    i18nMain: 'app/[locale]/page.tsx',
    i18nLayout: 'app/[locale]/layout.tsx',
    globals: 'app/globals.css'
  },
  directories: {
    app: 'app',
    public: 'public',
    components: 'components'
  }
}; 