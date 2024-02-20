<script>

export default {
  data() {
    return {
      showInput: false,
      label: '',
      labels: []
    }
  },
  async mounted() {
    await this.getLabels();
  },
  methods: {
    async sendData(data) {
      await $fetch('/api/addLabel', {
        method: 'POST',
        body: data
      });
    },
    addLabel() {
      this.sendData({name: this.label});
      this.labels.push(this.label);
      this.label = '';
    },
    async getLabels() {
      const response = await $fetch('/api/getLabel');
      console.log('Response', response); //debug
      this.labels = response.body;
    }
  }
}
</script>


<template>
  <UContainer>
    <UButton class="mt-2" color="primary" @click="showInput =! showInput">Label</UButton>
    <div v-if="showInput" class="mt-2">
      <div class="flex items-center mb-2">
        <UInput v-model="label" class="p-2 rounded w-52" type="text"/>
        <UButton icon="i-heroicons-plus-small-20-solid" @click="addLabel"/>
      </div>
      <div class="leading-9">
        <div v-for="(labelObj, index) in labels" :key="index">
          {{ labelObj.name }}
        </div>
      </div>
    </div>
  </UContainer>

</template>

