import Banner1 from '@/assets/images/project_ipal_banner_1.png'
import Banner2 from '@/assets/images/project_ipal_banner_2.png'
import Hero from '@/assets/images/project_ipal_hero.png'
import Thumbnail from '@/assets/images/projects_gd_3.png'

const data = {
  id: 'veasa',
  name: 'Veasa',
  thubnail: Thumbnail,
  hero: Hero,
  title: 'Honoring 20 Years of Making Progress',
  subtitle:
    'To mark two decades of commitment and excellence, IPAL trusted One Spot Creative Studio to refresh their visual identity with a modern, strategic touch.<br/>From our very first conversation, we established a clear and efficient communication channel with the client — listening closely, identifying their core needs, and translating them into visual language. The goal was not only to celebrate 20 years, but to position IPAL for the future with a refreshed brand presence.<br/>We designed a special 20th anniversary emblem, reimagined their social media aesthetics, and delivered a comprehensive brand usage guide to ensure consistency across platforms. The result: a unified, elegant, and professional identity that reflects both IPAL’s legacy and its forward-looking spirit.',
  topCopy: '',
  banners: [Banner1, Banner2],
  bottomCopy: '',
  gradient: {
    from: '',
    to: '',
  },
}

export default function veasaComp() {
  return {
    data,
  }
}
