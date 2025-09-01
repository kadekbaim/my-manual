module.exports = {
  title: 'Manual Book Komputer',
  tagline: 'Panduan singkat, mudah dimengerti',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dyn-duphan', // bisa diganti
  projectName: 'my-manual',
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
