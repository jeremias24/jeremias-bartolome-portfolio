<template>
  <Content title="Projects">
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div
        v-for="callout in callouts"
        :key="callout.name"
        class="group relative"
      >
        <div
          class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
        >
          <img
            :src="callout.imageSrc"
            :alt="callout.imageAlt"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a :href="callout.href">
            <span class="absolute inset-0" />
            {{ callout.name }}
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">
          {{ callout.description }}
        </p>
      </div>
    </div>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "@/components/Content.vue";
export default defineComponent({
  name: "projects",
  components: {
    Content,
  },

  setup() {
    const callouts = [
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
    ];

    return {
      callouts,
    };
  },
});
</script>
