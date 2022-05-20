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
    class="w-screen h-screen bg-gradient-to-br from-slate-800 to-gray-800 items-center flex flex-col"
  >
    <h1 class="text-4xl text-white font-bold mt-4">Firebase Chat App</h1>
    <h2 class="text-xl font-medium text-slate-300">With <span class="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">Vue.js</span></h2>
    <div
      class="min-w-[300px] min-h-[200px] w-1/3 h-1/3 my-auto bg-slate-700 justify-center items-center pt-4 flex flex-col rounded-xl"
    >
      <h1 class="text-white mb-8 text-2xl">Sign In</h1>
      <button
        @click="AuthWithGoogle"
        class="p-3 px-6 mt-6 rounded-lg bg-gradient-to-br from-green-600 to-cyan-600 hover:from-orange-500 hover:to-yellow-500 text-white"
      >
        Sign in with Google
      </button>
    </div>
  </main>
</template>
