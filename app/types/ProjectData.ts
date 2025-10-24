export interface ProjectData {
  id: string
  name: string
  thumbnail: string
  hero: string
  title: string
  subtitle: string
  topCopy: string
  banners: string[]
  bottomCopy: string
  gradient: { from: string; to: string }
  url?: string
}
