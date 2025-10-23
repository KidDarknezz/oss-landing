<template>
  <NuxtRouteAnnouncer />
  <GeneralHeader v-if="route.fullPath !== '/'" />
  <NuxtPage />
  <GeneralFooter />
</template>

<script setup>
const route = useRoute()
onMounted(() => {
  document.documentElement.classList.remove('dark')
})
</script>
