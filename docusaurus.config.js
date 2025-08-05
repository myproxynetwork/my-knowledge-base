module.exports = {
  title: 'Mango Proxy Knowledge Base',
  tagline: 'Learn and manage your Mango Proxy setup',
  url: 'https://lighthearted-sawine-28b8cb.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myproxynetwork',
  projectName: 'my-knowledge-base',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/myproxynetwork/my-knowledge-base/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Mango Proxy',
      logo: {
        alt: 'Mango Proxy Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/', label: 'Документация', position: 'left' },
        { to: '/guides', label: 'Гайды', position: 'left' },
        { to: '/faq', label: 'FAQ', position: 'left' },
        { href: 'https://github.com/myproxynetwork/my-knowledge-base', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'Начало работы', to: '/' },
            { label: 'Гайды', to: '/guides' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            { label: 'GitHub', href: 'https://github.com/myproxynetwork/my-knowledge-base' },
          ],
        },
        {
          title: 'Поддержка',
          items: [
            { label: 'Чат', href: 'https://mangoproxy.com/support' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mango Proxy`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};