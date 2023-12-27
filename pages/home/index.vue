<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const user = useSupabaseUser()
const supabase = useSupabaseClient();
const localPath = useLocalePath()


// #################################################
const src = ref('')
const path = () => {
  return user.value?.user_metadata.avatar
}
console.log(path)
const downloadImage = async () => {
  try {
    console.log('tes')
    const { data, error } = await supabase.storage.from('avatars').download(path())
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}
downloadImage();
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0">

      <!-- <div class="mask-circle-out"></div> -->

      <BottomNavigation />

      <div class="flex flex-col min-h-screen gap-6 px-10 pt-10 z-10 pb-32">
        <div class="flex gap-4 items-center">
          <!--  -->
          <img v-if="src" :src="src" alt="Avatar" class="rounded-full" style="width: 4em; height: 4em;" />
          <div v-else class="avatar no-image" :style="{ height: size, width: size }">belum ada avatar</div>
          <!--  -->
          <div class="flex flex-col text-white">
            <h1 class="text-2xl font-medium">{{ $t('welcome') }}</h1>
            <p class="">{{ user?.user_metadata.nama_lengkap }}</p>
            <NuxtLink :to="localPath('/profile')" class="w-fit bg-orange-400 px-8 py-1 my-2 rounded-full">{{ $t('profil')
            }}</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink :to="localPath('/petunjuk-pengguna')"
            class="flex items-center justify-start px-8 text-black gap-4 bg h-20 bg-white text-2xl rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:file-copy-outline-sharp" class=" " />
            <p>{{ $t('petunjuk_pengguna') }}</p>
          </NuxtLink>
          <NuxtLink :to="localPath('/penyimpanan')"
            class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:folder-outline-sharp" class=" " />
            <p>{{ $t('penyimpanan') }}</p>
          </NuxtLink>
          <NuxtLink :to="localPath('/rekaman-langsung')"
            class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="bx:cctv" class=" " />
            <p>{{ $t('rekaman_langsung') }}</p>
          </NuxtLink>
          <!-- <NuxtLink :to="localPath('/tempat-sampah')" class="flex items-center justify-start px-8 text-black gap-4 bg h-20 text-2xl bg-white rounded-2xl shadow w-full hover:bg-stone-200 transition-colors duration-100 ease-in-out">
            <Icon name="material-symbols:delete-outline-sharp" class=" "/>
            <p>{{ $t('tempat_sampah') }}</p>
          </NuxtLink> -->
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.mask-circle-out {
  @apply bg-gray-400 absolute inset-0 opacity-70;
  /* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
  mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
}
</style>