<script setup>
import { ref } from 'vue'
const inputVal = ref("")

const log = () => {
    console.log(inputVal.value)
}
</script>
<template>
  <form @submit.prevent @submit="log"
    class="min-h-16 h-[10%] w-full bg-white flex flex-row justify-between items-center px-3"
  >
    <input
      type="text"
      v-model="inputVal"
      class="py-1 px-2 outline-none border-2 border-slate-200 focus:border-slate-300 hover:border-slate-300  rounded-lg w-4/5 text-slate-500 h-2/3"
    />
    <button
      class="h-2/3 onetoone w-auto border-2 border-slate-200 hover:border-slate-300 rounded-full flex justify-center items-center"
    >
      <span
        class="iconify fill-slate-400"
        data-icon="ant-design:send-outlined"
        style="color: #ddd"
        data-width="30"
        data-height="30"
      ></span>
    </button>
  </form>
</template>

<style>
.onetoone {
  aspect-ratio: 1 / 1;
}
</style>
