module.exports = {
  // 网站标题
  title: "With Hope",
  // 网站描述
  description: "A little pleasure",
  // 打包目录
  dest: "./dist",
  base: "/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 使用插件
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      { text: "With Hope", link: "https://lxyy.fun" },
      { text: "Blog", link: "https://blog.csdn.net/With__Hope" },
      { text: "Github", link: "https://github.com/joker-duzhong/vitepress" },
    ],
    sidebar: {
      "/": getSidebar(),
    },
  },
};

function getSidebar() {
  return [
    {
      text: "HTML",
      children: [
        { text: "基础", link: "/HTML/" },
        { text: "进阶", link: "/HTML/advanced" },
      ],
      sidebarDepth: 3,
    },
    {
      text: "CSS",
      children: [
        { text: "基础", link: "/CSS/" },
        { text: "进阶", link: "/CSS/advanced" },
      ],
    },
    {
      text: "Javascript",
      children: [
        { text: "基础", link: "/Javascript/" },
        { text: "进阶", link: "/Javascript/advanced" },
        { text: "进阶", link: "/Javascript/nightmare" },
      ],
    },
    {
      text: "Vue",
      children: [
        { text: "基础", link: "/Vue/" },
        { text: "进阶", link: "/Vue/advanced" },
      ],
    },
  ];
}
