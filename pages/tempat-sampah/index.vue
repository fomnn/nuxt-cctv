<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const localPath = useLocalePath()
</script>


<template>
  <div
    class=" w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col ">
      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <NuxtLink :to="localPath('/home')" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
					<Icon name="typcn:arrow-back" class="" />
				</NuxtLink>
        <h2>{{ $t('tempat_sampah') }}</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center gap-8">
        <!-- <div class="flex flex-col gap-3 w-full">
          <div 
            class="flex items-center justify-between bg-white px-5 py-1 rounded-full w-full" v-for="i in 3" :key="i">
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
        <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md">{{ $t('pulihkan') }}</button> -->
      </div>
    </div>
  </div>
</template>