<script  setup lang="ts">
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { auth } from "./firebase"
import { ref } from "vue"

import Chat from "./views/Chat.vue"
import Login from "./views/Login.vue"




let loggedIn = ref(false)
onAuthStateChanged(auth, user => {

  if (user) {
    loggedIn.value = true
  } else {
    loggedIn.value = false
  }
})

</script>

<template>
<Chat v-if="loggedIn == true" />
<Login v-else />
</template>


