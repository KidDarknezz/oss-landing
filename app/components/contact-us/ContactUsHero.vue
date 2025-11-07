<template>
  <div class="bg-black text-white">
    <UContainer class="py-25">
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
          <div
            class="manrope-700 mb-4 bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text text-center text-2xl text-transparent"
          >
            Choose your vibe
          </div>
          <div class="mb-3 grid grid-cols-12 gap-4">
            <div
              class="col-span-6 flex h-full w-full cursor-pointer rounded-lg bg-linear-to-r from-[#70C48F] to-[#00C2F3] p-0.5 text-center sm:col-span-6 lg:col-span-4"
              v-for="service in services"
              :key="service"
              @click="selectService(service)"
            >
              <div
                class="w-full rounded-lg p-3"
                :class="isServiceSelected(service) ? '' : 'bg-black'"
              >
                {{ service }}
              </div>
            </div>
          </div>
          <div class="text-center text-red-500" v-if="showServiceErr && !formData.service">
            Please select a vibe
          </div>
          <div
            class="manrope-700 my-10 bg-[linear-gradient(90deg,#70C48F,#5BC3A1,#27C2D0,#00C2F3)] bg-clip-text text-center text-2xl text-transparent"
          >
            Add your info & let's make it happen.
          </div>
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
                :disabled="loading"
                :loading="loading"
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

const services = [
  'Graphic Design',
  'UI/UX Design',
  '2D Animation',
  '3D',
  'Web Development',
  'App Development',
  'Video Editing',
  'Video Production',
]

const schema = v.object({
  fullName: v.pipe(v.string(), v.minLength(2, 'Full name must be at least 2 characters')),
  company: v.pipe(v.string(), v.minLength(2, 'Company must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  phone: v.pipe(v.string(), v.minLength(1, 'Phone number is required')),
})

const formData = ref({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: [] as string[],
})
const showServiceErr = ref(false)
const loading = ref(false)

const toast = useToast()

const selectService = (service: string) => {
  if (isServiceSelected(service))
    formData.value.service = formData.value.service.filter(serv => serv !== service)
  else formData.value.service.push(service)
  showServiceErr.value = false
}

const isServiceSelected = (service: string) => formData.value.service.includes(service)

const cleanForm = () => {
  formData.value = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: [],
  }
}

const onSubmit = async () => {
  if (formData.value.service.length <= 0) {
    showServiceErr.value = true
    return
  }
  try {
    loading.value = true
    const sendEmailReq = await fetch(
      'https://us-central1-onespot-live.cloudfunctions.net/contactEmail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template: 'd-a2d3155c689746aea3956f9ff85fb087',
          email: 'amilland29@gmail.com',
          data: {
            fullName: formData.value.fullName,
            company: formData.value.company,
            email: formData.value.email,
            service: formData.value.service,
            phone: formData.value.phone,
          },
        }),
      }
    )
    const respData = await sendEmailReq.json()
    if (respData.response === 'ok') {
      toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
      cleanForm()
    } else throw new Error()
  } catch {
    toast.add({ title: 'Error', description: 'An error ocurred.', color: 'error' })
  } finally {
    loading.value = false
  }
}
</script>
