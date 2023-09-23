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

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl px-5 pt-6 flex flex-col items-center gap-5">
        <div class="flex flex-col items-center gap-5">
          <div class=" bg-white w-24 h-24 rounded-full flex items-center justify-center">
            <Icon name="material-symbols:notifications" class="text-7xl text-purple-950" />
          </div>
          <div class="flex flex-col gap-3 w-full max-h-[30rem] overflow-y-auto rounded-lg">
            <div class="bg-white flex flex-col items-center text-center px-4 py-1 rounded-xl" v-for="i in 7">
              <p class="py-2 text-lg font-semibold border-b w-full border-stone-600">Koneksi Terputus</p>
              <p class="py-2 ">Koneksi dengan kamera TULT 01.01 pada Lantai 1 terputus. </p>
            </div>
          </div>
        </div>
        <button class="text-white bg-gradient-to-br from-purple-950 to-rose-700 px-7 py-1 rounded-full shadow-md">Bersihkan</button>
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