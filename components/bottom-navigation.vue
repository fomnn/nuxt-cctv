<template>
  <div class="bg-white fixed bottom-0 w-full flex justify-between px-20 py-3 rounded-tr-xl">
    <NuxtLink to="/home" class="flex flex-col items-center gap-1">
      <Icon name="ic:round-home" class="text-3xl" />
      <p>{{ $t('utama') }}</p>
    </NuxtLink>
    <NuxtLink to="/notifikasi" class="flex flex-col items-center gap-1">
      <Icon name="material-symbols:notifications" class="text-3xl" />
      <p>{{ $t('notifikasi') }}</p>
    </NuxtLink>
    <NuxtLink to="/profile" class="flex flex-col items-center gap-1">
      <Icon name="ri:settings-4-fill" class="text-3xl" />
      <p>{{ $t('pengaturan') }}</p>
    </NuxtLink>
  </div>
</template>

