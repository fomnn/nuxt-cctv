<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col justify-end">

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

      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <div class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </div>
        <h2>Profile</h2>
      </div>

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center gap-6">
        <div class=" flex flex-col items-center gap-8 w-full">
          <div class="flex flex-col items-center gap-4">
            <div class="h-28 w-28 bg-slate-400 rounded-full"></div>
            <div class="flex flex-col gap-1 items-center">
              <h2 class="text-lg font-semibold">Andi Zhagyta Amalia Azrika</h2>
              <p>zhagyta@gmail.com</p>
              <p>0821232382983923</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 w-full">
            <div class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="material-symbols:edit-rounded" />
                </div>
                <p>Ubah Profile</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </div>
            <div class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="mdi:earth" />
                </div>
                <p>Ubah Bahasa</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </div>
            <div class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust" />
                </div>
                <p>Pengaturan Lainnya</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </div>
            <div class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="jam:shield-half" />
                </div>
                <p>Keamanan Akun</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </div>
          </div>
        </div>
        <div class="flex gap-3 items-center text-white bg-red-600 w-fit px-4 py-1 rounded-full">
          <Icon name="octicon:sign-out-16" class="rotate-180" />
          <p>Keluar</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.mask-circle-out {
  @apply bg-gray-400 absolute inset-0 opacity-70;
  /* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
  mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
}
</style>