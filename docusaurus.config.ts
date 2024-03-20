import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

function filterHiddenDocs(items) {
  return items.filter((item) => item.className !== 'hidden');
}

function filterHiddenSidebarItems(items) {
  
  return items.map((item) => {
    //console.log(item);
    
    if (item.type === 'category') {
      return {
        ...item,
        items: filterHiddenDocs(item.items),
      };
    }
    return item
  });
}

function filterHiddenCategoryDocPreview(docs) {
  return docs.filter((doc) => doc.frontMatter["sidebar_class_name"] !== "hidden")
}

const gtm = {
  containerId: 'GTM-WS25WNNJ',
};

const screebTag = {
  tagName: 'script',
  attributes:{
    type: "application/javascript",
  },
  innerHTML: `
(function (s,c,r,ee,b) {
s['ScreebObject']=r;s[r]=s[r]||function(){var d=arguments;return new Promise(function(a,b){(s[r].q=s[r].q||[]).push({v:1,args:d,ok:a,ko:b})})};
b=c.createElement('script');b.type='text/javascript';
b.id=r;b.src=ee;b.async=1;c.getElementsByTagName("head")[0].appendChild(b);
}(window,document,'$screeb','https://t2.screeb.app/tag.js'));
$screeb('init', 'c05786bb-1e67-4da8-ad89-f33acc29bc72');
`,
};

const config: Config = {
  title: 'Screeb',
  tagline: 'Screeb Developer doc',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://screeb.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'developers.screeb.app',
  organizationName: 'screeb',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    screebTag,
  ],

  presets: [
    [
      'classic',
      {

        googleTagManager: gtm,

        docs: {
          path: 'docs/home',
          routeBasePath: '/',

          sidebarPath: false,
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            args.docs = filterHiddenCategoryDocPreview(args.docs);
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            
            return filterHiddenSidebarItems(sidebarItems);
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-js',
        path: 'docs/sdk-js',
        routeBasePath: 'sdk-js',
        sidebarPath: './sidebars/sidebar-sdk-js.ts',

        versions: {
          current: {
            label: 'SDK JS',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-android',
        path: 'docs/sdk-android',
        routeBasePath: 'sdk-android',
        sidebarPath: './sidebars/sidebar-sdk-android.ts',

        versions: {
          current: {
            label: 'SDK Android',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-ios',
        path: 'docs/sdk-ios',
        routeBasePath: 'sdk-ios',
        sidebarPath: './sidebars/sidebar-sdk-ios.ts',

        versions: {
          current: {
            label: 'SDK IOS',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-react-native',
        path: 'docs/sdk-react-native',
        routeBasePath: 'sdk-react-native',
        sidebarPath: './sidebars/sidebar-sdk-react-native.ts',

        versions: {
          current: {
            label: 'SDK React Native',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-flutter',
        path: 'docs/sdk-flutter',
        routeBasePath: 'sdk-flutter',
        sidebarPath: './sidebars/sidebar-sdk-flutter.ts',

        versions: {
          current: {
            label: 'SDK Flutter',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'npm-packages',
        path: 'docs/npm-packages',
        routeBasePath: 'npm-packages',

        versions: {
          current: {
            label: 'NPM Packages',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-and-connectors',
        path: 'docs/api-and-connectors',
        routeBasePath: 'api-and-connectors',
        sidebarPath: './sidebars/sidebar-api-and-connectors.ts',

        versions: {
          current: {
            label: 'API and connectors',
          },
        },
      },
    ],
    [require.resolve('docusaurus-lunr-search'),
    {
      excludeRoutes: [
        'sdk-js/feature-flagging',
        'sdk-js/device-tracking',
        'api-and-connectors/response-api',
      ],
      disableVersioning: true
    }
  ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Screeb Logo',
        src: 'img/favicon.png',
        href: '/sdk-js/'
      },
      hideOnScroll: true,
      items: [
        {
          type: 'dropdown',
          label: 'SDK',
          docsPluginId: 'sdk-js',
          items: [
            {
              label: 'SDK JS',
              to: 'sdk-js',
            },
            {
              label: 'SDK Android',
              to: 'sdk-android',
            },
            {
              label: 'SDK IOS',
              to: 'sdk-ios',
            },
            {
              label: 'SDK React Native',
              to: 'sdk-react-native',
            },
            {
              label: 'SDK Flutter',
              to: 'sdk-flutter',
            },
            {
              label: 'NPM Packages',
              to: 'npm-packages',
            },
          ]
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'api-and-connectors',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'docSidebar',
            }
          ]
        },
        {
          to: 'https://help.screeb.app',
          label: 'Help Center',
          position: 'right',
        },
        {
          to: 'https://changelog.screeb.app',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://github.com/ScreebApp/developers',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/screebapp',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/screeb.app/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://screeb.app',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ScreebApp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Screeb, Inc.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
