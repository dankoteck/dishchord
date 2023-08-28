<script setup lang="ts">
const { data } = await useFetch("/api/servers");
console.log(data.value)
</script>

<template></template>
