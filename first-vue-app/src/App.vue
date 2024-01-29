<script setup>
  //composition api
  import { ref } from 'vue' //สร้างตัวแปรผูกกับ DOM
  //ref function will creates a reactive varriable when it changes, DOM change automatically
  const count = ref(0)
  const decreaseCount = () => {
    count.value === 0 ? count.value = 0 : --count.value
  }
  const isDark = ref(false)
</script>
 
<template>
  <div class="min-h-screen" :class="isDark ? 'bg-black' : 'bg-white'" >
    <div class="flex justify-end p-2">
    <input type="checkbox" class="toggle" v-model="isDark" @click="isDark = !isDark" />
    </div>
  
  
  <div>
    <h1 class="text-green-500 text-2xl font-semibold tracking-widest">
      My First Counter Application
    </h1>
  </div>
  <div class="flex p-4 space-x-2">
    <button v-on:click="decreaseCount" class="px-3 py-1 bg-red-600 rounded-lg text-white">-</button>
    <p class="text-xl font-semibold">Counter: {{ count }}</p>
    <button v-on:click="++count" class="px-3 py-1 text-white bg-green-500 rounded-lg">+</button>
  </div>

</div>
</template>

<style scoped>
  
</style>