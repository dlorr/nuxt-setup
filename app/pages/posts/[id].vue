<script setup lang="ts">
definePageMeta({
  // validate(route) {
  // Check if the id is made up of digits
  // return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  // },

  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean") {
      to.meta.pageTransition.name =
        +to.params.id! > +from.params.id! ? "slide-left" : "slide-right";
    }
  },
});

const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>

<template>
  <h1>#{{ $route.params.id }}</h1>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
