<template>
  <div class="studio-gray-gradient hero text-white">
    <UContainer>
      <div class="flex flex-wrap items-center justify-between">
        <!-- Text content -->
        <div class="mb-8 w-full px-8 sm:w-8/12 lg:w-8/12">
          <div class="font-manrope mb-10 text-3xl font-normal">
            We Are Creative Thinkers.<br />
            Visual Storytellers. <br />
            Brand Builders.
          </div>
          <div class="font-manrope mb-6 text-base font-normal">
            At One Spot Creative Studio, we specialize in crafting bold visual identities and
            translating ideas into compelling design experiences. From concept to execution, we
            build brands, campaigns, and creative assets that speak clearly and leave a lasting
            impression.
          </div>
        </div>

        <!-- Image -->
        <div class="mb-8 w-1/2 px-8 sm:w-1/4 lg:w-1/3">
          <img :src="OSSIcon" class="h-auto w-full" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import OSSIcon from '@/assets/images/oss-icon.svg'
</script>

<style scoped>
.hero {
  padding: 15rem 0;
}
</style>
