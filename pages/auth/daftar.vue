<script lang="ts" setup>
const client = useSupabaseClient()

const email = ref('');
const fullName = ref('');
const noTelp = ref('');
const nim = ref('');
const password = ref('');
const ulangiPassword = ref('');
const errorMsg = ref('e');
const successMsg = ref('s');

async function signUp() {
  console.log('kontolll ')
  try {
    const { data, error } = await client.auth.signUp({
      phone: noTelp.value,
      email: email.value,
      password: password.value,
    })
    console.log(data.user);
    if (error) throw error;
    successMsg.value = 'Check your email for the confirmation link.'
  } catch (error) {
    errorMsg.value = (error as Error).message;
  }
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
        <div class="w-full h-full bg-slate-100/40 rounded-t-[3rem] px-10 py-5">
          <form class="flex flex-col gap-14 items-center">
            <div class="flex flex-col gap-2 w-full">
              <label>
                <p>Nama</p>
                <input type="text" name="" id="" v-model="fullName" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Email</p>
                <input type="text" name="" id="" v-model="email" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>No Telepon</p>
                <input type="text" name="" id="" v-model="noTelp" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>NIM</p>
                <input type="text" name="" id="" v-model="nim" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Kata sandi</p>
                <input type="text" name="" id="" v-model="password" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
              <label>
                <p>Ulangi Kata Sandi</p>
                <input type="text" name="" id="" v-model="ulangiPassword" class="bg-transparent focus:outline-none active:outline-none border-b border-stone-600 border-0 w-full">
              </label>
            </div>
            <button @click="signUp" class="bg-yellow-500 text-white py-2 px-12 rounded-3xl font-semibold w-fit">Daftar</button >
          </form>
          <p class="text-green-400">{{ successMsg }}</p>
          <p class="text-red-500">{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>