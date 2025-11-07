import Banner1 from '@/assets/images/project_selina_banner_1.png'
import Banner1Mobile from '@/assets/images/project_selina_banner_1_mobile.png'
import Banner2 from '@/assets/images/project_selina_banner_2.png'
import Banner2Mobile from '@/assets/images/project_selina_banner_2_mobile.png'
import Hero from '@/assets/images/project_selina_hero.png'
import HeroMobile from '@/assets/images/project_selina_hero_mobile.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_gd_5.png'

export default function selinaComp() {
  return {
    id: 'selina',
    name: 'Selina',
    thumbnail: Thumbnail,
    hero: Hero,
    heroMobile: HeroMobile,
    title: 'Social Media Campaigns',
    subtitle: 'Client: Selina ',
    topCopy:
      "A beach party like no other. For Selina's Carnival Upside Down, we brought the visual energy to match the madness — 11 DJs, 3 beachside venues, and a wild twist on tradition.<br/><br/>We designed colorful, animated visuals inspired by the playful, surreal tone of the event, blending tropical chaos with creative freedom. The result? A vibrant campaign that felt as spontaneous and bold as the carnival itself — full of rhythm, fun, and upside-down surprises.",
    banners: [Banner1, Banner2],
    bannersMobile: [Banner1Mobile, Banner2Mobile],
    bottomCopy:
      "The result was a seamless visual journey that honored journalism's finest with the style and sophistication they deserve. We're proud to have contributed to a night that celebrated truth, talent, and the power of storytelling.",
    gradient: {
      from: '#8825EF',
      to: '#1AEEED',
    },
  } as ProjectData
}
