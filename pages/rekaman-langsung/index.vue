<script setup>

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const supabase = useSupabaseClient();
const localPath = useLocalePath();

const allLantai = async () => {
  const { data, error } = await supabase.from('lantai').select('*').order('id', { ascending: true });
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}
const semuaLantai = await allLantai();
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
        <NuxtLink v-for="lantai of semuaLantai" :to="localPath('/rekaman-langsung/' + lantai.id)"
          class="flex items-center justify-between bg-white px-5 py-3 rounded-full" :key="lantai.id">
          <div class="flex items-center gap-2 text-lg">
            <div
              class="bg-gradient-to-br from-purple-950 to-rose-700 w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="ic:twotone-location-on" />
            </div>
            <p>{{ $t('lantai')+" - "+lantai.lantai }}</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>