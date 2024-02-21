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
    async addLabel() {
      await this.sendData({name: this.label});
      this.labels.push(this.label);
      this.label = '';
      await this.getLabels();
    },
    async getLabels() {
      const response = await $fetch('/api/getLabel');
      console.log('Response', response); //debug
      this.labels = response.body;
    },
    // async updateLabel()
    async updateData(data) {
      await $fetch('/api/updateLabel', {
        method: 'PUT',
        body: data
      });
    },
    toogleEditMode(labelObj) {
      labelObj.editing = !labelObj.editing;
    },

    async updateLabel(labelObj) {
      await this.updateData({id: labelObj.id, name: labelObj.name})
      labelObj.editing = false;
      await this.getLabels();
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
        <UButton icon="i-heroicons-plus-20-solid" @click="addLabel" variant="ghost"/>
      </div>
      <div class="leading-9">
        <div v-for="(labelObj, index) in labels" :key="index" class="flex">
          <UInput v-model="labelObj.name" :disabled="!labelObj.editing" class="p-2 rounded w-52" type="text"
                 variant="none" />
          <UButton icon="i-heroicons-pencil-square-16-solid" @click="toogleEditMode(labelObj)" variant="ghost"/>
          <UButton v-if="labelObj.editing" icon="i-heroicons-paper-airplane" @click="updateLabel(labelObj)" variant="ghost"/>
        </div>
      </div>
    </div>
  </UContainer>

</template>

