<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias saepe quidem. Assumenda, illum ipsum atque expedita dolorum molestias cupiditate voluptate explicabo rerum modi ab voluptatum nesciunt. Earum, dolore error.</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm';
  
export default defineComponent({
  name: 'JobsList',
  components : {},
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup(props) {
    
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })
    
    return { orderedJobs }
  },
  
  methods : {
    
  },
  
});
</script>
<style scoped>
.list-move {
  transition: all 1s;
}
</style>
