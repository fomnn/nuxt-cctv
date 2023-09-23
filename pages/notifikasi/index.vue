<template>
  <div class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col justify-end pt-10">

      <!-- <div class="mask-circle-out"></div> -->

      <div class="bg-white fixed bottom-0 w-full flex justify-between px-20 py-3 rounded-tr-xl">
        <div class="flex flex-col items-center gap-1">
          <Icon name="ic:round-home" class="text-3xl" />
          <p>Utama</p>
        </div>
        <div class="flex flex-col items-center gap-1">
          <Icon name="material-symbols:notifications" class="text-3xl" />
          <p>Notifikasi</p>
        </div>
        <div class="flex flex-col items-center gap-1">
          <Icon name="ri:settings-4-fill" class="text-3xl" />
          <p>Pengaturan</p>
        </div>
      </div>

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center gap-8">
        <div class="">
          <Icon name="material-symbols:notifications" class="" />
        </div>
        <div class="flex flex-col gap-3 w-full">
          <div 
            class="flex items-center justify-between bg-white px-5 py-1 rounded-full w-full" v-for="i in 3">
            <div class="flex items-center gap-3 text-lg">
              <div
                class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                <Icon name="ic:twotone-location-on" />
              </div>
              <div class="flex flex-col">
                <h3 class="font-semibold">Lantai 5</h3>
                <p class="text-sm">Tanggal: 15 Juni 2023</p>
              </div>
            </div>
            <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
          </div>
        </div>
        <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md">Pulihkan</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
    .mask-circle-out {
        @apply bg-gray-400 absolute inset-0 opacity-70; /* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
        mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
    }
</style>