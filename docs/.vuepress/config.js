module.exports = {
    title: 'Xiaoze Liu | Purdue University',
    plugins: ['@vuepress/back-to-top'],
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/img/icon.ico' }],
        ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-PM84P5861R', async: true }],
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
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/xzliu/' },
            { text: 'Scholar', link: 'https://scholar.google.com/citations?user=MaIQOwsAAAAJ' },
            { text: 'GitHub', link: 'https://www.github.com/xz-liu' },
            { text: 'Twitter', link: 'https://twitter.com/_XiaozeLiu' },

        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,

    }, markdown: {
        extendMarkdown: md => {
            md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
                const token = tokens[idx];
                const hrefIndex = token.attrIndex('href');
                const href = token.attrs[hrefIndex][1];

                return `<my-link href="${href}">`;
            };

            md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
                return '</my-link>';
            };
        }
    },
}
// 