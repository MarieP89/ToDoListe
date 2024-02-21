<script lang="ts" setup>
import Label from "~/components/Label.vue";

const colorMode = useColorMode()
const task = ref('')

const links = computed(() => [{
  label: 'Home',
  icon: 'i-heroicons-home'
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
<!--    <icon name="i-ph-airplane-landing-fill" class="text-3xl"/>-->
  </div>
  <UContainer>
    <UInput v-model="task" class=""/>
    <UButton @click="addTask">Add Task</UButton>
  </UContainer>
  <Label/>
</template>