import Banner1 from '@/assets/images/project_golden_dress_banner_1.png'
import Hero from '@/assets/images/project_golden_dress_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_gd_4.png'

export default function goldenDressComp() {
  return {
    id: 'the-golden-dress-studio',
    name: 'The Golden Dress Studio',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Branding Elegance in Every Detail',
    subtitle: 'Client: The Golden Dress Studio – Full Visual Identity',
    topCopy:
      'For The Golden Dress Studio, I created a complete visual identity that captures the essence of elegance, femininity, and timeless fashion. From the ground up, I designed the logo, custom typography, color palette, and supporting brand assets.<br/><br/>The result is a refined and sophisticated identity system where every element — from business cards to packaging — reflects the studio’s commitment to style and quality. The golden dress icon, paired with minimalist elegance and premium finishes, brings the brand name to life with grace and clarity.',
    banners: [Banner1],
    bottomCopy:
      'This project was about more than aesthetics — it was about crafting a brand presence as elegant and iconic as the garments themselves.',
    gradient: {
      from: '#B1A57D',
      to: '#D4CAAE',
    },
  } as ProjectData
}
