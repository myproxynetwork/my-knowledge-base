module.exports = {
  title: 'Mango Proxy Knowledge Base',
  tagline: 'Learn and manage your Mango Proxy setup',
  url: 'https://lighthearted-sawine-28b8cb.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
        { to: '/getting-started/system-requirements', label: 'Документация', position: 'left' },
        { href: 'https://github.com/myproxynetwork/my-knowledge-base', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'Начало работы', to: '/getting-started/system-requirements' },
            { label: 'Оплата и подписки', to: '/subscriptions/choose-subscription' },
            { label: 'FAQ', to: '/faq/solutions' },
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