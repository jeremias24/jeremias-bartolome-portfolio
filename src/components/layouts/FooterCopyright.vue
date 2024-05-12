<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/jeremias24/jeremias-bartolome-portfolio"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ projectName }}
      </a>
      . Developed by
      <a
        href="#"
        target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const copyrightDate = new Date().getFullYear();
    const projectName =
      "Vue 3 with TypeScript and Composition API and Tailwind CSS Portfolio";
    const author = "Jeremias Bartolome ";
    return { copyrightDate, projectName, author };
  },
});
</script>


