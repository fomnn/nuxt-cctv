<script setup>

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const route = useRoute();
const supabase = useSupabaseClient();
const localPath = useLocalePath();

const curLantai = async () => {
  const { data, error } = await supabase.from('lantai').select('*').eq('id', route.params.path_lantai);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}
const lantai = await curLantai();
console.log(lantai[0]);


const allCam = async () => {
  const { data, error } = await supabase.from('kamera').select('*').eq('lantai_id', lantai[0].id);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}

const semuaCam = await allCam();
console.log(semuaCam);
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
        <button @click="router.go(-1)" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </button>
        <h2>{{ $t('rekaman_langsung') }}</h2>
      </div>
      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl flex flex-col px-5 pt-6 pb-20 gap-3 ">
        <div class="bg-white flex flex-col items-center py-6 rounded-lg px-6 gap-4">
          <div class="flex flex-col items-center">
            <div class="bg-gradient-to-br from-purple-950 to-rose-700 w-7 h-7 flex items-center justify-center rounded-full text-white">
              <Icon name="ic:twotone-location-on" />
            </div>
            <h2 class="text-xl font-semibold">{{ lantai[0].lantai }}</h2>
          </div>
          <div class="grid grid-cols-3 w-full gap-2">
            <!-- <NuxtLink :to="localPath('/rekaman-langsung/'+route.params.path_lantai+'/semua-kamera')" class="flex flex-col items-center border border-slate-400 rounded-md col-span-3 px-1 py-2">
              <Icon name="mdi:cctv" class="text-3xl" />
              <h3>All Camera</h3>
            </NuxtLink> -->
            <NuxtLink :to="localPath('/rekaman-langsung/'+route.params.path_lantai+'/'+kamera.id)" class="flex flex-col items-center border border-slate-400 rounded-md px-1 py-2" v-for="kamera in semuaCam" :key="kamera.id">
              <Icon name="mdi:cctv" class="text-3xl" /> 
              <h3>{{ $t('kamera') +" - "+ kamera.kamera }}</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>