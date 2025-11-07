export interface ProjectData {
  id: string
  name: string
  thumbnail: string
  hero: string
  heroMobile: string
  title: string
  subtitle: string
  topCopy: string
  banners: string[]
  bannersMobile: string[]
  bottomCopy: string
  gradient: { from: string; to: string }
  url?: string
}
