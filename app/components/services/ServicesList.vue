<template>
  <UContainer class="py-25">
    <div class="-mx-4 flex flex-wrap">
      <div v-for="service in services" :key="service.name" class="my-8 w-full px-4 md:w-1/2">
        <div class="flex items-center">
          <!-- Image -->
          <div class="w-1/6">
            <img :src="service.img" class="h-auto w-full" />
          </div>

          <!-- Text -->
          <div class="w-5/6 pl-6">
            <div
              class="font-manrope mb-3 bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-2xl font-normal text-transparent"
              style="line-height: normal"
            >
              {{ service.name }}
            </div>
            <div class="font-manrope text-base font-semibold">
              {{ service.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import GraphicDesign from '@/assets/images/service_graphic_design.gif'
import UIUX from '@/assets/images/service_ui_ux.gif'
import Animation2D from '@/assets/images/service_2d_animation.gif'
import Animation3D from '@/assets/images/service_3d_animation.gif'
import VideoEditing from '@/assets/images/service_video_editing.gif'
import VideoProduction from '@/assets/images/service_video_production.gif'
import webDevelopment from '@/assets/images/service_web_development.gif'
import AppDevelopment from '@/assets/images/service_app_development.gif'

const services = [
  {
    name: 'Graphic Design',
    description:
      'We craft bold, strategic visuals that capture attention and tell your story at a glance. From branding to campaigns, we make design work harder—and smarter—for your business.',
    img: GraphicDesign,
  },
  {
    name: 'UI/UX Design',
    description:
      'We blend creativity and logic to design seamless digital experiences. Every pixel has a purpose. Every interaction is built to convert, engage, and delight.',
    img: UIUX,
  },
  {
    name: '2D Animation',
    description:
      'We bring your brand to life with expressive, fluid 2D animation. Perfect for explainer videos, social media, or storytelling that sticks.',
    img: Animation2D,
  },
  {
    name: '3D ',
    description:
      "From concept to render, our 3D visuals add depth and realism to your projects. Whether it's product mockups or immersive environments, we make it pop.",
    img: Animation3D,
  },
  {
    name: 'Video Editing',
    description:
      'We cut with purpose. Our editors shape raw footage into powerful narratives that drive emotion, clarity, and action—no fluff, just impact.',
    img: VideoEditing,
  },
  {
    name: 'Video Production',
    description:
      "From script to screen, we handle full-scale productions with precision. Whether it's a commercial, interview, or brand story, we make sure your vision shines.",
    img: VideoProduction,
  },
  {
    name: 'Web Development',
    description:
      'We build fast, intuitive websites that look great and work even better. Our devs blend form with function—your ideas, brought to life online.',
    img: webDevelopment,
  },
  {
    name: 'App Development',
    description:
      'Smart, scalable, and beautifully built. We create apps that solve real problems and deliver seamless experiences across all devices.',
    img: AppDevelopment,
  },
]
</script>
