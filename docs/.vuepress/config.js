module.exports = {
    title: 'Xiaoze Liu\'s Homepage',
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/img/icon.ico' }],
        ['script', {src:'https://www.googletagmanager.com/gtag/js?id=G-PM84P5861R', async:true}],
        ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PM84P5861R');
        `
        ]
    ],
    themeConfig: {
        logo: '/img/icon.png',
        displayAllHeaders: true,
        sidebar: [
            '/',
            // '/pub/',
        ],
        nav: [
            // { text: 'Publications', link: '/pub/' },
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/xzliu/' },
            { text: 'Scholar', link: 'https://scholar.google.com/citations?user=MaIQOwsAAAAJ' },
            { text: 'GitHub', link: 'https://www.github.com/xz-liu' },

        ],
    },
}
// 