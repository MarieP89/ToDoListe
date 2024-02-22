<script setup>

const colorMode = useColorMode()


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

</template>