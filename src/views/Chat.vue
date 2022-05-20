<script setup>
import { getAuth } from "firebase/auth"
import { ref } from 'vue'
import { auth } from '../firebase'

import Input from "../components/Input.vue"
import Messages from "../components/Messages.vue"


const name = ref(auth.currentUser.displayName)
const signOut = () => {
    auth.signOut()
}
</script>

<template>
    <main class="w-screen h-screen aurora flex flex-col items-center justify-center">

        <div class="min-h-[500px] min-w-[350px] h-5/6 w-1/3 glassmorphised overflow-hidden">
        <div class="bg-gradient-to-br from-cyan-300/60 to-green-300/60 w-full h-[10%] py-3 flex flex-row justify-between items-center">
            <p class="text-white text-lg ml-3 w-[200px]">{{name}}</p>
            <button class="text-white text-lg bg-white/40 hover:bg-white/60 p-2 mr-2 rounded-lg" @click="signOut">Sign Out</button>
        </div>

        <Messages />
        <Input />
        </div>

    </main>
</template>

<style>
.aurora {
    background: linear-gradient(45deg, #9be6ff 0%, rgba(225, 5, 34, 0) 70%) repeat scroll 0% 0%, linear-gradient(135deg, #ffd6ff 10%, rgba(49, 5, 209, 0) 80%) repeat scroll 0% 0%, linear-gradient(225deg, #a0c4ff 10%, rgba(10, 219, 216, 0) 80%) repeat scroll 0% 0%, rgba(0, 0, 0, 0) linear-gradient(315deg, #ffffbc 100%, rgba(9, 245, 5, 0) 70%) repeat scroll 0% 0%;
}
.glassmorphised {
background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 12.5px );
border-radius: 20px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>