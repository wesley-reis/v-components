<template>
  <div class="text-gray-800 dark:text-gray-100">

    <h1>HOME</h1>
    <div class="mt-20 w-2/12 mx-auto">
      <HoursForWeek 
      :hoursDaysWeek="hours"
      />
    </div>
  </div>
</template>

<script>
import HoursForWeek from "../components/HoursForWeek.vue";

export default {
    name: "Home",
    components: { HoursForWeek },
    data(){
      return{
        hours:[]
      }
    },
    created(){
      const payload = [
        {day:0, hours:[
          {start:"08:00", end:"11:00"},
          ]
        },
        {
          day:1, hours:[
            {start:"08:00", end:"12:00"},
            {start:"13:00", end:"17:00"},
          ]
        },
        {
          day:2, hours:[
            {start:"08:00", end:"12:00"},
            {start:"13:00", end:"17:00"},
          ]
        },
        {
          day:3, hours:[
            {start:"08:00", end:"12:00"},
            {start:"13:00", end:"17:00"},
            {start:"18:00", end:"23:59"},
          ]
        },
        {
          day:4, hours:[
            {start:"08:00", end:"12:00"},
            {start:"13:00", end:"17:00"},
          ]
        },
        {
          day:5, hours:[
            {start:"08:00", end:"12:00"},
            {start:"13:00", end:"17:00"},
          ]
        },
        {
          day:6, hours:[
            {start:"", end:""},
          ]
        },
        
      ]
      this.hours = payload
    },
    methods:{
      
    }
}
</script>
