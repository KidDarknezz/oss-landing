import Hero from '@/assets/images/project_foro_periodistas_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_2.png'

export default function forumPeriodistasComp() {
  return {
    id: 'forum-de-periodistas',
    name: 'Fórum de Periodistas',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Visual Impact for a Night of Recognition',
    subtitle: 'Client: Fórum de Periodistas - Awards Night Animations',
    topCopy:
      "For one of the most important events in Panamanian journalism, we brought the stage to life. The Fórum de Periodistas entrusted us with the full motion design for their awards night — a celebration of excellence, dedication, and truth in media.<br/><br/>Working with their established brand, we created dynamic screen animations and a refreshed animated version of their official logo, adding movement and elegance to every transition. Each screen was carefully timed and styled to enhance the ceremony's flow, highlight honorees, and elevate the overall experience.",
    banners: [
      'https://www.youtube.com/embed/9G2n-peOyMc?si=qX5pyIaABlxmwwxS',
      'https://www.youtube.com/embed/kwCWB_lYzAE?si=uWHb1RDthQ7TlQkn',
    ],
    bottomCopy:
      "The result was a seamless visual journey that honored journalism's finest with the style and sophistication they deserve. We're proud to have contributed to a night that celebrated truth, talent, and the power of storytelling.",
    gradient: {
      from: '#5DC1D4',
      to: '#55AF6C',
    },
  } as ProjectData
}
