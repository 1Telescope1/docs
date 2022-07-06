module.exports = {
  title:"Telescope",
  description:"Telescope",
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar:[
      '',
      'about',
      {
        title: '美丽的 css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/c-aaa',
          '/css/c-bbb',
          '/css/c-ccc',
        ]
      },
    ]
  }
}
