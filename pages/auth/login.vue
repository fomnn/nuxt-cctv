<script lang="ts" setup>

definePageMeta({
  middleware: [
    'already-auth'
  ]
})

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');

const showPassword = ref(false);

const isLoading = ref(false)

const signIn = async () => {
  isLoading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) throw error;
    router.push('/home')
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
      <div class="bg-white flex flex-col w-full items-center rounded-3xl py-6 gap-3">
        <!-- <LogoTult1Logo /> -->
        <NuxtImg src="/img/tult2.png" width="150px" />
        <NuxtImg src="/img/tult1.png" width="100px" />
        <p class="text-xl font-medium font-['Montserrat']">Secure View</p>
      </div>
      <form @submit.prevent="signIn" class="flex flex-col items-center gap-3 w-full">
        <label for="username" class="flex items-center bg-white p-2 rounded-3xl gap-3 w-full">
          <div
            class="w-[35px] h-[35px] bg-gradient-to-br from-purple-950 to-rose-700 rounded-full flex items-center justify-center">
            <IconUsername />
          </div>
          <input type="text" v-model="email" class="bg-transparent focus:ring-0 w-full border-0" placeholder="email">
        </label>
        <label for="password" class="flex items-center bg-white p-2 rounded-3xl gap-3 w-full">
          <div
            class="w-[35px] h-[35px] bg-gradient-to-br from-purple-950 to-rose-700 rounded-full flex items-center justify-center">
            <IconPassword />
          </div>
          <input :type="showPassword? 'text':'password'" v-model="password" class="bg-transparent focus:ring-0 w-full border-0"
            placeholder="Kata Sandi">
            <button type="button" @click="showPassword = !showPassword" class="px-2">
              <Icon v-if="showPassword" name="eva:eye-outline" class="text-gray-700 text-2xl" />
              <Icon v-else name="eva:eye-off-outline" class="text-gray-700 text-2xl" />
            </button>
        </label>
        <button class="bg-yellow-500 text-white py-2 px-6 flex items-center gap-2 rounded-3xl font-semibold w-fit">
              Masuk
              <Icon v-if="isLoading" name="line-md:loading-loop" />
            </button>

        <NuxtLink to="/auth/lupa-password" class="text-white">Lupa kata sandi?</NuxtLink>
      </form>
    </div>
    <div class="flex gap-2 items-center">
      <p class="text-white">Belum punya akun?</p>
      <NuxtLink to="/auth/daftar" class="text-yellow-500">Daftar</NuxtLink>
    </div>
  </div>
</template>