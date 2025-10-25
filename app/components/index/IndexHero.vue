<template>
  <div class="hero-video-container">
    <!-- Background video -->
    <video class="hero-video-background" autoplay muted loop playsinline :poster="HeroPoster">
      <source :src="HeroVideo" type="video/mp4" />
      <source :src="HeroVideoWebm" type="video/webm" />
    </video>
    <!-- /Background video -->

    <!-- Foreground content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="p-4 text-center text-white">
        <p class="mx-auto max-w-md text-lg">
          Transform your vision into powerful digital experiences — Let's design the future
          together.
        </p>
        <h1 class="font-manrope mx-auto mt-4 max-w-3xl text-3xl font-normal md:text-4xl">
          We Create Designs That Set You Apart from the Competition
        </h1>
        <UButton
          color="primary"
          size="lg"
          class="text-body mt-6 cursor-pointer bg-linear-to-r from-emerald-500 to-cyan-500 px-8 font-semibold"
          rounded
          to="/contact-us"
        >
          Start a Project
        </UButton>
      </div>
    </div>

    <!-- /Foreground content -->

    <!-- Nav anchor -->
    <div class="nav-anchor" ref="target"></div>
    <!-- /Nav anchor -->

    <!-- Navbar -->
    <div :class="navClass">
      <UContainer>
        <div class="flex items-center justify-between py-2">
          <!-- Logo -->
          <img :src="OSStudioLogoWhite" width="165" alt="OS Studio Logo" />

          <!-- Navigation links (hidden on xs/sm) -->
          <div class="hidden space-x-8 md:flex">
            <span
              v-for="(link, i) in navLinks"
              :key="i"
              @click="goToPath(link.path)"
              :class="[
                'cursor-pointer text-lg',
                i === 0
                  ? 'bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text font-semibold text-transparent'
                  : '',
              ]"
            >
              {{ link.label }}
            </span>
          </div>
          <GeneralMenuDrawer />
        </div>
      </UContainer>
    </div>
    <!-- /Navbar -->
  </div>
</template>

<script lang="ts" setup>
import HeroVideo from '@/assets/videos/hero-web.mp4'
import HeroVideoWebm from '@/assets/videos/hero-web.webm'
import HeroPoster from '@/assets/images/hero-poster.webp'
import OSStudioLogoWhite from '@/assets/images/os-studio-logo-white.svg'

const router = useRouter()
const { navLinks } = NavDrawerComp()

const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const isCloseToTop = ref(true)
const observer = ref<IntersectionObserver>()

const goToPath = (path: string) => router.push(path)

const navClass = computed(() => {
  if (!isVisible.value && !isCloseToTop.value) return 'hero-nav-fixed'
  return 'hero-nav'
})

onMounted(() => {
  observer.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) isVisible.value = true
        else isVisible.value = false
      })
    },
    {
      root: null,
      threshold: 0.1,
    }
  )
  if (target.value) observer.value.observe(target.value)

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop < 850) isCloseToTop.value = true
    else isCloseToTop.value = false
  }
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  if (observer.value) observer.value.disconnect()
})
</script>

<style scoped>
.hero-video-container {
  position: relative;
  height: 120vh;
  width: 100%;
  overflow: hidden;
}

.hero-video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 120vh;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
}

.nav-anchor {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-bottom: 72px;
}

.hero-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
}

.hero-nav-fixed {
  position: fixed;
  width: 100%;
  color: white;
  background-color: black;
  z-index: 2;
}
</style>
