<template>
  <div class="services-hero" :style="{ backgroundImage: `url(${Hero})` }">
    <UContainer class="h-full">
      <div class="flex h-full flex-row items-center justify-center">
        <div class="w-100">
          <img :src="Flask" class="h-auto w-full" />
        </div>
        <div class="text-black">
          <div class="font-manrope text-6xl font-extrabold">Design</div>
          <div class="font-manrope text-6xl font-extrabold">Code</div>
          <div class="font-manrope text-6xl font-extrabold">Content</div>
          <div class="font-manrope text-6xl font-extrabold text-[#00c2f3]">Done Right.</div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import Hero from '@/assets/images/services_hero.png'
import Flask from '@/assets/images/services_hero_flask.svg'
</script>

<style scoped>
.services-hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
