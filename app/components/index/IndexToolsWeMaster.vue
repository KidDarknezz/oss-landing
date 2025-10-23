<template>
  <div class="tools-gradient-background">
    <UContainer>
      <div class="p-4 text-center">
        <!-- Title -->
        <h2 class="font-manrope mb-12 text-3xl font-semibold lg:text-4xl">The tools we master</h2>

        <!-- Design logos -->
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="logo in designLogos" :key="logo" class="mx-4 mb-12 w-[50px]">
            <img :src="logo" class="h-auto w-full" />
          </div>
        </div>

        <!-- Dev logos -->
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="logo in devLogos" :key="logo" class="mx-4 mb-12 w-[50px]">
            <img :src="logo" class="h-auto w-full" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import AdobeLogo from '@/assets/images/design_logo_adobe.svg'
import PsLogo from '@/assets/images/design_logo_photoshop.svg'
import IlLogo from '@/assets/images/design_logo_illustrator.svg'
import PrLogo from '@/assets/images/design_logo_premiere.svg'
import AuLogo from '@/assets/images/design_logo_audition.svg'
import AeLogo from '@/assets/images/design_logo_after_effects.svg'
import BlenderLogo from '@/assets/images/design_logo_blender.svg'
import FigmaLogo from '@/assets/images/design_logo_figma.svg'

import HtmlLogo from '@/assets/images/dev_logo_html.svg'
import CssLogo from '@/assets/images/dev_logo_css.svg'
import JsLogo from '@/assets/images/dev_logo_javascript.svg'
import TsLogo from '@/assets/images/dev_logo_typescript.svg'
import VueLogo from '@/assets/images/dev_logo_vue.svg'
import AngularLogo from '@/assets/images/dev_logo_angular.svg'
import IonicLogo from '@/assets/images/dev_logo_ionic.svg'
import CapacitorLogo from '@/assets/images/dev_logo_capacitor.svg'
import FirebaseLogo from '@/assets/images/dev_logo_firebase.svg'
import PwaLogo from '@/assets/images/dev_logo_pwa.png'
import AppStoreLogo from '@/assets/images/dev_logo_appstore.svg'
import PlayStoreLogo from '@/assets/images/dev_logo_playstore.svg'

const designLogos = [AdobeLogo, PsLogo, IlLogo, PrLogo, AuLogo, AeLogo, BlenderLogo, FigmaLogo]

const devLogos = [
  HtmlLogo,
  CssLogo,
  JsLogo,
  TsLogo,
  VueLogo,
  AngularLogo,
  IonicLogo,
  CapacitorLogo,
  FirebaseLogo,
  PwaLogo,
  AppStoreLogo,
  PlayStoreLogo,
]
</script>

<style scoped>
.tools-section {
  padding: 75px 25px;
}

.tools-video-container {
  position: relative;
  height: 65vh;
  width: 100%;
  overflow: hidden;
}

.tools-video-background {
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 65vh;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
}

.tools-gradient-background {
  padding-top: 15rem;
  padding-bottom: 14rem;
  background: #70c48f;
  background: linear-gradient(
    180deg,
    rgba(112, 196, 143, 0.65) 0%,
    rgba(91, 195, 161, 0.65) 35%,
    rgba(39, 194, 208, 0.65) 70%,
    rgba(0, 194, 243, 0.65) 100%
  );
}
</style>
