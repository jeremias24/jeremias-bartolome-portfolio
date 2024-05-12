<template>
    <div>
        <UserList :users="users"/>  
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import UserList from '@/components/UsersList.vue'
  import User from '@/types/User'
  import UserDataService from "@/services/UserDataService";
  import ResponseData from "@/types/ResponseData";

  export default defineComponent({
    name: 'UserView',
    components : {
        UserList
    },
    setup() {
        const users = ref<User[]>([]);
        
        const retrieveUsers = () => {
            UserDataService.getAll()
            .then((response: ResponseData) => {
                users.value = response.data.users;
            })
            .catch((e: Error) => {
                console.log(e);
            });
        }

        onMounted(() => {
            retrieveUsers()
        })

        return { users };
    },
   
    props: {
     
    },

    methods: {
     
    }
    });
</script>
  

  