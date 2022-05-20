<script setup>
import { getAuth } from "firebase/auth"

const auth = getAuth()
const signOut = () => {
    auth.signOut()
}
</script>

<template>
    <main class="w-screen h-screen bg-slate-800">
        <h1 class="text-white">Your Logged In {{name}}</h1>
        <button @click="signOut">Sign out</button>
    </main>
</template>