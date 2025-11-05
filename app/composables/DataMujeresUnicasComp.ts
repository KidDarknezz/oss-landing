import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_5.png'

export default function MujeresUnicasComp() {
  return {
    id: 'mujeres-unicas',
    name: 'Global Bank - Premi Mujeres Únicas',
    thumbnail: Thumbnail,
    hero: '',
    title: '',
    subtitle: '',
    topCopy: '',
    banners: [],
    bottomCopy: '',
    gradient: {
      from: '#0B42CC',
      to: '#00AED4',
    },
  } as ProjectData
}
