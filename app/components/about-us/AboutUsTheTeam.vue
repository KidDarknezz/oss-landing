<template>
  <div class="bg-stone-700 text-white">
    <UContainer class="py-25">
      <div class="mb-15 flex flex-wrap items-center justify-center">
        <!-- Title -->
        <div class="font-manrope text-5xl font-normal">The team</div>

        <!-- Divider (hidden on small screens) -->
        <div class="mx-12 hidden h-24 border-r border-white sm:block"></div>

        <!-- Text -->
        <div class="w-full md:w-7/12">
          <div class="font-manrope text-justify text-base font-normal">
            We're a multidisciplinary team of designers, thinkers, and creators who work with
            agility, purpose, and collaboration at the core. Every project is approached in
            iterative steps — allowing us to adapt quickly, listen actively, and refine ideas in
            real time. We value transparency, fast feedback, and a shared vision.
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-20">
        <div class="flex-1" v-for="member in team" :key="member.name">
          <img :src="member.img" class="mb-6 h-auto w-full" />
          <div class="font-manrope mb-2 text-center text-lg font-semibold">
            {{ member.name }}
          </div>
          <div class="text-center text-lg font-semibold text-black">
            <span class="pa-2 bg-white" style="padding: 7px 25px">
              {{ member.role }}
            </span>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import CreativeDirector from '@/assets/images/us_creative_director.png'
import SeniorDeveloper from '@/assets/images/us_senior_developer.png'
import AccountManager from '@/assets/images/us_account_manager.png'

const team = [
  {
    img: CreativeDirector,
    name: 'Jean Zuleta',
    role: 'Creative Director',
  },
  {
    img: SeniorDeveloper,
    name: 'Alejandro Millán',
    role: 'Senior Developer',
  },
  {
    img: AccountManager,
    name: 'Gabriela Perez',
    role: 'Account Manager',
  },
]
</script>
