module.exports = {
    content: [
        ['blog', {
            page: '/blog/_post',
            permalink: '/blog/:slug',
            isPost: true,
            anchorLevel: 4,
            generate: [
                'get',
                'getAll'
            ]
        }],
        ['showcase', {
            page: '/showcase/_showcase',
            permalink: '/showcase/:slug',
            isPost: true,
            anchorLevel: 4,
            generate: [
                'get',
                'getAll'
            ]
        }],
        ['pages', {
            page: '/_page',
            permalink: ':section*/:slug',
            isPost: false,
            anchorLevel: 4,
            generate: [
                'get',
                'getAll'
            ]
        }],
    ],
    api: {
        baseURL: 'http://localhost:3000',
        browserBaseURL: 'http://localhost:3000'
    }
}
