<script setup>

</script>

<template>
 
<body class="flex items-center justify-center h-screen">
    <div id="app" class="container bg-white p-8">
        <h2 class="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form>
            <div class="mb-4">
                <input type="text" v-model="name"
                       placeholder="Name"
                       class="form-input">
            </div>
            <div class="mb-4">
                <input type="email" v-model="email" 
                       placeholder="Email" 
                       class="form-input">
            </div>
            <div class="mb-4">
                <input type="password" v-model="password"
                       placeholder="Password" 
                       class="form-input">
            </div>
            <div class="mb-6">
                <input type="password" 
                       v-model="confirmPassword" 
                       placeholder="Confirm Password" 
                       class="form-input">
            </div>
            <button @click.prevent="signUp"
                class="w-full bg-blue-500 hover:bg-blue-600 
                       text-white font-semibold py-2
                       rounded-md focus:outline-none">Sign
                Up</button>
        </form>
        <p class="mt-4 text-sm text-center
                  text-gray-600">Already have 
                                   an account? <a href="#"
                class="text-blue-500 hover:underline">Sign in here</a></p>
    </div>
    
</body>

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