<script setup>
import { getDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

import Message from "./InMessage.vue"

// const Messsages = async () => {
//     await getDoc(collection(db, "messsages"))
// }

</script>

<template>

  <div class="w-full h-4/5 overflow-y-auto">
  <Message message="This is a sample message written by me" author="Matiss Jurevics"/>
  <Message message="This is a sample message written by me" author="Matis Jurevics"/>

  </div>
</template>
