<template>
  <ServicesHero />
  <ServicesList />
  <GeneralReadyToWorkWithUs />
</template>

<script setup>
useHead({
  title: 'One Spot | Our Services',
  meta: [
    {
      name: 'description',
      content: 'Design Code Content Done Right.',
    },
    { property: 'og:title', content: 'One Spot | Our Services' },
    {
      property: 'og:description',
      content: 'Design Code Content Done Right.',
    },
    // { property: 'og:image', content: '/images/og-about.jpg' },
    // { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>
