import Banner1 from '@/assets/images/project_tigo_banner_1.png'
import Banner2 from '@/assets/images/project_tigo_banner_2.png'
import Hero from '@/assets/images/project_tigo_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_1.png'

export default function TigoComp() {
  return {
    id: 'tigo',
    name: 'Tigo',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Designing the Future with Intelligence',
    subtitle: 'Client: Tigo - Business Forum 2023 Visual Identity',
    topCopy:
      'The creative process behind Business Forum 2023 for Tigo was a dynamic fusion of technology, design, and forward-thinking. Centered around the theme of artificial intelligence and next-generation tech, the visual identity needed to reflect a bold, data-driven future.<br/><br/>I developed the full graphic line and motion design for the event, incorporating circuit-inspired visuals, data flow patterns, and high-tech textures to communicate themes of cybersecurity, adaptability, and innovation.<br/><br/>A standout element in this project was the use of AI tools to generate unique visuals — embracing the very technologies the forum was built to explore. These visuals allowed for a cutting-edge, immersive brand experience that captured the essence of transformation in a hyperconnected world.',
    banners: [Banner1, Banner2],
    bottomCopy:
      'This project was a creative deep dive into the possibilities of design powered by technology — blending form, movement, and intelligence into one cohesive story.',
    gradient: {
      from: '#52B8E8',
      to: '#004F9E',
    },
  } as ProjectData
}
