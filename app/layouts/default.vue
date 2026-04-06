<script setup lang="ts">
const route = useRoute();
const id = computed(() => Number(route.params.id || 1));
const prev = computed(() => "/posts/" + (id.value - 1));
const next = computed(() => "/posts/" + (id.value + 1));
</script>

<template>
  <div>
    <pre>default layout</pre>
    <AppHeader />
    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
