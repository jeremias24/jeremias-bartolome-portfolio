<template>
  <div >
    <h1>{{ name }} - {{ age }}</h1>
    <button @click="changeName('jerry')" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" >change name</button>
    <button @click="changeAge('33')" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button" >change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  components : {},
  setup() {
    const state = reactive({
      name: 'Link',
      age: 25 as string | number
    })

    state.name = 'Jeremias'

    return {
      ...toRefs(state)
    }

    // const name = ref('Link')
    // const age = ref<number | string>('23')

    // return {name, age}
  },
  // data() {
  //   return {
  //     name: 'Link',
  //     age: 25 as number | string
  //   }
  // },
  methods : {
    changeName(name: string)  {
      this.name = name
      return name
    },
    changeAge(age: number | string)  {
      this.age = age
      return age
    }
  },
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
