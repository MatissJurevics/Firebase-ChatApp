<script setup>
import { signInWithPopup } from "@firebase/auth"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const provider = new GoogleAuthProvider
const auth = getAuth()
const AuthWithGoogle = () => {
    signInWithPopup(auth, provider)
}
</script>
<template>
  <main
    class="w-screen h-screen aurora items-center flex flex-col"
  >
    <h1 class="text-4xl text-white font-bold mt-4">Firebase Chat App</h1>
    <h2 class="text-xl font-medium text-white">With <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Vue.js</span></h2>
    <div
      class="min-w-[300px] min-h-[200px] w-1/3 h-1/3 my-auto glassmorphised justify-center items-center pt-4 flex flex-col rounded-xl"
    >
      <h1 class="text-white mb-8 text-2xl ">Sign In</h1>
      <button
        @click="AuthWithGoogle"
        class="p-3 px-6 mt-6 rounded-lg bg-gradient-to-br drop-shadow-lg from-green-400 to-cyan-400 text-white"
      >
        Sign in with Google
      </button>
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
