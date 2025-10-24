import Banner1 from '@/assets/images/project_hearts_on_fire_banner_1.png'
import Hero from '@/assets/images/project_hearts_on_fire_hero.png'
import Thumbnail from '@/assets/images/projects_gd_6.png'

const data = {
  id: 'hearts-on-fire',
  name: 'Hearts on Fire',
  thumbnail: Thumbnail,
  hero: Hero,
  title: 'Celebrating Love with Editorial Elegance',
  subtitle: 'Client: Hearts on Fire - Concept Book Design',
  topCopy:
    "Hearts on Fire's concept book was designed to celebrate the beauty of weddings, commitment, and timeless diamond jewelry through a refined editorial approach.<br/><br/>The goal was to go beyond product presentation and craft a narrative — blending elegant layouts, emotive pacing, and high-end typography to create a visually immersive experience. Every page was designed to reflect the brand's sophistication while honoring the emotional moments behind each piece.",
  banners: [Banner1],
  bottomCopy:
    'More than a catalog, this book became a visual love letter — capturing the brilliance of the brand and the stories their diamonds are meant to tell.',
  gradient: {
    from: '#52B8E8',
    to: '#004F9E',
  },
}

export default function heartsOnFireComp() {
  return {
    data,
  }
}
