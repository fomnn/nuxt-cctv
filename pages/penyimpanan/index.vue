<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const pilihLokasi = ref(false)
const pilihWaktu = ref(false)
const pilihTanggal = ref(false)

const gantiPilihan = (pilihan: string) => {
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
        <div class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </div>
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
                <p>Pilih Lokasi</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 max-h-48 transition-all ease-in-out duration-150"
              v-if="pilihLokasi">
              <p class="hover:bg-stone-400/30 px-4 py-1 transition-colors ease-in" v-for="i in 6">Lantai 12</p>
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
                <p>Pilih Waktu</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 max-h-48 transition-all ease-in-out duration-150"
              v-if="pilihWaktu">
              <p class="hover:bg-stone-400/30 px-4 py-1 transition-colors ease-in" v-for="i in 6">12</p>
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
                <p>Pilih Lokasi</p>
              </div>
              <Icon name="ic:outline-keyboard-arrow-down" class="text-2xl text-orange-400" />
            </div>
          </div>
          <div class="w-11/12 h-fit">
            <div
              class="bg-white/60 overflow-y-auto rounded-b-2xl pt-3 pb-2 px-3 max-h-48 transition-all ease-in-out duration-150"
              v-if="pilihTanggal">
              <input type="date" name="" id="" class="w-full rounded-lg">
            </div>
          </div>
        </div>
        <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md w-fit">Cari</button>
      </div>
    </div>
  </div>
</template>
