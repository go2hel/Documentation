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
      { text: 'Blogs', link: '/blog/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: {
      '/resources/': sidebarResources(),
      '/blog/': []
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/go2hel' }
    ],

    search: {
      provider: 'local'
    }
  }
})


function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Resources',
      items: [
        {
          text: 'Competitive Coding in Java',
          collapsed: false,
          items:
            [
              { text: 'Overview', link: '/resources/comp-coding-java/' },
              { text: 'Fast I/O in Java', link: '/resources/comp-coding-java/fast-io' },
              { text: 'Dynamic Arrays', link: '/resources/comp-coding-java/arraylist' },
              { text: 'Hash Maps & Sets', link: '/resources/comp-coding-java/hashmap-hashset' },
              { text: 'Heaps', link: '/resources/comp-coding-java/priority-queue' },
              { text: 'Balanced Trees', link: '/resources/comp-coding-java/treemap-treeset' },
              { text: 'Stacks, Queues, and Deques', link: '/resources/comp-coding-java/stack-queue-deque' },
              { text: 'Essential Utilities', link: '/resources/comp-coding-java/utilities' }
            ]
        },
        {
          text: 'DSA Question Bank',
          link: '/resources/dsa-question-bank/'
        },
        {
          text: 'Powershell For Linux Users',
          collapsed: false,
          items: [
            {
              text: 'Introduction',
              collapsed: true,
              items: [
                { text: 'Objects vs Text', link: '/resources/powershell-for-linux-users/1-introduction/objects-vs-text' }
              ]
            },
            {
              text: 'Navigation',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/2-navigation/' },
                { text: 'Changing Directories (cd)', link: '/resources/powershell-for-linux-users/2-navigation/changing-dirs-cd' },
                { text: 'Current Directory (pwd)', link: '/resources/powershell-for-linux-users/2-navigation/current-dir-pwd' },
                { text: 'Listing Files (ls)', link: '/resources/powershell-for-linux-users/2-navigation/listing-files-ls' }
              ]
            },
            {
              text: 'File Management',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/3-file-management/' },
                { text: 'Copying Items (cp)', link: '/resources/powershell-for-linux-users/3-file-management/copy-item-cp' },
                { text: 'Creating Directories (mkdir)', link: '/resources/powershell-for-linux-users/3-file-management/create-dir-mkdir' },
                { text: 'Creating Files (touch)', link: '/resources/powershell-for-linux-users/3-file-management/create-file-touch' },
                { text: 'Moving Items (mv)', link: '/resources/powershell-for-linux-users/3-file-management/move-item-mv' },
                { text: 'Removing Directories (rmdir)', link: '/resources/powershell-for-linux-users/3-file-management/remove-dir-rmdir' },
                { text: 'Removing Items (rm)', link: '/resources/powershell-for-linux-users/3-file-management/remove-item-rm' }
              ]
            },
            {
              text: 'Viewing Content',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/4-viewing-content/' },
                { text: 'Cat (Get-Content)', link: '/resources/powershell-for-linux-users/4-viewing-content/get-content-cat' },
                { text: 'Head & Tail', link: '/resources/powershell-for-linux-users/4-viewing-content/head-and-tail' },
                { text: 'Less/More', link: '/resources/powershell-for-linux-users/4-viewing-content/paging-less' }
              ]
            },
            {
              text: 'Searching',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/5-searching/' },
                { text: 'Find Files', link: '/resources/powershell-for-linux-users/5-searching/find-files-find' },
                { text: 'Grep (Select-String)', link: '/resources/powershell-for-linux-users/5-searching/find-text-grep' }
              ]
            },
            {
              text: 'Process Management',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/6-process-management/' },
                { text: 'List Processes (ps)', link: '/resources/powershell-for-linux-users/6-process-management/list-processes-ps' },
                { text: 'Kill Processes', link: '/resources/powershell-for-linux-users/6-process-management/stop-process-kill' }
              ]
            },
            {
              text: 'Core Concepts',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/7-core-concepts/' },
                { text: 'Getting Help', link: '/resources/powershell-for-linux-users/7-core-concepts/getting-help-man' },
                { text: 'Redirection', link: '/resources/powershell-for-linux-users/7-core-concepts/redirection-operators' },
                { text: 'The Pipeline', link: '/resources/powershell-for-linux-users/7-core-concepts/the-pipeline' }
              ]
            },
            {
              text: 'Object Utilities',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/resources/powershell-for-linux-users/8-object-utilities/' },
                { text: 'Where-Object', link: '/resources/powershell-for-linux-users/8-object-utilities/filtering-objects-where' },
                { text: 'Measure-Object', link: '/resources/powershell-for-linux-users/8-object-utilities/measuring-objects-measure' },
                { text: 'Select-Object', link: '/resources/powershell-for-linux-users/8-object-utilities/selecting-objects-select' },
                { text: 'Sort-Object', link: '/resources/powershell-for-linux-users/8-object-utilities/sorting-objects-sort' }
              ]
            }
          ]
        }
      ]
    }
  ]
}