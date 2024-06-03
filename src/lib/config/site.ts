import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'lovecommafio.github.io',
  title: 'lovecommafio',
  subtitle: 'personal blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Fio',
    status: '❤️‍🔥',
    bio: 'Welcome to my personal blog! This is where I put my thoughts down!'
  },
  themeColor: '#3D4451'
}
