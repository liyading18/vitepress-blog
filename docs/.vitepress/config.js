const argv = require('minimist')(process.argv.slice(2))
const build = argv.build || false
const baseBuild  = build ? '/vitepress2021/' : '/'

function getNav () {
  return [
    { text: '主要页面', link: '/VitePress/'},
    { text: '工作相关', link: '/work'},
    { text: 'Config', link: '/config'},
    { text: 'Navigator导航', link: "http://pengchenggang.gitee.io/navigator/" },
    {
        text: '下拉菜单',
        items: [
            { text: 'work1', link: '/work' },
            { text: 'config', link: '/config' }
        ]
    }
  ]
}

module.exports = {
  // hmr: { overlay: false },
  base: baseBuild,
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    // displayAllHeaders: true,
    // docsDir: 'docs',
    nav: getNav(), // 右上角的链接
    sidebar: {
      '/VitePress/': getVitePress()
    }
  }
}

function getVitePress () {
  return [{
    text: 'GUI', 
    children:[
      {
        text: 'index',
        link: '/VitePress/'
      },
      {
        text: '主要问题',
        link: '/VitePress/one'
      },
      {
        text: 'second',
        link: '/VitePress/second'
      }
    ]
  }]
}