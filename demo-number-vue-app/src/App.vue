<script setup>
const numStyle =
  "size-40 bg-purple-500 text-center text-xl font-bold text-white rounded-sm ";
const hiddenStyle = "size-40 bg-pink-400 rounded-sm ";
const isClicked = () => {
  return "class='`${hiddenStyle}`'";
};
</script>

<template>
  <div class="px-10 py-10">
    <div class="bg-pink-300 size-6/12">
      <!-- <div class="grid grid-cols-4 gap-4 justify-items-center"> -->
      <div class="py-5 flex items-center justify-center">
        <!-- <button v-on:click="isClicked" id="number">01</button>
        <button :class="numStyle" id="number" @click="() => {document.getElementById('number').classList.toggle('hiddenStyle');}">01</button> -->
        <div class="bg-slate-600"><button :class="numStyle" id="number">01</button></div>
        <div class="bg-slate-600"><button :class="numStyle" id="number">02</button></div>
        <div class="bg-slate-600"><button :class="numStyle" id="number">03</button></div>
        <div class="bg-slate-600"><button :class="numStyle" id="number">04</button></div>
      </div>
      <div class="py-5 flex items-center justify-center">
        <button :class="numStyle" id="number">05</button>
        <button :class="numStyle" id="number">06</button>
        <button :class="numStyle" id="number">07</button>
        <button :class="numStyle" id="number">08</button>
      </div>
      <div class="py-5 flex items-center justify-center">
        <button :class="numStyle" id="number">09</button>
        <button :class="numStyle" id="number">10</button>
        <button :class="numStyle" id="number">11</button>
        <button :class="numStyle" id="number">12</button>
      </div>
      <div class="py-5 flex items-center justify-center">
        <button :class="numStyle" id="number">13</button>
        <button :class="numStyle" id="number">14</button>
        <button :class="numStyle" id="number">15</button>
        <div :class="hiddenStyle" id="empty"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
