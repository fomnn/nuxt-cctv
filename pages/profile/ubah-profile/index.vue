<script lang="ts" setup>

definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const localPath = useLocalePath();

const full_name = ref(user.value?.user_metadata.nama_lengkap);
const email = ref(user.value?.email);
const nim = ref(user.value?.user_metadata.nim);

const isLoading = ref(false)

const updateUser = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase.auth.updateUser({
      email: email.value,
      data: {
        nama_lengkap: full_name.value,
        nim: nim.value,
      }
    })

    console.log(data);
    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false;
  alert('Berhasil mengubah profil');
}


////////////////////////////////======================================

let metadata = user.value?.user_metadata;
console.log(metadata)
const path = ref(metadata?.avatar);

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    console.log('tes')
    const { data, error } = await supabase.storage.from('avatars').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError) throw uploadError

    // emit('update:path', filePath)
    // emit('upload')

    path.value = filePath
    updatePP();
    console.log(metadata)
  } catch (error) {
    console.log(error.message)
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

async function updatePP() {
  try {

    const updates = {
      avatar: path.value,
      nama_lengkap: metadata.nama_lengkap,
      nim: metadata.nim,
    }

    const { error } = await supabase.auth.updateUser({
      data: updates
    })
    console.log(metadata)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
  }
}

downloadImage()

watch(path, () => {
  if (path.value) {
    downloadImage()
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

      <div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl  px-5 pt-6 pb-20 flex flex-col items-center">
        <div
          class="flex items-center justify-between px-5 py-2 rounded-full w-full bg-gradient-to-br from-purple-950 to-rose-700">
          <div class="flex items-center gap-2 text-lg">
            <div class="bg-white w-6 h-6 flex items-center justify-center rounded-full text-white">
              <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
            </div>
            <p class="text-white">{{ $t('ubah_profil') }}</p>
          </div>
          <Icon name="material-symbols:chevron-right" class="text-2xl text-orange-400" />
        </div>
        <div class="bg-white w-10/12 flex flex-col px-4 py-3 rounded-b-lg">
          <form @submit.prevent="updateUser" class="flex flex-col gap-16">
            <div class="flex flex-col gap-4">

              <label>
                <p class="font-semibold">{{ $t('nama_lengkap') }}</p>
                <div class="flex justify-between items-center gap-6">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <img v-if="src" :src="src" alt="Avatar" class="avatar image" style="width: 10em; height: 10em;" />
                  <div v-else class="avatar no-image" style=" height: 10em; width: 10em">belum ada avatar</div>
                  <div class="mt-8">
                    <label class="">Upload Avatar Baru: </label>
                    <input type="file" id="single" accept="image/*" @change="uploadAvatar" :disabled="uploading" />
                  </div>
                </div>
              </label>


              <label>
                <p class="font-semibold">{{ $t('nama_lengkap') }}</p>
                <div class="flex border-b border-stone-700 items-center">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <input v-model="full_name" class="w-full focus:outline-none" />
                  <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
                </div>
              </label>
              <label>
                <p class="font-semibold">{{ $t('email') }}</p>
                <div class="flex border-b border-stone-700 items-center">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <input v-model="email" class="w-full focus:outline-none" />
                  <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
                </div>
              </label>
              <label>
                <p class="font-semibold">{{ $t('nim') }}</p>
                <div class="flex border-b border-stone-700 items-center">
                  <!-- <input type="text" name="" id="" class="w-full border-0 focus:outline-none"> -->
                  <input v-model="nim" class="w-full focus:outline-none" />
                  <Icon name="material-symbols:edit-rounded" class="text-purple-950" />
                </div>
              </label>
            </div>
            <div class="flex-1 flex flex-col items-center gap-6">
              <button class="text-white bg-orange-400 px-7 py-1 rounded-full text-xl shadow-md flex items-center gap-2">
                <Icon name="teenyicons:save-solid" class="text-sm" />
                <p>Simpan</p>
                <Icon v-if="isLoading" name="line-md:loading-loop" />
              </button>
              <NuxtImg src="/img/tult3.png" />
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>