<script setup>
import SearchIcon from './components/icons/SearchIcon.vue'
import groups from '../data/groups.json'
// const bgGrey = "bg-slate-300";
const bgGrey=(x)=> {
  if(x % 2 === 0){
    return "bg-slate-300"
  }
  return ""
}
</script>
 
<template>
  <div class="w-full">
    <header>
      <section class="flex items-center p-2 bg-gradient-to-r from-purple-500 to-pink-500">
        <img src="./assets/vue-icon.png" class="h-14" />
        <div>
          <h1 class="text-white text-4xl">Creative Projects</h1>
          <h2 class="italic text-indigo-200 text-xl">Play and Learn</h2>
        </div>
      </section>
    </header>
    <main class="p-5">
      <section class="flex justify-end pt-2">
        <div class="w-1/4 flex items-center gap-3 border border-gray-300 p-1 rounded-lg">
            <SearchIcon/>
            <input 
            class="outline-none" type="text" placeholder="type your keyword...">
        </div>
     </section>
     <section>
      <div class="grid grid-cols-12 gap-2 font-semibold text-xl pb-3">
        <h3>Section</h3>
        <h3 class="col-span-2">Group Name</h3>
        <h3 class="col-span-5">GitHub Repository</h3>
        <h3 class="col-span-4">Members</h3>
      </div>
      <div v-for="group in groups" :key="group.ID" class="grid grid-cols-12 gap-2" :class="group.ID%2===0 ? 'bg-slate-300' : ''">
        <p>{{ group.section }}</p> 
        <p class="col-span-2">{{ group.groupName }}</p>
        <p class="col-span-5">{{ group.repo }}</p>
        <ul class="col-span-4 list-disc list-inside">
          <li v-for="{studentId,studentName} in group.members" :key="studentId">{{`${studentId}  ${studentName}` }}</li>
        </ul>
      </div>
     </section>
  
    </main>
  </div>
</template>
 
<style scoped>

</style>