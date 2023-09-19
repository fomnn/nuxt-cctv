<template>
  <div
    class=" w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col ">
      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <div class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </div>
        <h2>Rekaman Langsung</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl flex flex-col px-5 pt-6 pb-20 gap-3 ">
        <div 
          class="flex items-center justify-between bg-white px-5 py-3 rounded-full"
          v-for="i in 9">
          <div class="flex items-center gap-2 text-lg">
            <div
              class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="ic:twotone-location-on" />
            </div>
            <p>Basement</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.mask-circle-out {
  @apply bg-gray-400 absolute inset-0 opacity-70 -z-10;
  /* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
  mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
}
</style>