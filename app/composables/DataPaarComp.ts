import Banner1 from '@/assets/images/project_paar_banner_1.png'
import Banner2 from '@/assets/images/project_paar_banner_2.png'
import Hero from '@/assets/images/project_paar_hero.png'
import Thumbnail from '@/assets/images/projects_uiux_2.png'

const data = {
  id: 'paar',
  name: 'Paar',
  thumbnail: Thumbnail,
  hero: Hero,
  title: "A Digital Home That Reflects PAAR's Essence",
  subtitle: 'Client: PAAR - Website Development',
  topCopy:
    "PAAR isn't just a real estate company—it's a philosophy of living well. With deep roots in intention, beauty, and trust, PAAR builds homes that elevate the standard of how families live, grow, and dream. Our mission was to design a website that felt just as thoughtful, elegant, and enduring.<br/><br/>We started by immersing ourselves in PAAR’s story, understanding the values that define their approach. From there, we designed and developed a completely custom website—built from the ground up in pure code, with no templates or third-party builders. This gives PAAR a fast, scalable platform, with total control over design and performance.",
  banners: [Banner1, Banner2],
  bottomCopy:
    'Every element, from structure to visuals to micro-interactions, was crafted to reflect PAAR’s identity: refined yet warm, sophisticated yet human. The site speaks the same language as their projects—understated elegance, high standards, and trust earned through detail.<br/><br/>Because for a company like PAAR—where every home is built with care, meaning, and vision—the digital experience must do the same.',
  gradient: {
    from: '#014A53',
    to: '#0299AB',
  },
  url: 'https://paar.com.pa/',
}

export default function paarComp() {
  return {
    data,
  }
}
