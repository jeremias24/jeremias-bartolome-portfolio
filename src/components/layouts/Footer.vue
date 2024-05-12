<template>
  <div class="container mx-auto">
    <div
      class="pt-10 sm:pt-30 pb-4 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-6 sm:mb-10">
        <p
          class="font-general-semibold text-3xl sm:text-3xl font-semibold text-primary-dark dark:text-primary-light mb-5"
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
          >
            <i :data-feather="social.icon" class="w-4 sm:w-8 h-4 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import FooterCopyright from "@/components/layouts/FooterCopyright.vue";
import feather from "feather-icons";
import Social from "@/types/Social";
import { socialLinks } from "@/data/socialLinks";

export default defineComponent({
  components: { FooterCopyright },
  setup() {
    const socials = ref<Array<Social>>(socialLinks);
    onMounted(() => feather.replace());
    onUpdated(() => feather.replace());

    return { socials };
  },
});
</script>

