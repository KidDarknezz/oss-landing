import Banner1 from '@/assets/images/projects_veasaweb_banner_1.png'
import Banner2 from '@/assets/images/project_veasaweb_banner_2.png'
import Hero from '@/assets/images/project_veasaweb_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_uiux_3.png'

export default function veasawebComp() {
  return {
    id: 'veasaweb',
    name: 'Veasa',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Reflections of Innovation',
    subtitle: 'Client: Veasa - Website Development',
    topCopy:
      "For VEASA - Vidrios y Espejos América, a leader in glass and aluminum solutions in Panama, we designed and developed a modern corporate website that reflects the brand's precision, reliability, and years of expertise in the construction industry.<br/><br/>Our goal was to translate VEASA's craftsmanship and professionalism into a clean, intuitive digital experience. The new website highlights their products, showcases key projects, and provides a seamless navigation flow that connects the company with clients and partners more effectively.",
    banners: [Banner1, Banner2],
    bottomCopy:
      "The result is a renewed and unified brand presence — strong, transparent, and timeless — that celebrates VEASA's history while positioning it for the future.",
    gradient: {
      from: '#006BC8',
      to: '#094D7D',
    },
    url: 'https://www.vidriosyespejosamerica.com/',
  } as ProjectData
}
