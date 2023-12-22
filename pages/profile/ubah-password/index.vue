<script lang="ts" setup>

definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const localPath = useLocalePath();

const passwordBaru = ref("");
const konfirmasiPasswordBaru = ref("");

const isLoading = ref(false)

const updateUser = async () => {
  isLoading.value = true
  try {
    if (passwordBaru.value !== konfirmasiPasswordBaru.value) {
      alert('Password baru dan konfirmasi password baru tidak sama');
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: passwordBaru.value })

    if (error) throw error;
    alert('Berhasil mengubah password');
    await supabase.auth.signOut()
    router.push(localPath('/auth/login'))
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false;
}
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
        <NuxtLink :to="localPath('/profile')" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </NuxtLink>
        <h2>Password</h2>
      </div>

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center">
        <div
          class="flex items-center justify-between px-5 py-2 rounded-full w-full bg-gradient-to-br from-purple-950 to-rose-700">
          <div class="flex items-center gap-2 text-lg">
            <div class="bg-white w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
            </div>
            <p class="text-white">{{ $t('ubah_password') }}</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </div>
        <div class="bg-white w-10/12 flex flex-col px-4 py-3 rounded-b-lg">
          <form @submit.prevent="updateUser" class="flex flex-col gap-16">
            <div class="flex flex-col gap-4">
              <label>
                <p class="font-semibold">{{ $t('password_baru') }}</p>
                <div class="flex border-b border-stone-700 items-center">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <input v-model="passwordBaru" class="w-full focus:outline-none" />
                </div>
              </label>
              <label>
                <p class="font-semibold">{{ $t('konfirmasi_password_baru') }}</p>
                <div class="flex border-b border-stone-700 items-center">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <input v-model="konfirmasiPasswordBaru" class="w-full focus:outline-none" />
                </div>
              </label>
            </div>
            <div class="flex-1 flex flex-col items-center gap-6">
              <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md flex items-center gap-2">
                <Icon name="teenyicons:save-solid" class="text-sm" />
                <p>Simpan</p>
                <Icon v-if="isLoading" name="line-md:loading-loop" />
              </button>
              <NuxtImg src="/img/tult3.png" />
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>