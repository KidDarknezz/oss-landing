import Banner1 from '@/assets/images/project_joeys_banner_1.png'
import Banner1Mobile from '@/assets/images/project_joeys_banner_1_mobile.png'
import Banner2 from '@/assets/images/project_joeys_banner_2.png'
import Banner2Mobile from '@/assets/images/project_joeys_banner_2_mobile.png'
import Banner3 from '@/assets/images/project_joeys_banner_3.png'
import Hero from '@/assets/images/project_joeys_hero.png'
import HeroMobile from '@/assets/images/project_joeys_hero_mobile.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_gd_2.png'

export default function veasaComp() {
  return {
    id: 'joeys',
    name: "Joey's",
    thumbnail: Thumbnail,
    hero: Hero,
    heroMobile: HeroMobile,
    title: 'Flavor-First Branding with Personality',
    subtitle: "Client: Joey's Artisan Pizza - Brand Identity & Social Media Concept",
    topCopy:
      "For Joey's Artisan Pizza, the goal was clear: create a brand that looks as bold and flavorful as their pizzas taste. I developed a full visual identity including logo design, brand colors, custom typography, and a playful graphic style that captures the artisanal, handcrafted spirit of the brand.<br/><br>The project also included a social media concept tailored to highlight their product, personality, and local vibe — blending bright visuals, fun illustrations, and a bold tone of voice to connect with pizza lovers at first glance.",
    banners: [Banner1, Banner2, Banner3],
    bannersMobile: [Banner1Mobile, Banner2Mobile],
    bottomCopy:
      'This branding project was all about bringing taste to the screen — turning cheese pulls and bold flavors into a visual identity full of color, character, and appetite appeal.',
    gradient: {
      from: '#FF0069',
      to: '#F05C22',
    },
  } as ProjectData
}
