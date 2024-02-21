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
      const response = await this.sendData({name: this.label});
      this.labels.push({...response, editing: false});
      this.label = '';
      await this.getLabels();
    },
    async getLabels() {
      const response = await $fetch('/api/getLabel');
      this.labels = response.body.map(label => {
        return {...label, editing: false}
      });
    },
    async updateData(data) {
      await $fetch('/api/updateLabel', {
        method: 'PUT',
        body: data
      });
    },
    async updateLabel(labelObj) {
      if (labelObj.editing) {
        await this.updateData({id: labelObj.id, name: labelObj.name})
        await this.getLabels();
      }
      labelObj.editing = !labelObj.editing;
    },
    async deleteLabel(labelId) {
      await $fetch('/api/deleteLabel', {
        method: 'DELETE',
        body: {id: labelId}
      });
      this.labels = this.labels.filter(label => label.id !== labelId);
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
        <UButton icon="i-heroicons-plus-20-solid" variant="ghost" @click="addLabel"/>
      </div>
      <div class="leading-9">
        <div v-for="(labelObj, index) in labels" :key="index" class="flex">
          <UInput v-model="labelObj.name" :disabled="!labelObj.editing" class="p-2 rounded w-52" type="text"
                  variant="none"/>
          <UButton :icon="labelObj.editing ? 'i-heroicons-check-16-solid' : 'i-heroicons-pencil-square-16-solid' "
                   variant="ghost" @click="updateLabel(labelObj)"/>
          <UButton icon="i-heroicons-trash" variant="ghost" @click="deleteLabel(labelObj.id)"/>
        </div>
      </div>
    </div>
  </UContainer>
</template>

