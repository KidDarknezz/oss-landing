import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_1.png'

export default function TigoComp() {
  return {
    id: 'tigo',
    name: 'Tigo',
    thumbnail: Thumbnail,
    hero: '',
    title: '',
    subtitle: '',
    topCopy: '',
    banners: [],
    bottomCopy: '',
    gradient: {
      from: '#52B8E8',
      to: '#004F9E',
    },
  } as ProjectData
}
