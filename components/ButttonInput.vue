<script>

export default{
  data(){
    return{
      showInput: false,
    }
  },
}
</script>


<template>
    <UButton color="primary" @click="showInput =! showInput">Add Label</UButton>
    <UInput v-if="showInput" class="mt-2 p-2 border rounded w-96"  type="text">
      <UButton icon="i-heroicons-plus-small-20-solid"/>
    </UInput>
</template>

