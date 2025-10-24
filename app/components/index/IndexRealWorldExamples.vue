<template>
  <div class="studio-gray-gradient py-25 text-white">
    <UContainer>
      <!-- TITLE -->
      <div class="font-manrope mb-10 text-center text-3xl font-semibold lg:text-4xl">
        Real-world examples of how we have helped companies achieve their objectives.
      </div>
      <!-- /TITLE -->

      <!-- BTNS SELECT -->
      <div class="mb-6 flex flex-wrap justify-center">
        <div
          v-for="service in projects"
          :key="service.name"
          class="mb-4 w-full px-4 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <div
            @click="selectService(service.name)"
            :class="`${isServiceSelected(service.name)} font-manrope cursor-pointer font-bold`"
          >
            {{ service.name }}
          </div>
        </div>
      </div>
      <!-- /BTNS SELECT -->

      <!-- /CAROUSEL -->
      <UCarousel
        v-slot="{ item }"
        :items="selectedService?.projects"
        :ui="{ item: 'basis-[31%]' }"
        :align="'start'"
      >
        <div
          class="service-tile cursor-pointer"
          :style="{ backgroundImage: `url(${item.data.thubnail})` }"
          @click="navToProject(item.data.id)"
        />
      </UCarousel>
      <!-- /CAROUSEL -->
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const { projects } = ProjectsComp()
const router = useRouter()

const selectedService = ref(projects[0])

const selectService = (service: string) => {
  selectedService.value = projects.find(serv => serv.name === service)
}

const navToProject = (id: string) => {
  router.push(`/projects/${id}`)
}

const isServiceSelected = (service: string) => {
  if (service === selectedService.value?.name)
    return 'service-btn-selected bg-linear-to-r from-emerald-500 to-cyan-500'
  return 'service-btn'
}
</script>

<style scoped>
.services {
  padding: 4.4rem 0;
}

.service-btn {
  padding: 10px 20px;
  border-radius: 20px;
  border: solid white 1px;
  cursor: pointer;
}

.service-btn-selected {
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  color: white;
}

.service-tile {
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  height: 375px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
