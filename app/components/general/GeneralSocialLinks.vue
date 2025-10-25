<template>
  <div class="flex flex-row gap-3">
    <UButton
      v-for="social in socials"
      :key="social.icon"
      size="sm"
      rounded
      class="cursor-pointer p-2"
      variant="link"
      color="neutral"
    >
      <UIcon :name="social.icon" class="size-5 text-white" />
    </UButton>
  </div>
</template>

<script lang="ts" setup>
const socials = [
  {
    icon: 'i-lucide-facebook',
    url: '',
  },
  {
    icon: 'i-lucide-twitter',
    url: '',
  },
  {
    icon: 'i-lucide-instagram',
    url: '',
  },
  {
    icon: 'i-lucide-linkedin',
    url: '',
  },
  {
    icon: 'i-lucide-youtube',
    url: '',
  },
]
</script>
