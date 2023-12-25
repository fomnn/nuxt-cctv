
  <script setup>
  const router = useRouter();
  const route = useRoute();
  const supabase = useSupabaseClient();
  const localPath = useLocalePath();
  // useHead({
  //   script: [
  //         {src: 'video.core.min.js'},
  //         {src: 'videojs-http-streaming.min.js'}
  //       ]
  // })
  definePageMeta({
    middleware: 'auth'
  })


  const curLantai = async () => {
    const { data, error } = await supabase.from('lantai').select('lantai').eq('id', route.params.path_lantai);
    if (error) {
      console.error(error);
      return null;
    }
    return data;
  }
  const lantai = await curLantai();

  const curKamera = async () => {
    const { data, error } = await supabase.from('kamera').select('kamera').eq('id', route.params.path_kamera);
    if (error) {
      console.error(error);
      return null;
    }
    return data;
  }
  const kamera = await curKamera();


  function formatDate(date) {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
  const hariini = formatDate(new Date());
  import { VideoPlayer } from 'vue-hls-video-player';

  // import {videojs} from 'video.js'
  // var player = videojs('vid1');
  // player.play();

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
              <div
                class="bg-gradient-to-br from-purple-950 to-rose-700 w-7 h-7 flex items-center justify-center rounded-full text-white">
                <Icon name="mdi:cctv" />
              </div>
              <h2 class="text-xl font-semibold">{{ $t('kamera') +" - "+ kamera[0].kamera }}</h2>
              <p class="text-lg">{{ $t('lantai') +" - "+lantai[0].lantai }}</p>
            </div>
            <div class="flex flex-col w-full gap-2">
              <VideoPlayer 
                type="default"  
                previewImageLink="/img/preview-cctv.webp" 
                link="/hls/1/2023-12-24/output.m3u8"
                :progress="30" 
                :isMuted="false" 
                :isControls="true" 
                class="customClassName" 
              />

              <!-- <video-js id=vid1 width=600 height=300 class="vjs-default-skin" controls>
                <source src="/hls/output.m3u8?url" type="application/x-mpegURL">
              </video-js> -->

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <script src="video.core.min.js"></script>
    <script src="videojs-http-streaming.min.js"></script> -->
  </template>