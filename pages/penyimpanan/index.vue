<script setup>
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();

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
const pilihWaktu = ref(false)
const pilihTanggal = ref(false)
const tanggalTerpilih = ref("")
const curLokasi = ref("Pilih Lokasi")
const curWaktu = ref("Pilih Waktu")
const curTanggal = ref("Pilih Tanggal")

const timeSlot = [
  {
    "id": 1,
    "time_range": "00.00-01.00"
  },
  {
    "id": 2,
    "time_range": "01.00-02.00"
  },
  {
    "id": 3,
    "time_range": "02.00-03.00"
  },
  {
    "id": 4,
    "time_range": "03.00-04.00"
  },
  {
    "id": 5,
    "time_range": "04.00-05.00"
  },
  {
    "id": 6,
    "time_range": "05.00-06.00"
  },
  {
    "id": 7,
    "time_range": "06.00-07.00"
  },
  {
    "id": 8,
    "time_range": "07.00-08.00"
  },
  {
    "id": 9,
    "time_range": "08.00-09.00"
  },
  {
    "id": 10,
    "time_range": "09.00-10.00"
  },
  {
    "id": 11,
    "time_range": "10.00-11.00"
  },
  {
    "id": 12,
    "time_range": "11.00-12.00"
  },
  {
    "id": 13,
    "time_range": "12.00-13.00"
  },
  {
    "id": 14,
    "time_range": "13.00-14.00"
  },
  {
    "id": 15,
    "time_range": "14.00-15.00"
  },
  {
    "id": 16,
    "time_range": "15.00-16.00"
  },
  {
    "id": 17,
    "time_range": "16.00-17.00"
  },
  {
    "id": 18,
    "time_range": "17.00-18.00"
  },
  {
    "id": 19,
    "time_range": "18.00-19.00"
  },
  {
    "id": 20,
    "time_range": "19.00-20.00"
  },
  {
    "id": 21,
    "time_range": "20.00-21.00"
  },
  {
    "id": 22,
    "time_range": "21.00-22.00"
  },
  {
    "id": 23,
    "time_range": "22.00-23.00"
  },
  {
    "id": 24,
    "time_range": "23.00-00.00"
  }
]


const gantiPilihan = (pilihan) => {
  switch (pilihan) {
    case "lokasi":
      pilihLokasi.value = !pilihLokasi.value
      pilihWaktu.value = false
      pilihTanggal.value = false
      break
    case "waktu":
      pilihWaktu.value = !pilihWaktu.value
      pilihLokasi.value = false
      pilihTanggal.value = false
      break
    case "tanggal":
      pilihTanggal.value = !pilihTanggal.value
      pilihWaktu.value = false
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
        <NuxtLink to="/home" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
					<Icon name="typcn:arrow-back" class="" />
				</NuxtLink>
        <h2>Penyimpanan</h2>
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
                <p>{{ curLokasi }}</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 max-h-48 transition-all ease-in-out duration-150 flex flex-col items-start"
              v-if="pilihLokasi">
              <button @click="[pilihLokasi = false, curLokasi = lantai.lantai.charAt(0).toUpperCase() + lantai.lantai.slice(1)]" class="hover:bg-stone-400/30 px-4 py-1 transition-colors ease-in w-full text-start" v-for="lantai in semuaLantai" :key="lantai.id">
              {{ lantai.lantai }}
            </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center w-full">
          <div class="bg-white py-3 rounded-full w-full cursor-pointer" @click="gantiPilihan('waktu')">
            <div class="flex items-center justify-between px-5">
              <div class="flex items-center gap-2 text-lg">
                <div
                  class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
                  <Icon name="ic:twotone-location-on" />
                </div>
                <p>{{ curWaktu }}</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 max-h-48 transition-all ease-in-out duration-150 flex flex-col"
              v-if="pilihWaktu">
              <button @click="[pilihWaktu = false, curWaktu = waktu.time_range]" class="hover:bg-stone-400/30 px-4 py-1 transition-colors ease-in text-start w-full" v-for="waktu in timeSlot" :key="waktu.id">{{ waktu.time_range }}</button>
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
                <p>{{ curTanggal }}</p>
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
        <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md w-fit">Cari</button>
      </div>
    </div>
  </div>
</template>
