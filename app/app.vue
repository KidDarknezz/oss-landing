<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <GeneralHeader v-if="route.fullPath !== '/'" />
    <NuxtPage />
    <GeneralFooter />
  </UApp>
</template>

<script setup>
const route = useRoute()
onMounted(() => {
  document.documentElement.classList.remove('dark')
})
</script>
