<script>

export default {
  data() {
    return {
      showInput: false,
      label: '',
      labels: []
    }
  },
  methods: {
    async sendData(data) {
      console.log('Sending data:', data); // debug
      await $fetch('/api/addLabel', {
        method: 'POST',
        body: data
      });
    },
    addLabel() {
      this.sendData({name: this.label});
      this.label = '';
    }
  }
}
</script>


<template>
  <UButton class="ml-2 mt-2" color="primary" @click="showInput =! showInput">Label</UButton>
  <div v-if="showInput" class="flex items-center mt-2">
    <UInput v-model="label" class="p-2 rounded w-52" type="text"/>
    <UButton icon="i-heroicons-plus-small-20-solid" @click="addLabel"/>
  </div>
  <div>
    <div v-for="(existingLabel, index in labels" :key="index">
      {{ existingLabel }}
    </div>
  </div>
</template>

