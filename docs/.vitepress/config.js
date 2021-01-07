const argv = require('minimist')(process.argv.slice(2))
const build = argv.build || false
const baseBuild  = build ? '/vitepress2021/' : '/'

function getNav () {
  return [
    { text: 'config', link: '/VitePress/config'}
  ]
}

module.exports = {
  base: baseBuild,
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar()
  }
}

function getSidebar () {
  return {
    '/VitePress/config/': 'auto',
    '/VitePress/': 'auto'
  }
}