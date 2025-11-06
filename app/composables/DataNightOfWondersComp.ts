import Banner1 from '@/assets/images/project_night_of_wonders_banner_1.png'
import Banner2 from '@/assets/images/project_night_of_wonders_banner_2.png'
import Hero from '@/assets/images/project_night_of_wonders_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_6.png'

export default function NightOfWondersComp() {
  return {
    id: 'night-of-wonders',
    name: 'A True Night of Wonders',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'A True Night of Wonders',
    subtitle: 'Client: Global Bank -Premio Mujeres Únicas',
    topCopy:
      "For WIZO Panama's “Night of Wonders”, we created a complete visual experience that brought the event's theme to life through motion, design, and technology.<br/><br/>Our team produced a combination of 2D and 3D animations, video editing, and custom 3D models to enhance the stage and overall ambiance of the event. Additionally, we developed an interactive 3D touchscreen experience that allowed guests to make donations and explore WIZO's various community programs in an engaging, dynamic way.",
    banners: ['https://www.youtube.com/embed/SYqANKB6mEg?si=aQld_sHGRPgIaubW', Banner1, Banner2],
    bottomCopy:
      "From motion graphics to immersive technology, every element was designed to celebrate WIZO Panama's mission of empowering and supporting communities — turning a Night Of Wonders into an unforgettable experience.",
    gradient: {
      from: '#73CDE1',
      to: '#00AED4',
    },
  } as ProjectData
}
