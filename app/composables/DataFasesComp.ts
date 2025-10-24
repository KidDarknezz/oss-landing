import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_3.png'

export default function fasesComp() {
  return {
    id: 'fases',
    name: 'Fases',
    thumbnail: Thumbnail,
    hero: '',
    title: '',
    subtitle: '',
    topCopy: '',
    banners: [],
    bottomCopy: '',
    gradient: {
      from: '#B1A57D',
      to: '#D4CAAE',
    },
  } as ProjectData
}
