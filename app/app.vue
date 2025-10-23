<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <GeneralFooter />
</template>

<script setup>
onMounted(() => {
  document.documentElement.classList.remove('dark')
})
</script>
