<template>
  <UContainer class="py-25">
    <div class="flex flex-wrap items-center justify-between rounded-[30px] bg-black px-12 py-25">
      <div class="w-full py-2 lg:w-7/12">
        <h2 class="font-manrope text-center text-2xl font-semibold text-white lg:text-4xl">
          Ready to work with us?
        </h2>
      </div>
      <div class="w-full py-2 lg:w-3/12">
        <UButton
          class="font-manrope w-full cursor-pointer rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 text-base font-bold text-white no-underline"
        >
          <div class="flex w-full flex-row items-center justify-center text-center">
            <div class="mr-3">Get Started</div>
            <UIcon name="i-lucide-arrow-right" />
          </div>
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
