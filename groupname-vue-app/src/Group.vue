<script setup>
import {ref} from 'vue'
// const showAll  = (()=> { console.log(student.value);})
 
//v-model capture user input only input textarea select
// const studentId = ref(1)
// console.log(studentId.value);
// const jobSelected = ref('')
// const nickname = ref('')
// console.log(nickname.value);
 
// const section = ref(0)
// const groupname = ref('')
// const repository = ref('')
// const member = ref(0)
 
const student = ref({section : '' , groupname : '' , repository : '' ,member :[]})
const saveStundet = ((event) => {console.log(event.target) ,  console.log(event.target.id) , console.log(event.target);})
// const Coordinator = ({projectCo : true , studentId : '' , studentName : ''})
const addNewmember= (() => {
  student.value.member = []
})
// const formCheck = ref()
// const showForm = (() => {
//   return formCheck
// })
 
const numofmember = ref(0)
 
</script>
 
<template>
<div >
 
<span>Section : {{ student.section }}</span> &nbsp;
<select v-model="student.section">
 <option value="1">1</option>
 <option value="2">2</option>
</select>
 
<br>
 
Group name : {{ student.groupname }}<input v-model= "student.groupname" placeholder= "Your groupname"  class="border border-grey"/>
 
 
<p>Repo: {{ student.repository }}  <input v-model="student.repository" type="text" name="" id="" class="border" placeholder="Your repository"> </p>
 
Member : {{ student.member }} <input v-model="student.member" type="text" class="border" placeholder="How many members?">
 
<div id="formCheck" v-for="(member,index) in student.member" :key="index">
<input type="checkbox"> Project Coordinator
StudentId <input  type="text" class="border border-black">
StudentName <input   type="text" class="border border-black">
</div>
 
<div class="flex gap-2 ml-10 mt-4">
<button id="save-student" @click="saveStundet($event)" class="bg-green-300 w-20 h-7 rounded-3xl">OK</button>
<button class="bg-red-300 w-20 h-7 rounded-3xl">Cancel</button>
</div>
</div>
 
</template>
 
<style scoped>
 
</style>