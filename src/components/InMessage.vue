<script setup>
import { doc, deleteDoc } from "firebase/firestore"
import { db, auth } from "../firebase"

const props = defineProps({
  text: String,
  author: String,
  uid: String,
  id: String,
  imgURL: String,
});

const remove = async (id) => {
    console.log("removing..")
    console.log("removing with id: " + id)
    await deleteDoc(doc(db, "messages", id))
}

</script>

<template>

  <li v-if="uid !== auth.currentUser.uid" class="p-2 group flex flex-row items-center w-full min-h-8 transition duration-300 hover:bg-white/30">
    <div class=" flex flex-row items-center">
        <img :src="imgURL" class="text-black/50 text-sm mb-1 h-6 w-6 rounded-full mr-2" >
        
        <span class="max-w-[250px] min-h-8 p-1 px-2 bg-cyan-300 text-white rounded-xl">
            {{text}}
        </span>
    </div>
  </li>
   <li v-else class="p-2 group flex flex-row justify-between items-center w-full min-h-8 transition duration-300 hover:bg-white/30">
     <div class="opacity-0 group-hover:opacity-100 transition duration-300 text-black ">
       <button @click="remove(id)" >
        <span class="iconify cursor-pointer relative" data-icon="akar-icons:trash-bin"  style="color: #f00; opacity: 0.6" data-width="25" data-height="25"></span>
       </button>
     </div>

    <div class="flex row items-end">
        <span class="max-w-[250px] min-h-8 p-1 px-2 bg-green-300 text-white rounded-xl">
            {{text}}
        </span>
        <img :src="imgURL" class="text-black/50 text-sm mb-1 h-6 w-6 rounded-full ml-2" >
    </div>

  </li>
</template>
