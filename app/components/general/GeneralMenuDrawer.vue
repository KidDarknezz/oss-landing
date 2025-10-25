<template>
  <USlideover v-model:open="drawerOpen">
    <UButton class="md:hidden" size="md" variant="link">
      <UIcon name="i-lucide-menu" class="size-5 text-white" />
    </UButton>

    <template #content>
      <div class="h-full bg-black">
        <div class="mb-6 flex flex-row justify-end p-4">
          <UButton @click="toggleDrawer(false)" variant="link" size="md">
            <UIcon name="i-lucide-x" class="size-5 text-white" />
          </UButton>
        </div>
        <div class="pr-6">
          <div
            class="mb-10 w-full text-right text-3xl text-white"
            :class="gradientText(link.path)"
            v-for="link in navLinks"
            @click="goToPath(link.path)"
          >
            {{ link.label }}
          </div>
        </div>
        <div class="flex flex-row justify-end pt-8 pr-4">
          <GeneralSocialLinks />
        </div>
      </div>
    </template>
  </USlideover>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const { navLinks, toggleDrawer, drawerOpen } = NavDrawerComp()

const gradientText = (path: string) => (route.fullPath === path ? 'studio-gradient-text' : '')

const goToPath = (path: string) => {
  toggleDrawer(false)
  setTimeout(() => router.push(path), 200)
}
</script>
