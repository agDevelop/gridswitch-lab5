<template>
  <div
    class="w-[332px] h-16 bg-white rounded-md shadow flex flex-row items-center justify-start"
  >
    <img :src="props.imageUrl" class="w-14 h-14 rounded-md ml-1" />
    <div class="flex flex-col items-center justify-start ml-3">
      <p class="w-full text-start text-lg text-stone-800">
        <b>{{ props.title }}</b>
      </p>
      <p class="w-full text-start text-sm text-stone-400">{{ props.desc }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: "img/bird.png",
  },
  title: {
    type: String,
    default: "Just image",
  },
  desc: {
    type: String,
    default: "some long description",
  },
});
</script>
