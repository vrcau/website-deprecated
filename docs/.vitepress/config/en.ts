import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "en",
  title: "VRChat Aerospace University",
  description:
    "A small group that develops Sacc-based aircraft and supporting facilities.",
  themeConfig: {
    logo: "/VAU.svg",
    nav: nav(),
    sidebar: {
      "/en/guide/": guideSidebar(),
      "/en/v320neo/": v320neoSidebar(),
      "/en/ais/": aisSiderbar(),
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
});

function nav() {
  return [
    {
      text: "Guide",
      link: "/en/guide/getting-started",
    },
    {
      text: "AIS",
      link: "/en/ais/",
    },
    {
      text: "VAU320neo",
      link: "/en/v320neo/",
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
          text: "Introduce",
          link: "/en/v320neo/introduce",
        },
      ],
    },
    {
      text: "Beginner Guide",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "/en/v320neo/guide/overview",
        },
        {
          text: "Preflight",
          link: "/en/v320neo/guide/preflight",
        },
        {
          text: "Startup and Taxiing",
          link: "/en/v320neo/guide/start-and-taxi",
        },
        {
          text: "Takeoff, Climb and Cruise",
          link: "/en/v320neo/guide/takeoff-climb-cruise",
        },
        {
          text: "Descending",
          link: "/en/v320neo/guide/descent",
        },
        {
          text: "Approach and Landing",
          link: "/en/v320neo/guide/approach-landing",
        },
        {
          text: "Shutdown",
          link: "/en/v320neo/guide/taxi-to-gate",
        },
      ],
    },
    {
      text: "Advanced Guides",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "/en/v320neo/advanced-guide/overview",
        },
      ],
    },
    {
      text: "VAU320neo Briefing",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "/en/v320neo/briefing/overview",
        },
      ],
    },
    {
      text: "Development Guides",
      collapsed: false,
      items: [
        {
          text: "Importing the aircraft",
          link: "/en/v320neo/developer/install-aircraft",
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
          text: "Introduce",
          link: "/en/ais/",
        },
      ],
    },
  ];
}
