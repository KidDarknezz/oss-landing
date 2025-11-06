import Hero from '@/assets/images/project_advisors_hero.png'
import type { ProjectData } from '~/types/ProjectData'
import Thumbnail from '@/assets/images/projects_anim_4.png'

export default function advisorsComp() {
  return {
    id: 'advisors',
    name: 'Advisors',
    thumbnail: Thumbnail,
    hero: Hero,
    title: 'Shaping Vision into Clarity',
    subtitle: 'Client: Advisors — Brand Refresh & Inspirational Video',
    topCopy:
      'This project focused on enhancing the visual identity of Advisors, a company specialized in business strategy and corporate communication. The logo and brand elements were refined — adjusting proportions, spacing, and layout to achieve a cleaner, more balanced, and contemporary look.<br/><br/>Additionally, an inspirational video was produced as a commercial proposal, designed to convey the company’s vision, values, and purpose. The piece blends emotional storytelling with a professional aesthetic, reinforcing Advisors’ credibility and leadership in its field.',
    banners: ['https://www.youtube.com/embed/KIeuw5oG1ss?si=dvtti1jye3l37PS2'],
    bottomCopy:
      'The result is a renewed visual identity that embodies clarity, purpose, and professionalism — a brand ready to communicate with strategy and connect with vision.',
    gradient: {
      from: '#73CDE1',
      to: '#00AED4',
    },
  } as ProjectData
}
