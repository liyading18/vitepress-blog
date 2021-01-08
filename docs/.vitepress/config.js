const argv = require('minimist')(process.argv.slice(2))
const build = argv.build || false
const baseBuild  = build ? '/vitepress2021/' : '/'

function getNav () {
  return [
    { text: '主要页面', link: '/VitePress/one'},
    { text: '工作相关', link: '/work'},
    { text: 'Config', link: '/config'},
    { text: 'Navigator导航', link: "http://pengchenggang.gitee.io/navigator/" },
    {
        text: '下拉菜单',
        // icon: 'reco-document',
        items: [
            { text: 'work1', link: '/work' },
            { text: 'config', link: '/config' },
        ]
    },
  ]
}

module.exports = {
  hmr: { overlay: false },
  base: baseBuild,
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    displayAllHeaders: true,
    // docsDir: 'docs',
    nav: getNav(), // 右上角的链接
    sidebar: getSidebar()
  }
}

function getSidebar () {
  return {
    // '/config/': 'auto',
    '/VitePress/': [{
        text: 'GUI', 
        children:[
          { text: '主要问题', link: '/VitePress/one' },
          { text: 'second', link: '/VitePress/second' },
          { text: 'index', link: '/VitePress/' },
        ]
      }
    ]
  }
}