import { aisSiderbar } from "../sidebars/ais/ais-sidebar";

export const enConfig = {
  lang: "en",
  title: "VRChat Aerospace University",
  descrption: "A small group that develops Sacc-based aircraft and supporting facilities.",
  themeConfig: {
    logo: "/VAU.svg",
    nav: nav(),
    sidebar: {
      "/en/guide/": guideSidebar(),
      "/en/v320neo/": v320neoSidebar(),
      "/en/airport/": aisSiderbar(),
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-2023 VRChat Aerospace University",
    },
    editLink: {
      pattern: "https://github.com/Misaka-L/vau-web/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
};

function nav() {
  return [
    {
      text: "Guide",
      link: "/en/guide/getting-started",
    },
    {
      text: "AIS",
      link: "/en/airport/",
    },
    {
      text: "VAU320neo",
      link: "/en/v320neo/introduce",
    },
  ];
}

function guideSidebar() {
  return [
    {
      text: "Guide",
      items: [
        {
          text: "Getting Started",
          link: "/en/guide/getting-started",
        },
        {
          text: "About",
          link: "/en/guide/about",
        },
      ],
    },
  ];
}

function v320neoSidebar() {
  return [
    {
      text: "VAU320neo",
      items: [
        {
          text: "简介",
          link: "/en/v320neo/introduce",
        },
      ],
    },
    {
      text: "飞行指南",
      collapsible: true,
      items: [
        {
          text: "概述",
          link: "/en/v320neo/guide/overview",
        },
        {
          text: "航前准备",
          link: "/en/v320neo/guide/preflight",
        },
        {
          text: "发动机启动和滑行",
          link: "/en/v320neo/guide/start-and-taxi",
        },
        {
          text: "起飞，爬升，巡航",
          link: "/en/v320neo/guide/takeoff-climb-cruise",
        },
        {
          text: "下降",
          link: "/en/v320neo/guide/descent",
        },
        {
          text: "进近着陆",
          link: "/en/v320neo/guide/approach-landing",
        },
        {
          text: "停机",
          link: "/en/v320neo/guide/taxi-to-gate",
        },
      ],
    },
    {
      text: "进阶指南",
      collapsible: true,
      items: [
        {
          text: "概述",
          link: "/en/v320neo/advanced-guide/overview",
        },
      ],
    },
    {
      text: "VAU320neo 简报",
      collapsible: true,
      items: [
        {
          text: "概述",
          link: "/en/v320neo/briefing/overview",
        },
      ],
    },
    {
      text: "开发指南",
      collapsible: true,
      items: [
        {
          text: "将飞机导入到项目",
          link: "/en/v320neo/developer/install-aircraft",
        },
      ],
    },
  ];
}
