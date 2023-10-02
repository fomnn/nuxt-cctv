<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class="w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0">
      <div class="flex flex-col items-center h-screen gap-3 pt-8">
        <div class="bg-white flex flex-col items-center w-6/12 rounded-3xl py-6 gap-3">
          <!-- <LogoTult1Logo /> -->
          <NuxtImg src="/img/tult2.png" width="100px" />
          <NuxtImg src="/img/tult1.png" width="50px" />
          <p class="text-xl font-medium font-['Montserrat']">Secure View</p>
        </div>
        <div class="flex flex-col items-center text-5xl font-medium text-white">
          <p>Buat</p>
          <p>Akun Baru</p>
        </div>
        <div class="w-full h-full bg-slate-100/40 rounded-t-[3rem] px-10 py-5">
          <form class="flex flex-col gap-14 items-center">
            <div class="flex flex-col gap-2 w-full">
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
            </div>
            <NuxtLink to="/auth/login" class="bg-yellow-500 text-white py-2 px-12 rounded-3xl font-semibold w-fit">Daftar</NuxtLink >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

