<template>
  <div v-if="viewProject">
    <img :src="viewProject.hero" class="w-full" />
    <UContainer class="py-25">
      <div class="manrope-700 mb-5 text-center text-4xl text-black">{{ viewProject.title }}</div>

      <div class="mb-7 flex flex-row justify-center">
        <div :class="gradientClasses">
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

const gradientClasses = computed(
  () =>
    `inline-block rounded-2xl text-white manrope-700 text-center bg-linear-to-r from-${viewProject.value.gradient.from} to-${viewProject.value.gradient.to} px-8 py-4`
)

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
