<template>
  <div class="studio-gray-gradient">
    <UContainer class="pb-1 text-white">
      <div class="mx-auto max-w-7xl px-4">
        <!-- Main row with padding -->
        <div class="flex flex-wrap py-20">
          <!-- Logo and social links -->
          <div class="mb-8 w-full sm:w-5/12 lg:w-6/12">
            <img :src="OSStudioLogo" class="mb-6" />

            <div class="font-manrope mb-10 text-base font-normal">
              Let's Build Something <br />
              Extraordinary<br />
              Together
            </div>

            <div class="mb-6 flex gap-2">
              <UButton
                v-for="social in socials"
                :key="social.icon"
                :icon="social.icon"
                size="sm"
                rounded
                class="cursor-pointer p-2"
                variant="link"
                color="neutral"
              />
            </div>
          </div>

          <!-- Company links -->
          <div class="mb-6 w-1/2 sm:w-1/4 lg:w-1/6">
            <div class="font-manrope mb-4 text-base font-bold">Company</div>
            <div
              v-for="link in navLinks"
              :key="link.label"
              @click="openPath(link.path)"
              class="font-manrope mb-2 cursor-pointer text-sm font-normal hover:underline"
            >
              {{ link.label }}
            </div>
          </div>

          <!-- Contact info -->
          <div class="mb-6 w-1/2 sm:w-1/4 lg:w-1/6">
            <div class="font-manrope mb-4 text-base font-bold">Contact us</div>
            <div
              v-for="contact in contactList"
              :key="contact.label"
              class="font-manrope mb-2 flex items-center text-sm font-normal"
            >
              <UIcon :name="contact.icon" class="mr-2" />
              {{ contact.label }}
            </div>
          </div>
        </div>

        <!-- Separator -->
        <div class="border-t border-gray-700"></div>

        <!-- Footer bottom row -->
        <div class="font-manrope flex flex-wrap justify-between py-4 text-sm font-normal">
          <div class="mb-2 lg:mb-0">Copyright © 2020 Trading Company One Spot inc</div>
          <div class="mb-2 lg:mb-0">
            All Rights Reserved |
            <span class="cursor-pointer text-teal-400 hover:underline">Terms and Conditions</span>
            |
            <span class="cursor-pointer text-teal-400 hover:underline">Privacy Policy</span>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import OSStudioLogo from '@/assets/images/os-studio-logo-white.svg'

const router = useRouter()

const { navLinks } = NavDrawerComp()

const openPath = (path: string) => router.push(path)

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

const contactList = [
  {
    icon: 'i-lucide-mail',
    label: 'info@onespotlive.com',
  },
  {
    icon: 'i-lucide-phone',
    label: '(507) 6359-2180',
  },
  {
    icon: 'i-lucide-map-pin',
    label: 'Ciudad de Panamá',
  },
]
</script>
