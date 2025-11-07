<template>
  <div class="bg-[#232323] text-white">
    <UContainer class="py-25">
      <div
        class="mb-15 grid items-center justify-center gap-8 text-center md:grid-cols-[auto_1px_1fr] md:text-left"
      >
        <div class="font-manrope py-4 text-5xl font-normal">The team</div>
        <div class="mx-auto hidden h-24 border-r border-white md:block"></div>
        <div class="w-full md:w-auto">
          <div class="font-manrope text-justify text-base font-normal">
            We're a multidisciplinary team of designers, thinkers, and creators who work with
            agility, purpose, and collaboration at the core. Every project is approached in
            iterative steps — allowing us to adapt quickly, listen actively, and refine ideas in
            real time. We value transparency, fast feedback, and a shared vision.
          </div>
        </div>
      </div>

      <div class="grid gap-20 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div v-for="member in team" :key="member.name" class="text-center">
          <img :src="member.img" class="mb-6 h-auto w-full rounded-2xl" />
          <div class="font-manrope mb-2 text-lg font-semibold">
            {{ member.name }}
          </div>
          <div class="text-lg font-semibold text-black">
            <span class="inline-block rounded-xl bg-white px-6 py-2">
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
