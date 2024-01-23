<script setup>
import { getDocs, collection, query, orderBy, limit, onSnapshot  } from "firebase/firestore"
import { db } from "../firebase"
import { ref } from 'vue'

import Message from "./InMessage.vue"

const messages = ref()
const q = query(collection(db, "messages"), orderBy("Created", "desc"), limit(50))
const subscribe = onSnapshot(q, docs => {
  let posts = []
  
  docs.forEach(doc => {
    let docdata = {
      text: doc.data().message,
      user: doc.data().user,
      uid: doc.data().uid,
      uimg: doc.data().uimg,
      id: doc.id
    }
    posts.push(docdata)

  })
  console.log(posts)
  messages.value = posts.reverse()
})





</script>

<template>

  <div id="messageBody" class="w-full h-4/5 overflow-y-auto">
    <Message v-for="message in messages" :text="message.text" :author="message.user" :uid="message.uid" :imgURL="message.uimg" :id="message.id" :key="message.id" />
  </div>
</template>
