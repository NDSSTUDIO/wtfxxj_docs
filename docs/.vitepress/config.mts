import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  ignoreDeadLinks: true, // 关闭丢失链接构建阻止
  title: "WTFXXJ",
  description: "WTFXXJ",
  lang: 'zh-CN',
  head:[
    ['link',{rel:'icon',href:'/logo3.webp'}]
  ],

  markdown: {
    image: {
    // 默认禁用；设置为 true 可为所有图片启用懒加载。
    lazyLoading: true
    },
    container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息'
    }
  },

  themeConfig: {
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一页", //Next page
      next: "下一页", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    siteTitle: 'WTFXXJ',
    logo: '/logo3.webp',
    footer: {
    message: 'Copyright © 2024-present <a href="wtfxxj.top">WTFXXJ</a>',
    copyright: '<a href="https://beian.miit.gov.cn/#/Integrated/index">晋ICP备2025057544号-1</a>'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入我们', link: '/main/join' }
    ],
    
    sidebar: [
            {
        text: '游玩',
        items: [
          { text: '加入服务器', link: '/main/join' },
          { text: '规则', link: '/main/eula' },
          { text: '权限组说明', link: '/main/eula' },
          { text: '支持我们', link: '/main/support_us' },
        ]
      },
      {
        text: '通用插件',
        items: [
          { text: '菜单', link: '/plugins/menu' },
          { text: '领地', link: '/plugins/residence'},
          { text: '传送', link: '/plugins/tp' },
          { text: 'CoreProtect', link: '/plugins/coreprotect' },
          { text: '红石音乐', link: '/plugins/music' },
          { text: '扫地大妈', link: '/plugins/eclean' },
          { text: '史莱姆区块查询', link: '/plugins/slime' }
          
        ]
      },
//            {
//        text: 'LTS服插件',
//        items: [
//          { text: '我目前不知道通用/独有，所以都在通用里面x-x', link: '/plugins/menu' },
//
//        ]
//      },
//            {
//        text: 'RPG服插件',
//        items: [
//          { text: '我目前不知道通用/独有，所以都在通用里面x-x', link: '/plugins/menu' },
//
//      ]
//      },
],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NDSSTUDIO/wtfxxj_docs' }
    ],
  }
  
}
)
