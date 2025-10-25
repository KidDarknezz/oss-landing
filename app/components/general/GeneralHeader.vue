<template>
  <div class="fixed top-0 left-0 z-10 w-full bg-black text-white">
    <UContainer>
      <div class="mx-auto flex max-w-7xl items-center justify-between py-2">
        <img
          :src="OSStudioLogoWhite"
          class="h-auto w-[165px] cursor-pointer"
          @click="router.push('/')"
        />
        <div class="hidden gap-8 sm:flex">
          <span
            v-for="(link, i) in navLinks"
            :key="i"
            @click="goToPath(link.path)"
            :class="`cursor-pointer text-lg ${gradientText(link.path)}`"
          >
            {{ link.label }}
          </span>
        </div>
        <GeneralMenuDrawer />
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import OSStudioLogoWhite from '@/assets/images/os-studio-logo-white.svg'

const route = useRoute()
const router = useRouter()
const { navLinks } = NavDrawerComp()

const gradientText = (path: string) => (route.fullPath === path ? 'studio-gradient-text' : '')

const goToPath = (path: string) => router.push(path)
</script>
