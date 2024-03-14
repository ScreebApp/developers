import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docSidebar: [
    {
      type: "category",
      label: "IOS SDK",
      collapsible: false,
      link: {
        type: "generated-index",
        description: "install and configure the SDK on IOS devices",
        slug: "/",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
        {
          type: "link",
          label: "Changelog",
          href: "https://screeb.notion.site/iOS-SDK-4ad6756875a14f2eb60711b86150a29d",
        },
      ],
    },
  ],
};

export default sidebars;
