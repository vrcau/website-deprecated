import {
    v320neoGuide
} from './v320neo-guide'
import {
    v320neoBriefing
} from './v320neo-briefing'
import {
    v320neoAdvancedGuide
} from './v320neo-advanced-guide'
import {
    v320neoDeveloper
} from './v320neo-developer'

export function v320neoSidebar() {
    return [{
            text: 'V320neo',
            items: [{
                text: '简介',
                link: '/v320neo/introduce'
            }]
        },
        {
            text: '飞行指南',
            collapsible: true,
            items: v320neoGuide()
        },
        {
            text: '进阶指南',
            collapsible: true,
            items: v320neoAdvancedGuide()
        },
        {
            text: 'V320neo 简报',
            collapsible: true,
            items: v320neoBriefing()
        },
        {
            text: '开发指南',
            collapsible: true,
            items: v320neoDeveloper()
        }
    ]
}