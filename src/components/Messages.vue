<script setup>
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase"

import Message from "./InMessage.vue"

const getMessages = async () => {
    const list = collection(db, 'messages');
    let allMessages = await getDocs(list);
    console.log(allMessages)
    return allMessages
}
const list = getMessages()

</script>

<template>

  <div class="w-full h-4/5 overflow-y-auto">
  <Message message="This is a sample message written by me" author="Matiss Jurevics"/>
  <Message message="This is a sample message written by me" author="Matis Jurevics"/>

  </div>
</template>
