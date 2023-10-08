<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const curId = ref(1);
const petunjukPengguna = [
	{
		id: 1,
		imgLink: 'img/server.png',
		content: 'Data rekaman akan otomatis tersimpan kedalam server. Pengguna  bisa mengakses seluruh file rekaman tersebut dengan masuk ke menu “Penyimpanan”'
	},
	{
		id: 2,
		imgLink: 'img/tempat-sampah.png',
		content: `File rekaman akan otomatis terhapus dan dipindahkan ke dalam 
 “Tempat Sampah” dalam kurun waktu 30 hari setelah waktu perekaman. 
Akan tetapi pengguna masih dapat mengakses dan mengembalikan file tersebut melalui menu 
“Tempat Sampah” sebelum terhapus permanen secara otomatis dalam waktu 40 hari`
	},
	{
		id: 3,
		imgLink: 'img/cctv.png',
		content: `Untuk memantau rekaman langsung dari CCTV bisa dilakukan dengan cara pilih menu “Rekaman Langsung”, kemudian pilih ruangan mana yang ingin dipantau. Dalam menu tersebut dapat terlihat semua CCTV yang terpasang di ruangan tersebut. Pilih CCTV mana yang ingin dipantau secara langsung`
	},
];

const curPetunjukPengguna = computed(() => {
	return petunjukPengguna.find((item) => item.id === curId.value);
});

const nextPetunjukPengguna = () => {
	if (curId.value < petunjukPengguna.length) {
		curId.value++;
	}
};
const prevPetunjukPengguna = () => {
	if (curId.value > 1) {
		curId.value--;
	}
};

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
				<h2>Petunjuk Pengguna</h2>
			</div>
			<div class="bg-white/70 flex-1 rounded-se-3xl rounded-ss-3xl flex flex-col px-5 pt-6 pb-20 justify-between">
				<div class="grid gap-6">
					<div class="bg-white rounded-3xl flex flex-col items-center justify-center px-4 py-4 h-[20rem]">
						<NuxtImg :src="curPetunjukPengguna?.imgLink" class="w-5/12" />
					</div>
					<div class="px-8">
						<p class="text-center">{{ curPetunjukPengguna?.content }}</p>
					</div>
				</div>
				<div class="flex justify-between">
					<button @click="prevPetunjukPengguna" v-if="curId > 1"
						class="text-white bg-gradient-to-br from-purple-950 to-rose-700 px-7 py-1.5 rounded-lg" >Kembali</button>
					<div v-else></div>
					<button @click="nextPetunjukPengguna" v-if="curId < petunjukPengguna.length"
						class="text-white bg-gradient-to-br from-purple-950 to-rose-700 px-7 py-1.5 rounded-lg">Lanjut</button>
					<div v-else></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.mask-circle-out {
	@apply bg-gray-400 absolute inset-0 opacity-70 -z-10;
	/* bg-gray-400 untuk background abu-abu, absolute dan inset-0 untuk posisi dan ukuran penuh */
	mask-image: radial-gradient(circle at 50% -100%, transparent 20%, transparent 70%, black 70.1%);
}</style>