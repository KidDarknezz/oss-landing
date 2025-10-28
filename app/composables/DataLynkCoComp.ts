import Banner1 from '@/assets/images/project_lynkco_banner_1.png'
import Banner2 from '@/assets/images/project_lynkco_banner_2.png'
import Hero from '@/assets/images/project_lynkco_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_uiux_1.png'

export default function lynkCoComp() {
  return {
    id: 'lynkco',
    name: 'LynkCo',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Lynk & Co Launch Event Registration Platform',
    subtitle: 'Ricardo Pérez, S.A. - Exclusive Panama Launch of Lynk & Co',
    topCopy:
      'To mark the exclusive launch of Lynk & Co in Panama, we designed a digital experience that matched the brand’s forward-thinking spirit. At the heart of it was a custom landing page where guests could register with ease. Upon signing up, each guest received a personalized email featuring a unique QR code—giving them instant, paperless access to the event.<br/><br/>To build anticipation, we implemented a branded email reminder system with just one click, keeping guests engaged and informed in the lead-up to the big day. On-site, we replaced the traditional check-in process with an intuitive QR scanner that identified and redeemed each attendee instantly. A backup manual check-in mode ensured reliability, all while reinforcing a polished, tech-savvy experience.<br/><br/>Every element—from the web and mobile optimization to the follow-up emails with event maps—was designed to feel effortless. At the end of the night, the client received real-time access to all attendee data, turning the event into a launchpad not only for the brand, but for future sales and relationships.',
    banners: [Banner1, Banner2],
    bottomCopy:
      'Every element—from the web and mobile optimization to the follow-up emails with event maps—was designed to feel effortless. At the end of the night, the client received real-time access to all attendee data, turning the event into a launchpad not only for the brand, but for future sales and relationships.',
    gradient: {
      from: '#014A53',
      to: '#0299AB',
    },
    url: 'https://lynk-co-rsvp.web.app/',
  } as ProjectData
}
