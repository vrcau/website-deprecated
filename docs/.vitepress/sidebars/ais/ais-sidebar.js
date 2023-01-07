import {
    aisZVAU
} from "./ais-zvau";

export function aisSiderbar() {
    return [{
            text: 'Aeronautical Information Services',
            items: [{
                text: '简介',
                link: '/airport/'
            }]
        },
        {
            text: 'ZVAU',
            collapsible: true,
            items: aisZVAU()
        }
    ]
}