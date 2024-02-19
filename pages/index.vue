<script lang="ts" setup>
import ButttonInput from "~/components/ButttonInput.vue";

const colorMode = useColorMode()
const task = ref('')

const links = computed(() => [{
  label: 'Home',
  icon: 'i-heroicons-academic-cap'
}, {

  icon: colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon',
  click: () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  }
}])

</script>


<template>
  <UHorizontalNavigation :links="links"/>
  <div>
    <h1 class="text-3xl font-bold text-center my-10">
      ToDo List
    </h1>
  </div>
  <UContainer>
    <UInput v-model="task" class=""/>
    <UButton @click="addTask">Add Task</UButton>
  </UContainer>
  <ButttonInput/>
</template>