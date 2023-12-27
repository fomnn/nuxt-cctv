<script lang="ts" setup>
definePageMeta({
  middleware: [
    'already-auth'
  ]
})

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref('');
const fullName = ref('');
const nim = ref('');
const password = ref('');
const ulangiPassword = ref('');

const showPassword = ref(false);
const showKonfPassword = ref(false);

const isLoading = ref(false)

const signUp = async () => {
  isLoading.value = true
  if (password.value !== ulangiPassword.value) {
    alert('Password tidak sama')
    return
  }

  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          nama_lengkap: fullName.value,
          nim: nim.value,
          avatar: ''
        }
      }
    })
    if (error) {
      throw error;
    } else {
      router.push('/auth/login')
    }
  } catch (error) {
    alert((error as Error).message);

  }
  isLoading.value = false
}

</script>

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
        <div class="w-full h-full bg-white/60 rounded-t-[3rem] px-10 py-5">
          <form @submit.prevent="signUp" class="flex flex-col gap-14 items-center">
            <div class="flex flex-col gap-2 w-full">
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" v-model="fullName"
                  class="bg-transparent focus:outline-none active:ring-0 border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Email</p>
                <input type="text" name="" id="" v-model="email"
                  class="bg-transparent focus:outline-none active:ring-0 border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>NIM</p>
                <input type="text" name="" id="" v-model="nim"
                  class="bg-transparent focus:outline-none active:ring-0 border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Kata sandi</p>
                <div class="flex border-b border-stone-600 border-0">
                  <input :type="showPassword ? 'text' : 'password'" name="" id="" v-model="password"
                    class="bg-transparent focus:outline-none active:ring-0 border-0 w-full">
                  <button type="button" @click="showPassword = !showPassword" class="px-2">
                    <Icon v-if="showPassword" name="eva:eye-outline" class="text-gray-700 text-2xl" />
                    <Icon v-else name="eva:eye-off-outline" class="text-gray-700 text-2xl" />
                  </button>
                </div>
              </label>
              <label>
                <p>Ulangi Kata Sandi</p>
                <div class="flex border-b border-stone-600 border-0">
                  <input :type="showKonfPassword ? 'text' : 'password'" name="" id="" v-model="ulangiPassword"
                    class="bg-transparent focus:outline-none active:ring-0 border-0 w-full">
                  <button type="button" @click="showKonfPassword = !showKonfPassword" class="px-2">
                    <Icon v-if="showKonfPassword" name="eva:eye-outline" class="text-gray-700 text-2xl" />
                    <Icon v-else name="eva:eye-off-outline" class="text-gray-700 text-2xl" />
                  </button>
                </div>
              </label>
            </div>
            <button class="bg-yellow-500 text-white py-2 px-6 flex items-center gap-2 rounded-3xl font-semibold w-fit">
              Daftar
              <Icon v-if="isLoading" name="line-md:loading-loop" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>