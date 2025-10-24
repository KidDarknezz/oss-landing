import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_4.png'

export default function advisorsComp() {
  return {
    id: 'advisors',
    name: 'Advisors',
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
