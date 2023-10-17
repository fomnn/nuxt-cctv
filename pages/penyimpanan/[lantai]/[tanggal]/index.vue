<script setup>

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const route = useRoute();
const supabase = useSupabaseClient();

const curLantai = route.params.lantai;
const curTanggal = route.params.tanggal;
console.log(curLantai);
console.log(curTanggal);


function formatDate(tanggal) {
  const dateObj = new Date(tanggal);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const dayName = days[dateObj.getDay()];
  const dateNum = dateObj.getDate();
  const monthName = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${dayName}, ${dateNum} ${monthName} ${year}`;
}

const currTanggal = formatDate(curTanggal);
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
        <NuxtLink @click="router.go(-1)" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </NuxtLink>
        <h2>Penyimpanan</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl flex flex-col px-5 pt-6 pb-20 gap-3 ">
        <div class="bg-white flex flex-col items-center py-6 rounded-lg px-6 gap-4">
          <div class="flex flex-col items-center">
            <div
              class="bg-gradient-to-br from-purple-950 to-rose-700 w-7 h-7 flex items-center justify-center rounded-full text-white">
              <Icon name="mdi:cctv" />
            </div>
            <h2 class="text-xl font-semibold">{{ curLantai }}</h2>
            <div class="flex gap-2">
              <p>{{ currTanggal }}</p>
            </div>
          </div>
          <div class="flex flex-col w-full gap-2">
            <div class="flex gap-2" v-for="i in 5">
              <NuxtLink to="#" class="bg-slate-400 w-full h-10 rounded-md flex items-center px-3" :key="i">
                kamera - {{ i }}
              </NuxtLink>
              <button class="bg-red-600 rounded-lg px-4 text-white">hapus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>