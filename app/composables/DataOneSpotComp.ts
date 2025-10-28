import Banner1 from '@/assets/images/project_onespot_banner_1.png'
import Hero from '@/assets/images/project_onespot_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_uiux_4.png'

export default function onespotComp() {
  return {
    id: 'onespot',
    name: 'One Spot',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Pioneering Event Technology in Panama',
    subtitle: 'One Spot Tickets - App/Website Development',
    topCopy:
      'As technology experts, we started with our own mobile app, built from the ground up with advanced features designed to revolutionize how people discover and attend events in Panama. By leading with innovation, we introduced functionalities never before seen in the local market — from seamless event discovery to secure, integrated ticket purchasing with local banks.<br/><br/>Developing One Spot Tickets was a challenge we embraced, and over the years it has evolved into a robust platform helping all types of event organizers streamline operations, engage audiences, and deliver memorable experiences.',
    banners: [Banner1],
    bottomCopy:
      'This project reflects our expertise in creating custom mobile applications: we combine cutting-edge technology, user-focused design, and local market insights to build apps that not only solve real problems but also delight users. From concept to launch and continuous development, we turn ideas into innovative digital experiences tailored to each client.',
    gradient: {
      from: '#FA3C5E',
      to: '#FF002E',
    },
    url: 'https://www.onespotlive.com/',
  } as ProjectData
}
