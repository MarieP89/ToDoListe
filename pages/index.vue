<script lang="ts" setup>
import Label from "~/components/Label.vue";
import AppHeader from "~/components/AppHeader.vue";
import {Task} from "#components";

</script>


<template>
  <AppHeader/>
  <div>
    <h1 class="text-3xl font-bold text-center my-10">
      ToDo List
    </h1>
<!--    <icon name="i-ph-airplane-landing-fill" class="text-3xl"/>-->
  </div>
  <Task/>
  <Label/>
</template>