<template>
  <ul v-for="data in hoursDaysWeek" :key="data.day" class="min-w-[550px] mx-auto">
       <form class="flex justify-center items-center gap-2 relative">
            <label for="inputHidden" class="min-w-[100px] absolute top-4 -left-4">{{this.daysWeek[data.day]}}</label>
            <input type="hidden" v-model="data.day" >
            <li>
                <div v-for="(hour, index) in data.hours" :key="index" class="flex justify-center items-center gap-1 mb-2">
                    <div class="flex flex-col items-start py-1 px-6 rounded-md bg-gray-100 border border-gray-200 hover:border-sky-300 dark:bg-gray-500 dark:border-gray-700 dark:hover:border-blue-300">
                        <label class="text-xs" for="start">Abertura</label>
                        <input @keyup="formData({day:data.day, hour:hour})" v-model="hour.start" id="start" class="rounded-md bg-transparent border-0 outline-none"  type="time">
                    </div>
                    <span>-</span>
                    <div class="flex flex-col items-start py-1 px-6 rounded-md bg-gray-100 border border-gray-200 hover:border-sky-300 dark:bg-gray-500 dark:border-gray-700 dark:hover:border-blue-300">
                        <label class="text-xs" for="end">Fechamento</label>
                        <input @keyup="formData({day:data.day, hour:hour})" v-model="hour.end" id="end" class="rounded-md bg-transparent border-0 outline-none" type="time">
                    </div>
     
                    <div class="flex gap-2 w-10">
                        <button @click.stop.prevent="hourCreate" v-if="index === (data.hours.length - 1)" type="submit" class="px-2 bg-blue-100 rounded-sm text-lg font-semibold text-blue-400">+</button>
                        <button  v-if="hour.start.length != 0" type="submit" class="px-2 bg-red-100 rounded-sm text-lg font-semibold text-red-400">x</button>
                    </div>
                </div>
            </li>
       </form>
        <hr class="py-1 border-opacity-75 relative w-5/6 border-gray-300 dark:border-gray-500">
    </ul>
</template>

<script>

export default {
    name:"HoursForWeek",
    props:{
        hoursDaysWeek:{
            type:Array,
            default:()=>{},
        }
    },
    data(){
        return{
            daysWeek:{0:"Domingo", 1:"Segunda", 2:"Terça", 3:"Quarta", 4:"Quinta", 5:"Sexta", 6:"Sábado"},
            form:{},
        }
    },
    created(){
        console.log(this.hoursDaysWeek)
    },
    methods:{
        hourCreate(evt){
            console.log(evt)
        },
        formData(evt){
            console.log(evt)
        }

    }
}
</script>

<style>

</style>