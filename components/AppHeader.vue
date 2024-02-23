<script setup>

const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
};

const links = computed(() => [{
  label: 'Home',
  icon: 'i-heroicons-home'
}, {
  icon: colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon',
  click: () => toggleColorMode()
}])

</script>

<template>
  <UHorizontalNavigation :links="links"/>
</template>