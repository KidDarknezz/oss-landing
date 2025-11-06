import Banner1 from '@/assets/images/project_mujeres_unicas_banner_1.png'
import Hero from '@/assets/images/project_mujeres_unicas_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_5.png'

export default function MujeresUnicasComp() {
  return {
    id: 'mujeres-unicas',
    name: 'Global Bank - Premi Mujeres Únicas',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Empowering Women',
    subtitle: 'Client: Global Bank -Premio Mujeres Únicas',
    topCopy:
      "For Premios Únicas, Global Bank's annual initiative celebrating women who inspire and lead with purpose, we collaborated with Contraxeñas to bring the event's stage to life through design and motion.<br/><br/>Our team developed custom on-screen animations to announce nominees and winners, along with dynamic visual pieces that enhanced the atmosphere and made the stage visually engaging. Through detailed 3D renders and motion graphics, we created a cohesive visual experience that blended elegance, innovation, and emotion.",
    banners: [
      'https://www.youtube.com/embed/3ausYAvoWhY?si=T2d7KWFAqOEoaFvk',
      'https://www.youtube.com/embed/f-pzRLwTwbs?si=sh8tx8YArz2XVt9B',
      Banner1,
    ],
    bottomCopy:
      "This project celebrates not only women's achievements but also the power of creativity to transform a space into a story — where every frame inspires connection and recognition.",
    gradient: {
      from: '#0B42CC',
      to: '#00AED4',
    },
  } as ProjectData
}
