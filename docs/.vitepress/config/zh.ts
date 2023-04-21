import { defineConfig } from "vitepress";

export const zhConfig = defineConfig({
  lang: "zh",
  title: "VRChat 航空航天大学",
  description: "一个开发及制作基于 Sacc 系统的飞机及配套设施的小群组",
  themeConfig: {
    logo: "/VAU.svg",
    nav: nav(),
    sidebar: {
      "/zh/guide/": guideSidebar(),
      "/zh/v320neo/": v320neoSidebar(),
      "/zh/ais/": aisSiderbar(),
    },
    footer: {
      message: "在 MIT 许可证下发布",
      copyright: "Copyright © 2022-2023 VRChat 航空航天大学",
    },
    editLink: {
      pattern: "https://github.com/vrcau/vau-web/edit/main/docs/:path",
      text: "在 Github 编辑此页",
    },
  },
});

function nav() {
  return [
    {
      text: "指南",
      link: "/zh/guide/getting-started",
    },
    {
      text: "AIS",
      link: "/zh/ais/",
    },
    {
      text: "VAU320neo",
      link: "/zh/v320neo/",
    },
  ];
}

function guideSidebar() {
  return [
    {
      text: "指南",
      items: [
        {
          text: "开始飞行",
          link: "/zh/guide/getting-started",
        },
        {
          text: "关于",
          link: "/zh/guide/about",
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
          link: "/zh/v320neo/introduce",
        },
      ],
    },
    {
      text: "飞行指南",
      collapsed: false,
      items: [
        {
          text: "概述",
          link: "/zh/v320neo/guide/overview",
        },
        {
          text: "航前准备",
          link: "/zh/v320neo/guide/preflight",
        },
        {
          text: "发动机启动和滑行",
          link: "/zh/v320neo/guide/start-and-taxi",
        },
        {
          text: "起飞，爬升，巡航",
          link: "/zh/v320neo/guide/takeoff-climb-cruise",
        },
        {
          text: "下降",
          link: "/zh/v320neo/guide/descent",
        },
        {
          text: "进近着陆",
          link: "/zh/v320neo/guide/approach-landing",
        },
        {
          text: "停机",
          link: "/zh/v320neo/guide/taxi-to-gate",
        },
      ],
    },
    {
      text: "进阶指南",
      collapsed: false,
      items: [
        {
          text: "概述",
          link: "/zh/v320neo/advanced-guide/overview",
        },
      ],
    },
    {
      text: "VAU320neo 简报",
      collapsed: false,
      items: [
        {
          text: "概述",
          link: "/zh/v320neo/briefing/overview",
        },
      ],
    },
    {
      text: "开发指南",
      collapsed: false,
      items: [
        {
          text: "将飞机导入到项目",
          link: "/zh/v320neo/developer/install-aircraft",
        },
      ],
    },
  ];
}

function aisSiderbar() {
  return [
    {
      text: "Aeronautical Information Services",
      items: [
        {
          text: "简介",
          link: "/zh/ais/",
        },
      ],
    },
  ];
}
