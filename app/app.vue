<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup>
onMounted(() => {
  document.documentElement.classList.remove('dark')
})
</script>
