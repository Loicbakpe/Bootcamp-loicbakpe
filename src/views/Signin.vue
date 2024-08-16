<template>
  <div v-if="error" id="alert-border-1" class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50  " role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ message }}
            </div>
            <button @click="error = !error;message=''" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-border-1" aria-label="Close">
            <span class="sr-only">Dismiss</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </button>
        </div>
  <div class="flex items-center justify-center h-screen">
    
    <div id="app" class="container bg-white p-8">
      <h2 class="text-3xl font-bold text-center mb-6">Sign In</h2>

      <p class="mt-4 text-sm text-center text-gray-600">Please, enter your credentials</p>
      <form>
        <div class="mb-4 mt-10">
          <input type="email" v-model="data.email" placeholder="Email" class="form-input" />
        </div>
        <div class="mb-8">
          <input type="password" v-model="data.password" placeholder="Password" class="form-input" />
        </div>
        <button
          @click.prevent="connect()"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none mb-6"
        >
          Sign In
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Don't have an account? 
        <RouterLink to="/">
        <div class="text-blue-500 hover:underline">Sign up here</div>
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f3f4f6;
}

.container {
  max-width: 400px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 8px;
  padding: 20px;
}

.form-input {
  transition: border-color 0.3s ease;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
}

.form-input:focus {
  border-color: #4f46e5;
  outline: none;
}
</style> 
<script setup>
import { useAuthStore } from "@/stores/auth"
import { ref } from "vue"
import router from "@/router"


let message = ""
const error = ref(false)
const authenticator = useAuthStore()
authenticator.getUsers()
const data = ref({
  email: "",
  password:""
})
function connect(){
    const valide = authenticator.login(data.value)
    console.log(valide)
    if(valide){
      router.push({ path : '/todo'})
    }else{
      message = "Email ou mot de passe incorrect"
      error.value = true
    }

}
</script>