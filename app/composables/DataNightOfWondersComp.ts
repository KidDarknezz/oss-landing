import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_6.png'

export default function NightOfWondersComp() {
  return {
    id: 'night-of-wonders',
    name: 'A True Night of Wonders',
    thumbnail: Thumbnail,
    hero: '',
    title: '',
    subtitle: '',
    topCopy: '',
    banners: [],
    bottomCopy: '',
    gradient: {
      from: '#73CDE1',
      to: '#00AED4',
    },
  } as ProjectData
}
