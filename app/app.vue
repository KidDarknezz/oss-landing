<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <GeneralHeader v-if="route.fullPath !== '/'" />
    <div class="h-[58.16px]" v-if="route.fullPath !== '/'" />
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
