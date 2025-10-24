<template>
  <AboutUsHero />
  <div class="border-t border-gray-700"></div>
  <AboutUsTheTeam />
  <div class="bg-linear-to-r from-emerald-500 to-cyan-500">
    <GeneralReadyToWorkWithUs />
  </div>
</template>

<script setup>
useHead({
  title: 'One Spot | About Us',
  meta: [
    {
      name: 'description',
      content: 'We Are Creative Thinkers. Visual Storytellers. Brand Builders.',
    },
    { property: 'og:title', content: 'One Spot | About Us' },
    {
      property: 'og:description',
      content: 'We Are Creative Thinkers. Visual Storytellers. Brand Builders.',
    },
  ],
})
</script>
