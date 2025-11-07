<template>
  <UCarousel
    v-slot="{ item }"
    :items="projects"
    :ui="{
      item: 'basis-[85%] md:basis-[45%] lg:basis-[28%]',
    }"
    :align="'start'"
  >
    <div
      class="service-tile aspect-square cursor-pointer"
      :style="{ backgroundImage: `url(${item.thumbnail})` }"
      @click="navToProject(item.id)"
    />
  </UCarousel>
</template>

<script lang="ts" setup>
import type { ProjectData } from '~/types/ProjectData'

const router = useRouter()

const navToProject = (id: string) => router.push(`/projects/${id}`)

defineProps<{
  projects: ProjectData[]
}>()
</script>

<style scoped>
.service-tile {
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
