<template>
    <div>
    
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';  
  export default defineComponent({
    name: 'Login',
    components: {
     
    },
    props : {
        message : { type : String, required : true },
        object : { type : Object as PropType<{name: string, username: string}>,
        required : true
        }
    },
    setup(props) {},

    

  });
  </script>
  