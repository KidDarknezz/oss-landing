<template>
  <div v-if="viewProject">
    <img :src="viewProject.hero" class="w-full" />
    <UContainer class="py-25">
      <div class="manrope-700 mb-5 text-center text-4xl text-black">{{ viewProject.title }}</div>

      <div class="mb-7 flex flex-row justify-center">
        <div
          class="manrope-700 inline-block rounded-2xl px-8 py-4 text-center text-white"
          :style="{
            background: `linear-gradient(to right, ${gFrom}, ${gTo})`,
          }"
        >
          {{ viewProject.subtitle }}
        </div>
      </div>

      <div v-html="viewProject.topCopy" class="manrope-400 text-center text-black" />
    </UContainer>
    <div v-for="(banner, index) of viewProject.banners" :class="index != 0 ? 'pt-25' : ''">
      <img :src="banner" class="w-full" v-if="!isVideo(banner)" />
      <UContainer v-else>
        <iframe
          class="aspect-video w-full"
          :src="banner"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </UContainer>
    </div>
    <UContainer class="py-20">
      <div class="mb-6 flex flex-row justify-center">
        <a :href="viewProject.url" target="_blank" v-if="viewProject.url">
          <div
            class="manrope-700 inline-block rounded-2xl px-8 py-4 text-center text-white"
            :style="{
              background: `linear-gradient(to right, ${gFrom}, ${gTo})`,
            }"
          >
            Open project
          </div>
        </a>
      </div>

      <div class="manrope-400 text-center text-black" v-html="viewProject.bottomCopy" />
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import { type ProjectData } from '~/types/ProjectData'
const route = useRoute()
const services = ProjectsComp()

const viewProject = ref<ProjectData>()

const gFrom = computed(() => viewProject.value?.gradient.from)
const gTo = computed(() => viewProject.value?.gradient.to)

const isVideo = (value: string) => value.includes('youtube')

for (let category of services) {
  const project = category.projects.find(proj => proj.id === route.params.id)
  if (project) {
    useHead({
      title: `One Spot | ${project.name}`,
      meta: [
        {
          name: 'description',
          content: project.subtitle,
        },
        { property: 'og:title', content: `One Spot | ${project.name}` },
        {
          property: 'og:description',
          content: project.subtitle,
        },
      ],
    })
    viewProject.value = project
    break
  }
}
</script>
