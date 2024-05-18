<template>
  <Content title="About">
    <section
      class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16"
    >
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2
              class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
            >
              Hey 👋 I am <br class="block sm:hidden" />Jeremias Bartolome
            </h2>
            <p
              class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8"
            >
              A passionate web developer with over 5 years of experience in
              creating dynamic and responsive websites. I specialize in
              full-stack development, utilizing technologies such as Vue 3,
              Laravel, TypeScript, JavaScript, and modern frameworks like React.
              On the server side, I'm proficient and have a solid understanding
              of databases like SQL and MySQL. I have a keen eye for design and
              a strong focus on user experience, ensuring that my websites are
              not only functional but also aesthetically pleasing. My goal is to
              build intuitive, user-friendly web applications that provide a
              seamless experience across all devices. I thrive in collaborative
              environments and enjoy working with cross-functional teams to
              deliver high-quality projects on time. When I'm not coding.
            </p>

            <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span class="relative inline-block">
                <span
                  class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"
                ></span>
                <span class="relative">
                  Feel free to check out my portfolio and connect with me on
                  LinkedIn/GitHub/other social media.
                </span>
              </span>
            </p>
          </div>

          <div class="relative">
            <!-- <img
              class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            /> -->

            <img
              class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              :src="getAssetPath('media/images/jeremias-bartolome.jpg')"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "@/components/Content.vue";
import { getAssetPath } from "@/core/helpers/assets";
export default defineComponent({
  name: "about",
  components: {
    Content,
  },
  setup() {
    return { getAssetPath };
  },
});
</script>
