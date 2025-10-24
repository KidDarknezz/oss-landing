import Banner1 from '@/assets/images/project_veasa_banner_1.png'
import Banner2 from '@/assets/images/project_veasa_banner_2.png'
import Banner3 from '@/assets/images/project_veasa_banner_3.png'
import Hero from '@/assets/images/project_veasa_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_gd_3.png'

export default function veasaComp() {
  return {
    id: 'veasa',
    name: 'Veasa',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Celebrating Legacy with Purposeful Design',
    subtitle: 'Client: VEASA - 40th Anniversary Branding',
    topCopy:
      'VEASA, a leading provider of architectural glass and aluminum carpentry solutions for large-scale construction in Panama, celebrated its 40th anniversary — a milestone marking decades of expertise in the building industry.<br/><br/>To commemorate this moment, I created a special edition logo highlighting their journey since 1985. The visual identity was applied across key touchpoints, including banners, corporate merchandise, and POP materials — all designed to reflect the brand’s strength, precision, and longevity in the construction sector.<br/><br/>A full website redesign is also in development, aiming to modernize VEASA’s digital presence and align it with their position as a trusted partner to top-tier developers.',
    banners: [Banner1, Banner2, Banner3],
    bottomCopy:
      "This branding effort was about honoring VEASA's legacy while reinforcing its role as a key player in Panama's evolving skyline.",
    gradient: {
      from: '#52B8E8',
      to: '#004F9E',
    },
  } as ProjectData
}
