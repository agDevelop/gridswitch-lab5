<template>
  <img :src="props.imageUrl" class="w-40 h-40 rounded-md shadow-md" />
</template>

<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: "img/bird.png",
  },
});
</script>
