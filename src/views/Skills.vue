<template>
  <Content title="Skills">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/vue.png')"
            alt="Vue 3"
            width="158"
            height="48"
          />

          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/laravel.png')"
            alt="Laravel"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/codeigniter.png')"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/javascript.png')"
            alt="JavaScript"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/typescript.png')"
            alt="TypeScript"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/jquery.svg')"
            alt="jQuery"
            width="158"
            height="48"
          />

          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/tailwindcss.svg')"
            alt="Tailwind CSS"
            width="158"
            height="48"
          />

          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/mysql.svg')"
            alt="MySQL"
            width="158"
            height="48"
          />

          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAssetPath('media/logos/sql.svg')"
            alt="SQL"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  </Content>
</template>

    <!-- 
      
      <div class="p-10 flex flex-col space-y-3">
      <div class="relative w-full sm:w-1/2 bg-gray-200 rounded">
        <div
          style="width: 60%"
          class="absolute top-0 h-4 rounded shim-green"
        >
        </div>
      </div>

      <div class="relative w-full sm:w-1/2 bg-gray-200 rounded">
        <div
          style="width: 80%"
          class="absolute top-0 h-4 rounded shim-blue"
        ></div>
      </div>

      <div class="relative w-full sm:w-1/2 bg-gray-200 rounded">
        <div
          style="width: 100%"
          class="absolute top-0 h-4 rounded shim-red"
        ></div>
      </div>
    </div> -->



<script lang="ts">
import { defineComponent } from "vue";
import Content from "@/components/Content.vue";
import { getAssetPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "skills",
  components: {
    Content,
  },

  setup() {
    return { getAssetPath };
  },
});
</script>

<style scoped>
.shim-green {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 255, 0, 0.7);
}
.shim-green::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 2s ease-out infinite;
  content: "";
}

.shim-blue {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 155, 255, 0.7);
}
.shim-blue::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 2.5s ease-out infinite;
  content: "";
}

.shim-red {
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.7);
}
.shim-red::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 3s ease-out infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(0%);
    opacity: 0;
  }
}
</style>