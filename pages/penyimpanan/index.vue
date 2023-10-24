<script setup>
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();
const router = useRouter();
const localPath = useLocalePath();

const allLantai = async () => {
  const { data, error } = await supabase.from('lantai').select('*').order('id', { ascending: true });
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}
const semuaLantai = await allLantai()

const pilihLokasi = ref(false)
const pilihTanggal = ref(false)
const tanggalTerpilih = ref("")
const curLokasi = ref("Pilih Lokasi")
const curLokasi2 = ref("");
const curTanggal = ref("Pilih Tanggal")



const gantiPilihan = (pilihan) => {
  switch (pilihan) {
    case "lokasi":
      pilihLokasi.value = !pilihLokasi.value
      pilihTanggal.value = false
      break
    case "tanggal":
      pilihTanggal.value = !pilihTanggal.value
      pilihLokasi.value = false
      break
  }
}


function handleDateChange() {
  const formattedDate = formatDate(tanggalTerpilih.value);
  curTanggal.value = formattedDate;
  pilihTanggal.value = false;
}

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

const cari = () => {
  console.log(curLokasi.value);
  console.log(tanggalTerpilih.value);

  if (curLokasi.value == "Pilih Lokasi" || curTanggal.value == "Pilih Tanggal") {
    alert("Pilih lokasi, dan tanggal terlebih dahulu");
  } else {
    router.push(`/penyimpanan/${curLokasi2.value}/${tanggalTerpilih.value}`);
  }
}

console.log(curLokasi2.value);
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
        <NuxtLink :to="localPath('/home')" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
					<Icon name="typcn:arrow-back" class="" />
				</NuxtLink>
        <h2>{{ $t('penyimpanan') }}</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl flex flex-col gap-3 px-5 pt-6 pb-20 items-center">

        <div class="flex flex-col items-center w-full">
          <div class="bg-white py-3 rounded-full w-full cursor-pointer" @click="gantiPilihan('lokasi')">
            <div class="flex items-center justify-between px-5">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="ic:twotone-location-on" />
                </div>
                <p>{{ (curLokasi == 'Pilih Lokasi')? $t('pilih_lokasi'): curLokasi }}</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 max-h-48 transition-all ease-in-out duration-150 flex flex-col items-start"
              v-if="pilihLokasi">
              <button @click="[pilihLokasi = false, curLokasi = lantai.lantai.charAt(0).toUpperCase() + lantai.lantai.slice(1), curLokasi2 = lantai.id]" class="hover:bg-stone-400/30 px-4 py-1 transition-colors ease-in w-full text-start" v-for="lantai in semuaLantai" :key="lantai.id">
              {{ lantai.lantai }}
            </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center w-full">
          <div class="bg-white py-3 rounded-full w-full cursor-pointer" @click="gantiPilihan('tanggal')">
            <div class="flex items-center justify-between px-5">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="ic:twotone-location-on" />
                </div>
                <p>{{ (curTanggal == 'Pilih Tanggal')? $t('pilih_tanggal'): curTanggal }}</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 px-3 max-h-48 flex gap-5 transition-all ease-in-out duration-150"
              v-if="pilihTanggal">
              <input type="date" name="" id="" class="w-full rounded-lg" v-model="tanggalTerpilih" @change="handleDateChange">
            </div>
          </div>
        </div>
        <button @click="cari" class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md w-fit">{{ $t('cari') }}</button>
      </div>
    </div>
  </div>
</template>
