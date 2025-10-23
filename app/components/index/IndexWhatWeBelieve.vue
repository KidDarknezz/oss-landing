<template>
  <UContainer class="py-25">
    <!-- COPY -->
    <div class="mb-10">
      <div class="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
          <h2 class="font-manrope text-3xl font-semibold lg:text-4xl">
            What We Believe<br />Shapes What We Build
          </h2>
        </div>
        <div class="w-full lg:w-1/2">
          <p class="font-manrope font-regular text-base lg:text-lg">
            We believe that impactful work begins with clear intention. Our process merges design
            thinking with cutting-edge technology to bring ideas to life—visually striking,
            strategically sound, and built to adapt. Guided by our core values—creativity, clarity,
            trust, and innovation—we shape what's next with purpose.
          </p>
        </div>
      </div>
    </div>
    <!-- /COPY -->

    <!-- /CAROUSEL -->
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-[31%]' }">
      <div class="carousel__item relative w-full cursor-pointer select-none">
        <div class="carousel__content relative h-full w-full">
          <div class="relative h-100 w-full overflow-hidden rounded-lg">
            <!-- Background video -->
            <video
              class="h-full w-full object-cover"
              autoplay
              muted
              loop
              playsinline
              :poster="item.poster"
            >
              <source :src="item.bg" type="video/mp4" />
            </video>

            <!-- Gradient overlay with text -->
            <div class="absolute inset-0 flex items-end">
              <div
                class="w-full p-6 text-white"
                style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
              >
                <h3 class="font-manrope mb-2 text-xl font-bold lg:text-2xl">
                  {{ item.title }}
                </h3>
                <p class="font-manrope text-base font-normal lg:text-lg">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCarousel>
    <!-- /CAROUSEL -->
    <div class="h-15" />
  </UContainer>
</template>

<script setup lang="ts">
import Value0 from '@/assets/videos/1_1-web.mp4'
import Value1 from '@/assets/videos/2_1-web.mp4'
import Value2 from '@/assets/videos/3_1-web.mp4'
import Value3 from '@/assets/videos/4_1-web.mp4'
import Value4 from '@/assets/videos/5_1-web.mp4'
import Value5 from '@/assets/videos/6_1-web.mp4'
import Value6 from '@/assets/videos/7_1-web.mp4'
import Value7 from '@/assets/videos/8_1-web.mp4'

import Value0Poster from '@/assets/images/1_1-poster.webp'
import Value1Poster from '@/assets/images/2_1-poster.webp'
import Value2Poster from '@/assets/images/3_1-poster.webp'
import Value3Poster from '@/assets/images/4_1-poster.webp'
import Value4Poster from '@/assets/images/5_1-poster.webp'
import Value5Poster from '@/assets/images/6_1-poster.webp'
import Value6Poster from '@/assets/images/7_1-poster.webp'
import Value7Poster from '@/assets/images/8_1-poster.webp'

const items = [
  {
    title: 'The Ride',
    desc: 'We embrace change, stay in motion, and adapt with purpose. ',
    bg: Value0,
    poster: Value0Poster,
  },
  {
    title: 'The Wave',
    desc: 'We flow with change, adapt fast, and move forward with purpose.',
    bg: Value1,
    poster: Value1Poster,
  },
  {
    title: 'The Tools',
    desc: 'We master the tools that move ideas forward. ',
    bg: Value2,
    poster: Value2Poster,
  },
  {
    title: 'The Message',
    desc: 'We craft messages that connect. Clear, intentional, and impactful storytelling at our core.',
    bg: Value3,
    poster: Value3Poster,
  },
  {
    title: 'The Trust',
    desc: 'We build real relationships—with our clients, our team, and our audience.',
    bg: Value4,
    poster: Value4Poster,
  },
  {
    title: 'The Idea',
    desc: 'We blend sharp thinking with the right tools to turn ideas into action. Strategy meets execution.',
    bg: Value5,
    poster: Value5Poster,
  },
  {
    title: 'The Creativity',
    desc: 'We create with purpose. Every idea is backed by insight, creativity, and the desire to elevate brands.',
    bg: Value6,
    poster: Value6Poster,
  },
  {
    title: 'The Evolution',
    desc: "We've evolved into a creative force where design meets technology to move brands forward.",
    bg: Value7,
    poster: Value7Poster,
  },
]
</script>

<style scoped>
.carousel__item {
  padding: 5px;
  width: 100%;
}

.carousel__content {
  height: 100px;
  border-radius: 20px;
  height: 400px;
}

.carousel-video-container {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 400px;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
  border-radius: 20px;
}
</style>
