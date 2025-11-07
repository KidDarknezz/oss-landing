<template>
  <div v-if="viewProject && screenSize">
    <img :src="viewProject.heroMobile" v-if="screenSize === 'mobile'" />
    <div
      class="h-screen w-full bg-cover bg-center"
      :style="{ backgroundImage: `url(${viewProject.hero})` }"
      v-else
    />

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
    <div
      v-for="(banner, index) of responsiveBanners"
      :class="index != 0 && isVideo(banner) ? 'py-25' : ''"
    >
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
    <div class="bg-stone-100">
      <UContainer class="py-25">
        <div class="font-manrope mb-15 text-center text-3xl font-semibold lg:text-4xl">
          See more: <span class="studio-gradient-text">{{ viewCategory }}</span>
        </div>
        <GeneralProjectsCarousel :projects="projectsInCategory || []" />
      </UContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ProjectData } from '~/types/ProjectData'
const route = useRoute()
const services = ProjectsComp()

const viewProject = ref<ProjectData>()
const viewCategory = ref<string>()
const screenWidth = ref(0)
const screenSize = ref<'mobile' | 'tablet' | 'desktop'>()

const gFrom = computed(() => viewProject.value?.gradient.from)

const gTo = computed(() => viewProject.value?.gradient.to)

const responsiveBanners = computed(() => {
  if (screenSize.value === 'mobile') return viewProject.value?.bannersMobile
  return viewProject.value?.banners
})
const projectsInCategory = computed(() =>
  services
    .find(serv => serv.name === viewCategory.value)
    ?.projects.filter(proj => proj.id !== viewProject.value?.id)
)

const isVideo = (value: string) => value.includes('youtube')

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth
  if (screenWidth.value < 640) screenSize.value = 'mobile'
  else if (screenWidth.value < 1024) screenSize.value = 'tablet'
  else screenSize.value = 'desktop'
}

onMounted(() => updateScreenSize())

for (let category of services) {
  const project = category.projects.find(proj => proj.id === route.params.id)
  viewCategory.value = category.name
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
