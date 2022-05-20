<script setup>
import { auth } from "../firebase"

const props = defineProps({
  message: String,
  author: String,
  id: String,
});

</script>

<template>

  <li v-if="author !== auth.currentUser.displayName" class="p-2 group flex flex-row items-center w-full min-h-8 hover:bg-white/30">
    <div class=" flex flex-col">
        <span class="text-black/50 text-sm mb-1 hidden group-hover:flex">{{ author }}</span>
        <span class="max-w-[250px] p-1 px-2 bg-cyan-300 text-white rounded-xl">
            {{message}}
        </span>
    </div>
  </li>
   <li v-else class="p-2 group flex flex-row justify-between items-center w-full min-h-8 hover:bg-white/30">
     <div class="opacity-0 group-hover:opacity-100 text-black ">
        <span class="iconify cursor-pointer relative" @click="deletemessage" data-icon="akar-icons:trash-bin"  style="color: #f00; opacity: 0.6" data-width="25" data-height="25"></span>
     </div>

    <div class="flex flex-col items-end">
        <span class="text-black/50 text-sm mb-1 hidden group-hover:flex">{{ author }}</span>
        <span class="max-w-[250px] p-1 px-2 bg-green-300 text-white rounded-xl">
            {{message}}
        </span>
    </div>

  </li>
</template>
