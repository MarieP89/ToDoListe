<script setup>
const task = ref('');
const labels = ref([]);
const selectedLabel = ref('')

async function fetchLabels(){
  try {
    const response = await $fetch('/api/label/getLabel');
    labels.value = response.body.map( label => ({label: label.name, value:label.id}));
  }catch (error){
    console.log("Error fetching labels", error);
  }
}
onMounted(fetchLabels)

</script>
<template>
  <UContainer>
    <div class="flex space-x-4">
      <UInputMenu v-model="selectedLabel" :options="labels"></UInputMenu>
      <UInput v-model="task" class=""/>
      <UButton @click="addTask">Add Task</UButton>
    </div>
  </UContainer>
</template>