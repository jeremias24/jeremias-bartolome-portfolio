<template>
    <div v-if="currentUser?.id">
      
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import User from '@/types/User'
  import UserDataService from "@/services/UserDataService";
  import ResponseData from "@/types/ResponseData";

  export default defineComponent({
    name: 'UserEdit',
    components : {
        
    },
    
    setup() {
        const currentUser = ref<User | null>(null);

        const route = useRoute();

        const getUser = (id: any) => {
            UserDataService.get(id)
            .then((response: ResponseData) => {
                currentUser.value = response.data.user;
            })
            .catch((e: Error) => {
                console.log(e);
            });
        }

        onMounted(() => {
            const userId = route.params.id;
            getUser(userId)
        })

        return { currentUser };
    },
   
    props: {
        
    },

    methods: {
        
    },
    
    });
</script>
  

  