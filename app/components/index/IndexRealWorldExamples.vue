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
          v-for="service in services"
          :key="service.name"
          class="mb-4 w-full px-4 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <div
            @click="selectService(service)"
            :class="`${isServiceSelected(service.name)} font-manrope cursor-pointer font-bold`"
          >
            {{ service.name }}
          </div>
        </div>
      </div>
      <!-- /BTNS SELECT -->

      <!-- /CAROUSEL -->
      <UCarousel v-slot="{ item }" :items="selectedService?.projects" :ui="{ item: 'basis-[31%]' }">
        <div class="service-tile cursor-pointer" :style="{ backgroundImage: `url(${item.img})` }" />
      </UCarousel>
      <!-- /CAROUSEL -->
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
type Service = {
  name: string
  projects: {
    title: string
    desc: string
    img: string
  }[]
}

const services: Service[] = [
  {
    name: 'Brand Development',
    projects: [
      {
        title: 'Aqua Titanium Labrador',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
      {
        title: 'Fuschia Copper Fox Terrier',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
      {
        title: 'Blue Aluminium Border Collie',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
      {
        title: 'Teal Mercury Afghan Hound',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
      {
        title: 'Yellow Brass Pomeranian',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
      {
        title: 'Silver Aluminium Doberman',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
    ],
  },
  {
    name: 'Animation',
    projects: [
      {
        title: 'Blue Platinum Beagle',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
    ],
  },
  {
    name: 'UI/UX & Development',
    projects: [
      {
        title: 'Purple Lead Boxer',
        desc: 'Lorem ipsum dolor.',
        img: 'https://placehold.co/300x300',
      },
    ],
  },
]
const selectedService = ref(services[0])

const selectService = (service: Service) => (selectedService.value = service)

const isServiceSelected = (service: string) => {
  if (service === selectedService.value?.name) return 'service-btn-selected studio-gradient'
  return 'service-btn'
}
</script>

<style scoped>
.services {
  /* border-radius: 20px; */
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
