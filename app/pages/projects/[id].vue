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
    <img v-for="banner of viewProject.banners" :src="banner" class="w-full" />
    <UContainer class="py-20">
      <div class="manrope-400 text-center text-black">{{ viewProject.bottomCopy }}</div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const projects = ProjectsComp()

const viewProject = ref()

const gFrom = computed(() => viewProject.value.gradient.from || '#000')

const gTo = computed(() => viewProject.value.gradient.to || '#000')

onMounted(() => {
  for (let category of projects.projects) {
    const project = category.projects.find(proj => proj.data.id === route.params.id)
    if (project) {
      viewProject.value = project.data
      break
    }
  }
})
</script>
