<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const user = useSupabaseUser()

const pencarian = ref("")

console.log(user)


</script>

<template>
  <div class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0">

      <!-- <div class="mask-circle-out"></div> -->

      <BottomNavigation />

      <div class="flex flex-col min-h-screen gap-3 px-10 pt-10 z-10">
        <div class="flex gap-4 items-center">
          <div class="w-20 h-20 bg-slate-500 rounded-full"></div>
          <div class="flex flex-col text-white">
            <h1 class="text-2xl font-medium">Selamat Datang,</h1>
            <p class="">Andi Zhagyta Amalia Azrika !</p>
            <NuxtLink to="/profile" class="w-fit bg-orange-400 px-8 py-1 my-2 rounded-full">Profil</NuxtLink>
          </div>
        </div>
        <div class="flex justify-between items-center bg-white p-2 pl-5 rounded-3xl w-full">
          <input type="text" class="focus:ring-0 w-full border-0" placeholder="Pencarian" id="" name="" v-model="pencarian">
          <div class="w-7 h-7 bg-gradient-to-br from-purple-950 to-rose-700 rounded-full flex justify-center items-center">
            <Icon name="ph:magnifying-glass-bold" class="text-white" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink to="/petunjuk-pengguna" class="flex items-center justify-start px-8 text-black gap-4 bg h-20 bg-white text-2xl rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:file-copy-outline-sharp" class=" "/>
            <p>Petunjuk Pengguna</p>
          </NuxtLink>
          <NuxtLink to="/penyimpanan" class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:folder-outline-sharp" class=" "/>
            <p>Penyimpanan</p>
          </NuxtLink>
          <NuxtLink to="/rekaman-langsung" class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="bx:cctv" class=" "/>
            <p>Rekaman Langsung</p>
          </NuxtLink>
          <NuxtLink to="/tempat-sampah" class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:delete-outline-sharp" class=" "/>
            <p>Tempat Sampah</p>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
    .mask-circle-out {
        @apply bg-gray-400 absolute inset-0 opacity-70; /* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
        mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
    }
</style>