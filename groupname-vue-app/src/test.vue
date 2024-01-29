<script setup>
const msg ="<span class='italic'>Hello, v-text</span>";
// const headingFont = 'text-4xl';
const getToday=(x)=> {
  return `test: ${msg.toUpperCase()}, ${new Date}`
}
const isShow = true;
const score = 80;
</script>
 
<template>
<div>
    <section>
      <h1>{{ getToday(msg) }}</h1>
      <!-- v-text sample -->
      <p v-text="msg.toUpperCase()"></p>
      <p v-bind:class="headingFont">Hello, {{ msg.toUpperCase() }}, Goodbye</p>
       <!-- v-html sample -->
      <p v-html="msg"></p>
       <!-- v-bind sample -->
      <button class="bg-green-500 px-3 py-2 text-white rounded-lg disabled:bg-slate-500" v-if="isShow" v-bind:disabled="true">Preview</button>

     <p v-if="score >= 80">A</p>
     <p v-else-if="score < 80">B+</p>

     <div>
      <p v-for="x in 10">{{ x }}</p>
     </div>
    </section>
</div>
</template>
 
<style scoped>

</style>