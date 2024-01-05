<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp();

onMounted(() => {
  if ($pwa.offlineReady) console.log("App ready to work offline");
});
</script>
