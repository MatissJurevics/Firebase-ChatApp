<script setup>
import { auth } from "../firebase"

const props = defineProps({
  message: String,
  author: String,
  id: String,
});
</script>

<template>

  <li v-if="author !== auth.currentUser.displayName" class="p-2 flex flex-row items-center w-full min-h-8 hover:bg-white/30">
    <div class="flex flex-col">
        <span class="text-black/50 text-sm mb-1">{{ author }}</span>
        <span class="max-w-[250px] p-1 px-2 bg-cyan-300 text-white rounded-xl">
            {{message}}
        </span>
    </div>
  </li>
   <li v-else class="p-2 flex flex-row justify-between items-center w-full min-h-8 hover:bg-white/30">
       <div>
        I
    </div>
    <div class="flex flex-col items-end">
        <span class="text-black/50 text-sm mb-1">{{ author }}</span>
        <span class="max-w-[250px] p-1 px-2 bg-green-300 text-white rounded-xl">
            {{message}}
        </span>
    </div>

  </li>
</template>
