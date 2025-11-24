import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yash Gohel",
  description: "Personal Documentation Site Built with VitePress",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Resources', link: '/resources' },
      { text: 'Blogs', link: '/blog/cfs-linux'}
    ],

    sidebar: {
      '/resources/': sidebarResources(),
      '/blog/': sidebarBlog()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/go2hel' }
    ]
  }
})


function sidebarResources() : DefaultTheme.SidebarItem[] {
  return [
        {
          text: 'Resources',
          items: [
            { 
              text: 'Competitive Coding in Java', 
              link: '/resources/comp-coding-java',
              collapsed: true,
              items:
              [
                { text: 'Fast I/O in Java', link: '/resources/comp-coding-java/fast-io' },
                { text: 'Dynamic Arrays', link: '/resources/comp-coding-java/arraylist'},
                { text: 'Hash Maps & Sets', link: '/resources/comp-coding-java/hashmap-hashset'},
                { text: 'Heaps', link: '/resources/comp-coding-java/priority-queue'},
                { text: 'Balanced Trees', link: '/resources/comp-coding-java/treemap-treeset'},
                { text: 'Stacks, Queues, and Deques', link: '/resources/comp-coding-java/stack-queue-deque'},
                { text: 'Essential Utilities', link: '/resources/comp-coding-java/utilities'}
              ]
            },
            {
              text: 'DSA Question Bank',
              link: '/resources/dsa-question-bank'
            },
            {
              text: 'Powershell For Linux Users',
              link: '/resources/powershell-for-linux-users',
              collapsed: true,
              items: [
                {
                  text: 'Introduction',
                  link: '/resources/powershell-for-linux-users/1-introduction',
                  items: [
                    { text: 'Objects vs Text', link: '/resources/powershell-for-linux-users/1-introduction/objects-vs-text'}
                  ]
                }
              ]
            }
          ]
        }
      ]
}

function sidebarBlog() : DefaultTheme.SidebarItem[] {
  return [
        {
          text: 'Blogs',
          items: [
            { text: 'CFS Linux', link: '/blog/cfs-linux' }
          ]
        }
      ]
}