const argv = require('minimist')(process.argv.slice(2))
console.info('argv', argv)
const build = argv.build || false
// base: '/vitepress2021/',
// base: command === 'build' ? '/vitepress2021/' : '/',
// base: build ? '/vitepress2021/' : '/',

console.info('build', build)
const base1 = build ? '/vitepress2021/' : '/'
module.exports = {
  base: base1,
  // base: '/',
  title: 'Hello VitePress',
  description: 'Just playing around.'
}