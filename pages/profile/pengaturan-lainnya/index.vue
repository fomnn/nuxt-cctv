<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const checked = ref(false)
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col justify-end">
      <!-- <div class="mask-circle-out"></div> -->
      <BottomNavigation />
      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <div class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </div>
        <h2>Profile</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center">
        <div
          class="flex items-center justify-between px-5 py-2 rounded-full w-full bg-gradient-to-br from-purple-950 to-rose-700">
          <div class="flex items-center gap-2 text-lg">
            <div class="bg-white w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
            </div>
            <p class="text-white">Ubah Profile</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </div>
        <div class="bg-white w-10/12 flex flex-col px-4 py-3 rounded-b-lg">
          <form class="flex flex-col gap-16">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="solar:face-scan-square-broken" class="text-stone-800 text-xl" />
                  <p>Face ID Login</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer">
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-lime-500">
                  </div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="carbon:fingerprint-recognition" class="text-stone-800 text-xl" />
                  <p>Biometric Login</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer">
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-lime-500">
                  </div>
                </label>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center gap-6">
              <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md flex items-center gap-2">
                <Icon name="teenyicons:save-solid" class="text-sm" />
                <p>Simpan</p>
              </button>
              <NuxtImg src="/img/tult3.png" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>