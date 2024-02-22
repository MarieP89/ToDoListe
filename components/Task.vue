<script setup>
const task = ref('')

</script>
<template>
  <UContainer>
    <UInput v-model="task" class=""/>
    <UButton @click="addTask">Add Task</UButton>
  </UContainer>
</template>