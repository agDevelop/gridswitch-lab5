<template>
  <div class="w-full flex flex-col items-center py-8">
    <div class="w-fit flex flex-col items-end">
      <button
        class="w-[88px] h-12 bg-stone-100 rounded-md shadow-inner mb-2"
        @click="gridView = !gridView"
      >
        <div class="h-8 px-2 flex flex-row gap-2 items-center justify-between">
          <div
            :class="[
              gridView
                ? 'text-stone-800 bg-transparent'
                : 'text-stone-100 bg-emerald-600 shadow',
              'w-8 h-8 rounded-md flex items-center justify-center transition-colors',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            :class="[
              gridView
                ? 'text-stone-100 bg-emerald-600 shadow'
                : 'text-stone-800 bg-transparent',
              'w-8 h-8 rounded-md flex items-center justify-center transition-colors',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-6 h-6 rounded-md"
            >
              <path
                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        :class="[
          'w-fit gap-3 p-3 bg-stone-100 rounded-md shadow-inner transition-all duration-1000',
          gridView ? 'grid grid-cols-2 col-span-2' : 'flex flex-col',
        ]"
      >
        <GridImage
          v-show="gridView"
          v-for="image in gallery"
          :image-url="image.url"
        />
        <ListImage
          v-show="!gridView"
          v-for="image in gallery"
          :image-url="image.url"
          :title="image.title"
          :desc="image.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const { $pwa } = useNuxtApp();

onMounted(() => {
  if ($pwa?.isPWAInstalled) console.log("Приложение установлено, спасибо!");
});

const gallery = [
  {
    id: 0,
    url: "img/bird.png",
    title: "AI generated bird",
    description: "AI generated bird",
  },
  {
    id: 1,
    url: "img/fish.png",
    title: "AI generated fish",
    description: "AI generated fish",
  },
  {
    id: 2,
    url: "img/horse.png",
    title: "AI generated horse",
    description: "AI generated horse",
  },
  {
    id: 3,
    url: "img/monkey.png",
    title: "AI generated monkey",
    description: "AI generated monkey",
  },
  {
    id: 4,
    url: "img/panda.png",
    title: "AI generated panda",
    description: "AI generated panda",
  },
  {
    id: 5,
    url: "img/spider.png",
    title: "AI generated spider",
    description: "AI generated spider",
  },
  {
    id: 6,
    url: "img/tiger.png",
    title: "AI generated tiger",
    description: "AI generated tiger",
  },
  {
    id: 7,
    url: "img/wolf.png",
    title: "AI generated wolf",
    description: "AI generated wolf",
  },
];

var gridView = ref(true);
</script>
