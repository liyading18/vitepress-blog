const argv = require('minimist')(process.argv.slice(2))
const build = argv.build || false
const baseBuild  = build ? '/vitepress2021/' : '/'
module.exports = {
  base: baseBuild ,
  title: 'Hello VitePress',
  description: 'Just playing around.'
}