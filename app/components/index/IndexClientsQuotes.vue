<template>
  <div class="bg-gray-100">
    <UContainer class="py-25">
      <!-- /QUOTES -->
      <div class="font-manrope min-h-[150px] text-xl font-semibold">
        {{ slides[currSlide]?.text }}
      </div>
      <!-- /QUOTES -->

      <!-- QUOTE PERSON -->
      <div class="mt-4 flex flex-wrap items-center justify-between">
        <div class="mb-6 flex items-center">
          <div
            class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-300 text-xl text-white"
          >
            <span class="font-bold uppercase">
              {{ slides[currSlide]?.name?.[0] || '' }}
            </span>
          </div>
          <div class="ml-4">
            <div class="font-manrope text-xl font-bold">
              {{ slides[currSlide]?.name }}
            </div>
            <div class="font-manrope text-sm font-normal text-gray-500">
              {{ slides[currSlide]?.role }}
            </div>
          </div>
        </div>
        <div class="mb-6 w-full lg:w-auto">
          <div class="flex items-center justify-between">
            <UButton
              color="neutral"
              variant="outline"
              icon="i-heroicons-arrow-left"
              class="mr-7 cursor-pointer rounded-full px-6"
              @click="prevSlide"
            />
            <span class="font-manrope w-10 text-center text-sm font-semibold">
              {{ `${currSlide + 1}`.padStart(2, '0') }}/{{ `${slides.length}`.padStart(2, '0') }}
            </span>
            <UButton
              color="neutral"
              icon="i-heroicons-arrow-right"
              class="ml-7 cursor-pointer rounded-full px-6"
              @click="nextSlide"
            />
          </div>
        </div>
      </div>
      <!-- /QUOTE PERSON -->
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const slides = [
  {
    text: `“They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    name: 'Michael Kaizer',
    role: 'CEO of Basecamp Corp',
  },
  {
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tortor eu dolor pellentesque ultrices. Nullam vulputate ornare tortor ac venenatis. Fusce lorem tellus, tincidunt sed efficitur eu, tempor non purus.”`,
    name: 'Pedro Picapiedras',
    role: 'CTO of Basecamp Corp',
  },
]

const currSlide = ref(0)

const nextSlide = () => {
  currSlide.value = (currSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currSlide.value = (currSlide.value - 1 + slides.length) % slides.length
}
</script>
