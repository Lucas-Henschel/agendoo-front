<script setup lang="ts">
import LandingPageTopbar from '@/components/landing/LandingPageTopbar.vue';
import LandingPageHeroSection from '@/components/landing/LandingPageHeroSection.vue';
import LandingPageSupport from '@/components/landing/LandingPageSupport.vue';
import LandingPageAbout from '@/components/landing/LandingPageAbout.vue';
import LandingPageContact from '@/components/landing/LandingPageContact.vue';
import LandingPageFooter from '@/components/landing/LandingPageFooter.vue';
import LandingPageOperation from '@/components/landing/LandingPageOperation.vue';
</script>

<template>
  <div class="bg-[#F8FAFC] dark:bg-[#09090B] w-full flex flex-col gap-16">
    <LandingPageTopbar />
    <LandingPageHeroSection />
    <LandingPageOperation />
    <LandingPageAbout />
    <LandingPageSupport />
    <LandingPageContact />
    <LandingPageFooter />
  </div>
</template>
