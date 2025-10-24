<template>
  <div class="hero bg-black text-white">
    <UContainer>
      <div class="grid grid-cols-12 gap-12"></div>
      <div class="grid grid-cols-12 gap-4">
        <!-- First column -->
        <div class="col-span-12 p-4 sm:col-span-6 lg:col-span-5">
          <div
            class="aspect-square w-full rounded-full bg-linear-to-r from-[#70C48F] to-[#00C2F3] p-2"
          >
            <div class="flex h-full w-full flex-row items-center rounded-full bg-black">
              <div class="grid grid-cols-12 items-center gap-4 px-10">
                <div class="col-span-5">
                  <img :src="NotReact" />
                </div>
                <div class="manrope-700 col-span-7 text-2xl">
                  <span
                    class="bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text text-transparent"
                  >
                    Still curious?<br />Hit us up—we're always down to chat.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second column -->
        <div class="col-span-12 p-4 sm:col-span-6 lg:col-span-7">
          <UForm :schema="schema" :state="formData" class="space-y-4" @submit="onSubmit">
            <UFormField name="fullName">
              <template #label>
                <span
                  class="bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text font-semibold text-transparent"
                >
                  First and Last Name
                </span>
              </template>
              <input
                v-model="formData.fullName"
                class="w-full rounded-lg bg-white/10 px-4 py-4 placeholder-white/20 hover:bg-white/15 focus:bg-white/15 focus:outline-none"
                placeholder="John Doe"
              />
            </UFormField>

            <UFormField name="company">
              <template #label>
                <span
                  class="bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text font-semibold text-transparent"
                >
                  Company Name
                </span>
              </template>
              <input
                v-model="formData.company"
                class="w-full rounded-lg bg-white/10 px-4 py-4 placeholder-white/20 hover:bg-white/15 focus:bg-white/15 focus:outline-none"
                placeholder="Monsters Inc."
              />
            </UFormField>

            <UFormField name="email">
              <template #label>
                <span
                  class="bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text font-semibold text-transparent"
                >
                  Email
                </span>
              </template>
              <input
                v-model="formData.email"
                class="w-full rounded-lg bg-white/10 px-4 py-4 placeholder-white/20 hover:bg-white/15 focus:bg-white/15 focus:outline-none"
                placeholder="john.doe@monstersinc.com"
                type="email"
              />
            </UFormField>

            <UFormField name="phone">
              <template #label>
                <span
                  class="bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text font-semibold text-transparent"
                >
                  Phone Number
                </span>
              </template>
              <input
                v-model="formData.phone"
                class="w-full rounded-lg bg-white/10 px-4 py-4 placeholder-white/20 hover:bg-white/15 focus:bg-white/15 focus:outline-none"
                placeholder="62144490"
              />
            </UFormField>

            <div class="mt-6 flex flex-row justify-center">
              <UButton
                class="font-manrope cursor-pointer rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 px-15 text-base font-bold text-white no-underline"
                type="submit"
              >
                <div class="flex w-full flex-row items-center justify-center text-center">
                  <div class="mr-3">Submit form</div>
                  <UIcon name="i-lucide-arrow-right" />
                </div>
              </UButton>
            </div>
          </UForm>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import NotReact from '@/assets/images/not-react.gif'
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  fullName: v.pipe(v.string(), v.minLength(2, 'Full name must be at least 2 characters')),
  company: v.pipe(v.string(), v.minLength(2, 'Company must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  phone: v.pipe(v.string(), v.minLength(1, 'Phone number is required')),
})

type Schema = v.InferOutput<typeof schema>

const formData = ref({
  fullName: '',
  company: '',
  email: '',
  phone: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}

const fullName = ref('')
const company = ref('')
const email = ref('')
const phoneNo = ref('')
</script>

<style scoped>
.hero {
  padding: 15rem 0;
}
</style>
