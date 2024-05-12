<template>
    <div class="app">
      <button @click="handleClick('title')" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2" type="button" >order by title</button>
      <button @click="handleClick('salary')" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-2" type="button" >order by salary</button>
      <button @click="handleClick('location')" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-2" type="button" >order by location</button>
      <JobList :jobs="jobs" :order="order"/>  



      <!-- <h1>{{ name }} - {{ age }}</h1>
      <button @click="changeName('jeremias')" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" >change name</button>
      <button @click="changeAge('33')" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button" >change age</button> -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import Job from '@/types/Job'
  import OrderTerm from '@/types/OrderTerm'
  import JobList from '@/components/JobsList.vue'

  
  export default defineComponent({
    name: 'HelloWorld',
    components : {
      JobList
    },
    setup() {
      // const state = reactive({
      //   name: 'Link',
      //   age: 25 as string | number
      // })
  
      // state.name = 'Jeremias'
  
      // return {
      //   ...toRefs(state)
      // }
  
      // const name = ref('jerry')
      // const age = ref<number | string>('23')
  
      // return {name, age}
      const jobs = ref<Job[]>([
        { title: 'farmer worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
      ])

      const order = ref<OrderTerm>('title')

      const handleClick = (term: OrderTerm) => {
        order.value = term
      }

      return { jobs, handleClick, order }
    },
    // data() {
    //   return {
    //     name: 'Link',
    //     age: 25 as number | string
    //   }
    // },
    // methods : {
    //   changeName(name: string)  {
    //     this.name = name
    //     return name
    //   },
    //   changeAge(age: number | string)  {
    //     this.age = age
    //     return age
    //   }
    // },
    props: {
      msg: String,
    },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  