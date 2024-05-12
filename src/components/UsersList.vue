<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th class="border border-slate-300"> Firstname </th>
                <th class="border border-slate-300"> Lastname </th>
                <th class="border border-slate-300"> Position </th>
                <th class="border border-slate-300"> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td class="border border-slate-300"> {{ user.firstname }} </td>
                <td class="border border-slate-300"> {{ user.lastname }} </td>
                <td class="border border-slate-300"> {{ user.position }} </td>
                <td class="border border-slate-300"> 
                  <router-link :to="{name : 'user-edit', params: {id: user.id}}" type="button"
                    class="btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2">
                    Edit
                  </router-link>
                  <!-- <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-2" type="button">delete</button> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import User from '@/types/User'

export default defineComponent({
  name: 'UsersList',
  components : {},
  props: {
    users: {
      required: true,
      type: Array as PropType<User[]>
    },
  },
  setup(props) {
    
    const users = computed(() => {
      return [...props.users]
    })
    
    return { users }
  },
  
  methods : {
    editUser() {

    }
  },
  
});
</script>
<style scoped>
.list-move {
  transition: all 1s;
}
</style>
