<script lang="ts" setup>

definePageMeta({
  middleware: [
    'already-auth'
  ]
})

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref('');

const isLoading = ref(false)

const lupaPassword = async () => {
  isLoading.value = true
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.value,{
      redirectTo: 'http://localhost:3000/profile/ubah-password'
    })
    if (error) throw error;
    router.push(`/auth/otp/${email.value}`)
  } catch (error) {
    alert((error as Error).message)
  }
  isLoading.value = false
}
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10">
    <div class=""></div>
    <div class="w-8/12 flex flex-col items-center gap-10">
      <div class="">
        <h1 class=" text-white text-5xl ">Lupa Password</h1>
        <p class="text-center text-white mt-4">Masukkan email anda</p>
      </div>
      <form @submit.prevent="lupaPassword" class="flex flex-col items-center gap-3 w-full">
        <label for="username" class="flex items-center bg-white p-2 rounded-3xl gap-3 w-full">
          <div
            class="w-[35px] h-[35px] bg-gradient-to-br from-purple-950 to-rose-700 rounded-full flex items-center justify-center">
            <IconUsername />
          </div>
          <input type="text" v-model="email" class="bg-transparent focus:ring-0 w-full border-0" placeholder="email">
        </label>
        <button class="bg-yellow-500 text-white py-2 px-6 flex items-center gap-2 rounded-3xl font-semibold w-fit">
          Kirim OTP
          <Icon v-if="isLoading" name="line-md:loading-loop" />
        </button>
      </form>
    </div>
    <div class="flex gap-2 items-center">
      <p class="text-white">Belum punya akun?</p>
      <NuxtLink to="/auth/daftar" class="text-yellow-500">Daftar</NuxtLink>
    </div>
  </div>
</template>