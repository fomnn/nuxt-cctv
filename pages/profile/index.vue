<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const localPath = useLocalePath();

const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error;
    router.push('/')
  } catch (error) {
    alert((error as Error).message)
  }
}

const curUser = computed(() => {
  return user.value?.user_metadata
})
console.log(curUser.value)

// #################################################
// #################################################
const src = ref('')
console.log(curUser.value?.avatar)
const path = () => {
  return curUser.value?.avatar
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
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col justify-end pb-16">

      <!-- <div class="mask-circle-out"></div> -->
      <BottomNavigation />

      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <NuxtLink :to="localPath('/home')" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </NuxtLink>
        <h2>{{ $t('profil') }}</h2>
      </div>

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center gap-6">
        <div class=" flex flex-col items-center gap-8 w-full">
          <div class="flex flex-col items-center gap-4">
            <img v-if="src" :src="src" alt="Avatar" class="rounded-full" style="width: 10em; height: 10em;" />
            <div v-else class="avatar no-image" style="width: 10em; height: 10em">belum ada avatar</div>
            <div class="flex flex-col gap-1 items-center">
              <h2 class="text-lg font-semibold">{{ curUser?.nama_lengkap }}</h2>
              <p>{{ user?.email }}</p>
              <p>{{ curUser?.nim }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 w-full">
            <NuxtLink :to="localPath('/profile/ubah-profile')"
              class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="material-symbols:edit-rounded" />
                </div>
                <p>{{ $t('ubah_profil') }}</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </NuxtLink>
            <NuxtLink :to="localPath('/profile/ubah-password')"
              class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="material-symbols:edit-rounded" />
                </div>
                <p>{{ $t('ubah_password') }}</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </NuxtLink>
            <NuxtLink :to="localPath('/profile/ubah-bahasa')"
              class="flex items-center justify-between bg-white px-5 py-2 rounded-full">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="mdi:earth" />
                </div>
                <p>{{ $t('ubah_bahasa') }}</p>
              </div>
              <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
            </NuxtLink>

          </div>
        </div>
        <button @click="signOut" class="flex gap-3 items-center text-white bg-red-600 w-fit px-4 py-1 rounded-full">
          <Icon name="octicon:sign-out-16" class="rotate-180" />
          <p>{{ $t('keluar') }}</p>
        </button>
      </div>

    </div>
  </div>
</template>