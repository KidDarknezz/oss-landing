import Banner1 from '@/assets/images/project_fases_banner_1.png'
import Hero from '@/assets/images/project_fases_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_3.png'

export default function fasesComp() {
  return {
    id: 'fases',
    name: 'Fases',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'From New Moon to Final Track',
    subtitle: 'Client: Diez 12 - Album Concept & Visual Design',
    topCopy:
      'For the alternative rock band Diez 12, we developed the full creative concept behind their new album Fases — a project that visually reflects the emotional cycles and depth of their music.<br/><br/>From the early stages, we worked closely with the band to shape a cohesive visual identity for the release. We designed the album cover, established the concept and visual direction, and produced an animated promo using original tracks from the album to set the tone.',
    banners: ['https://www.youtube.com/embed/uoG4kGlxllQ?si=VDqeNYWnHrLsJ2Pn', Banner1],
    bottomCopy:
      'This project was more than just visual design — it was a full creative collaboration that transformed music into atmosphere, emotion, and storytelling.',
    gradient: {
      from: '#4A7073',
      to: '#67827D',
    },
  } as ProjectData
}
