import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_2.png'

export default function forumPeriodistasComp() {
  return {
  id: 'forum-de-periodistas',
  name: 'Fórum de Periodistas',
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
