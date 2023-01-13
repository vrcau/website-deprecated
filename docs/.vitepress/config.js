import {
    v320neoSidebar
} from './sidebars/v320neo/v320neo-sidebar'
import {
    aisSiderbar
} from './sidebars/ais/ais-sidebar'
import {
    createWriteStream
} from 'node:fs'
import {
    resolve
} from 'node:path'
import {
    SitemapStream
} from 'sitemap'

const links = []

export default {
    lang: 'zh-cn',
    title: "VRChat Aerospace University",
    descrption: "VRChat",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [
        ['script', {
            defer: '',
            src: '/_vercel/insights/script.js'
        }],
        ['meta', {
            name: 'google-site-verification',
            content: 'hagVbuxgC0yWzIxY53LQgx64neNoygvsQqR6rlJVYfI'
        }]
    ],
    themeConfig: {
        logo: "/VAU.svg",
        nav: nav(),
        socialLinks: socialLinks(),
        sidebar: {
            '/guide/': guideSidebar(),
            '/v320neo/': v320neoSidebar(),
            '/airport/': aisSiderbar()
        },
        footer: {
            message: '在 MIT 许可证下发布',
            copyright: 'Copyright © 2022-2023 VRChat Aerospace University'
        },
        editLink: {
            pattern: 'https://github.com/Misaka-L/vau-web/edit/main/docs/:path',
            text: '在 Github 编辑此页'
        }
    },
    transformHtml: (_, id, {
        pageData
    }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
                lastmod: pageData.lastUpdated
            })
    },
    buildEnd: async ({
        outDir
    }) => {
        const sitemap = new SitemapStream({
            hostname: 'https://yuxiaviation.com/'
        })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach((link) => sitemap.write(link))
        sitemap.end()
        await new Promise((r) => writeStream.on('finish', r))
    }
};

function nav() {
    return [{
            text: "指南",
            link: "/guide/getting-started",
        },
        {
            text: "AIS",
            link: "/airport/",
        },
        {
            text: "VAU320neo",
            link: "/v320neo/introduce",
        }
    ];
}

function socialLinks() {
    return [{
            icon: "github",
            link: "https://github.com/Heriyadi235/VAU320",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/YUXI917",
        },
        {
            icon: {
                svg: '<svg t="1673088362735" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5155" width="64" height="64"><path d="M797.75 525.32c25.21-7.79 54.41-34.38 68.71-58q19.71-32.88 19.71-74 0-75.46-44-116.57-40.74-36.62-113.62-36.62H462.61L325.71 675h-2.1l-136.9-434.9H98l177.42 533.57h98.48l145.81-438.53v438.53h76.84V556.2H718c3.73 0 7.31 0.14 10.78 0.38l112 217.09h85.06zM718 481.47H596.55V314.83H718q47.94 0 69 19.43Q808.68 353 808.67 397q0 40.35-21.67 62.77-24.3 21.72-69 21.7z" p-id="5156"></path></svg>',
            },
            link: "https://vrc.group/VAU.3770",
        },
        {
            icon: {
                svg: '<svg t="1673088505585" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6254" width="64" height="64"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="6255"></path></svg>',
            },
            link: "https://jq.qq.com/?_wv=1027&k=oH8yHGNS",
        }
    ]
}

function guideSidebar() {
    return [{
        text: '指南',
        items: [{
                text: '开始飞行',
                link: '/guide/getting-started'
            },
            {
                text: '关于',
                link: '/guide/about'
            }
        ]
    }]
}