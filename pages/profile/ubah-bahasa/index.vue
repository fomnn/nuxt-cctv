<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const { locales, locale, setLocale } = useI18n();
const localPath = useLocalePath();

const language = computed({
  get: () => locale.value,
  set: (val) => {
    setLocale(val);
  }
})

</script>


<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-purple-950 to-rose-700 flex flex-col items-center justify-between py-10 relative overflow-x-hidden">
    <div
      class=" w-96 h-96 bg-gradient-to-br from-gray-800 to-cyan-300 rounded-full flex items-center justify-center absolute -right-52 -top-12">
      <div class="w-72 h-72 bg-gradient-to-br from-slate-900 to-indigo-500 rounded-full"></div>
    </div>
    <div class="absolute w-screen top-0 left-0 min-h-screen flex flex-col justify-end">

      <!-- <div class="mask-circle-out"></div> -->
      <BottomNavigation />

      <div class="flex items-center gap-5 text-white text-2xl py-6 px-8">
        <NuxtLink :to="localPath('/profile')" class="bg-orange-400 h-9 w-9 rounded-full flex justify-center items-center">
          <Icon name="typcn:arrow-back" class="" />
        </NuxtLink>
        <h2>{{ $t('profil') }}</h2>
      </div>

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center gap-3">
        <div
          class="flex items-center justify-between px-5 py-2 rounded-full w-full bg-gradient-to-br from-purple-950 to-rose-700">
          <div class="flex items-center gap-2 text-lg">
            <div class="bg-white w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
            </div>
            <p class="text-white">{{ $t('ubah_bahasa') }}</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </div>
        <div class="bg-white w-10/12 flex flex-col px-4 py-3 rounded-lg">
          <form class="flex flex-col gap-16">
            <div class="flex flex-col gap-4">
              <select name="" id="" class="rounded-lg" v-model="language">
                <option :value="(typeof lang === 'object' ? lang.code : lang)" v-for="lang in locales" :key="typeof lang === 'object' ? lang.code : lang" >
                {{ typeof lang === 'object' ? lang.name  : lang }}
                </option>
              </select>
            </div>
            <div class="flex-1 flex flex-col items-center gap-6">
              <!-- <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md flex items-center gap-2">
                <Icon name="teenyicons:save-solid" class="text-sm" />
                <p>Simpan</p>
              </button> -->
              <NuxtImg src="/img/tult3.png" />
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>