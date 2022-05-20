<script  setup lang="ts">
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import Chat from "./views/Chat.vue"
import Login from "./views/Login.vue"


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBms3EX1YapwrLXNkNPCi1N8-cJUzV0zLo",
    authDomain: "firechat-be4f4.firebaseapp.com",
    projectId: "firechat-be4f4",
    storageBucket: "firechat-be4f4.appspot.com",
    messagingSenderId: "108487292910",
    appId: "1:108487292910:web:ae8db53e90c244218300ff"
})

const auth = getAuth()
let loggedIn = false
onAuthStateChanged(auth, user => {
  console.log("something happened:")
  if (user) {
    loggedIn = true
  } else {
    loggedIn = false
  }
  console.log(loggedIn)
})

</script>

<template>
<Chat v-if="loggedIn" />
<Login v-else />
</template>
