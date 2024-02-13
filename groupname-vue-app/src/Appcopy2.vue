<!-- setinterval
<script setup>
import { ref } from 'vue'
let count = ref(0)
setInterval(() => {
  count.value = count.value + 1
  console.log(count)
  console.log(count.value)
}, 1000)
</script>
<template>
  <div>Count: {{ count }}</div>
</template>
<style scoped></style> -->

<!-- ref -->
<!-- <script setup>
import { ref } from 'vue'
//reactive on object variable
const student = ref({ id: 1, name: 'Somsak' })
//correct
console.log(student.value.id)
console.log(student.value.name)
//incorrect
console.log(student.id)
console.log(student.name)
//reactive on array variable
const ids = ref([111, 123, 333, 555])
//correct
console.log(ids.value.length)
console.log(ids.value[0])
console.log(ids.value[ids.value.length - 1])
//incorrect
console.log(ids.length)
</script>
<template>
  <div></div>
</template>
<style scoped></style> -->

<script setup>
import { reactive, toRef, toRefs } from "vue";
const student = reactive({ id: 111, name: "Somsak" });
// const newId = toRef(student, "id");
// console.log(newId.value);
// newId.value = 651000101;
const { id, name } = toRefs(student);
console.log(id.value);
console.log(id.name);

const ids = reactive([111, 123, 333, 555]);
console.log(ids);
console.log(ids[0]);
console.log(ids.length);
</script>

<template>
  <div></div>
</template>

<style scoped></style>
