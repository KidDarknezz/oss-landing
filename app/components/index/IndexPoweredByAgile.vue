<template>
  <UContainer class="py-25">
    <div class="mb-12 flex flex-col items-start gap-8 lg:flex-row lg:items-center">
      <!-- Left column -->
      <div class="mb-4 w-full px-4 lg:mb-0 lg:w-7/12">
        <h2 class="font-manrope text-3xl font-semibold lg:text-4xl">
          Powered by Agile. Inspired by out-of-the-box thinking.
        </h2>
      </div>

      <!-- Right column -->
      <div class="w-full px-4 lg:w-5/12">
        <p class="font-manrope text-justify text-base font-normal lg:text-lg">
          At One Spot Creative Studio, we move fast, think big, and adapt constantly. Our
          Agile-driven process keeps us in sync with your vision while giving space to bold,
          out-of-the-box thinking. Every sprint is a chance to test, learn, and push creativity
          forward — because great ideas don't wait, and neither do we.
        </p>
      </div>
    </div>

    <!-- Images row -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <img :src="ProjectsFinished" class="w-[34%] rounded-lg" />
      <img :src="HowWeWork" class="w-[64%] rounded-lg" />
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import ProjectsFinished from '@/assets/images/projects-finished.png'
import HowWeWork from '@/assets/images/how-we-work.png'
</script>
