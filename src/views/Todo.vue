<template>
    <div class=" h-screen w-screen bg-purple-300">
        <div class=" inline-block h-20 text-center w-full">
        <h1 class=" text-xl font-semibold text-center w-full ">My Todos List</h1>
    </div>
    <div class="flex flex-row justify-between mt-10 bg-gray-200 h-full">
        <div class=" w-full flex items-center  flex-col">
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
        <div v-if="succes" id="alert-border-1" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50  " role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ message }}
            </div>
            <button @click="succes = !succes;message=''" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-border-1" aria-label="Close">
            <span class="sr-only">Dismiss</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </button>
        </div>
            <h1>To do Form</h1>
            <form action="">
                <div class="my-4 flex flex-col bg-purple-500">
                    <span>Titre</span>

                    <input v-model="data.title" type="text" class=" px-6 py-3 rounded w-96" required>
                </div>
                <div class="my-4 flex flex-col bg-purple-500">
                    <span>Description</span>
                    <textarea v-model="data.describe" class=" px-6 py-3 rounded w-96 h-32 rounded-lg" name="" id="" cols="30" rows="10" required></textarea>
                </div>


                <fieldset class="my-4">
                <div class="mb-4">
                    <span >Choix d'importance</span>
                </div>
                    
                <div class="flex items-center mb-4">
                    <input v-model="data.level" id="country-option-1" type="radio" name="countries" value="high" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked>
                    <label for="coutry-option-1" class="block ms-2  text-sm font-medium text-gray-900">
                        high
                    </label>
                </div>

                <div class="flex items-center mb-4">
                    <input v-model="data.level" id="country-option-2" type="radio" name="countries" value="medium" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
                    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 ">
                    medium
                    </label>
                </div>

                <div class="flex items-center mb-4">
                    <input v-model="data.level" id="country-option-3" type="radio" name="countries" value="low" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600">
                    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900">
                    low
                    </label>
                </div>

                
                </fieldset>

                <div class="my-4 flex flex-col bg-purple-500">
                    <span>Date debut</span>
                    <input v-model="data.dateS"  type="date" name="" id="" class=" px-6 py-3 rounded w-96" required>
                </div>
                <div class="my-4 flex flex-col bg-purple-500">
                    <span>Date fin</span>
                    <input v-model="data.dateE" type="date" name="" id="" class=" px-6 py-3 rounded w-96" required>
                </div>
                <div class="flex justify-end w-full ">
                    
                    
                </div>
                <button v-if="!updateB" @click.prevent="submit" type="submit" class=" px-3 py-3 bg-blue-500 text-white rounded-lg">Envoyer</button>
                <button v-else @click.prevent="todo.todoUpdate(data);cleardata();updateB = false;message='Tache mise a jour avec succes';succes=true" type="submit" class=" px-3 py-3 bg-green-500 text-white rounded-lg">Update</button>
            </form>
        </div>
        <div class=" w-full flex flex-col h-96">
            <h1 class=" inline-block">To do List</h1>
            <div  v-for="tod in todo.todos" :key="tod.title" class="flex flex-row flex-wrap">
                <div class=" bg-gray-400 rounded-lg h-40 w-80 m-2 p-2 relative">
                    <div class=" flex justify-between">
                        <span class=" font-semibold my-1">{{ tod.title }}</span>
                        <div class="flex justify-around">
                            <button @click="updateB = !updateB;updateTodoI(tod)" class=" bg-green-500 text-white rounded p-1 font-semibold">Update</button>
                            <button @click="todo.removeTodo(tod.id);message='Tache supprimer avec succes';error=true" class=" bg-red-500 text-white rounded p-1 font-semibold ml-2">Delete</button>
                        </div>
                    </div>
                    <p> {{ tod.describe }} </p>
                    <div class="absolute bottom-0 flex justify-between left-0 right-0 px-1">
                        <span class=" text-gray-200">{{ tod.dateS }}</span>
                        <span class=" text-gray-200">{{ tod.dateE }}</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todo = useTodoStore()
let updateB = ref(false)
todo.getTodos()
let error = ref(false)
let succes = ref(false)
let message = ""; 
let data = ref({
    id:Number,
    title:"",
    describe:"",
    level:"",
    dateS:"",
    dateE:"",
})

function dateVerify(dateDebutStr, dateFinStr){

    const [anneeDebut, moisDebut, jourDebut] = dateDebutStr.split('-').map(Number);
    const [anneeFin, moisFin, jourFin] = dateFinStr.split('-').map(Number);

    const dateDebut = new Date(anneeDebut, moisDebut - 1, jourDebut)
    const dateFin = new Date(anneeFin, moisFin - 1, jourFin)

    return dateDebut <= dateFin
}
function cleardata(){
    data = ref({
    id:Number,
    title:"",
    describe:"",
    level:"",
    dateS:"",
    dateE:"",
})
}

function submit(){
    if(data.value.title.length === 0 || data.value.describe.length === 0 || data.value.dateE.length === 0 || data.value.dateS.length === 0){
        message = "Un ou plusieurs champs sont vide"
        error.value =true
        
    } else if(!dateVerify(data.value.dateS, data.value.dateE)){
        message = "Les dates sont invalides"
        error.value = true
    }
    else{
        data.value.id = todo.todos.length + 1
        console.log(data.value)
        todo.addTodo(data.value)
        message = "Tache ajouter avec succes"
        succes.value = true
        cleardata()
    }
}
function updateTodoI(obj){
    data.value = obj
}

</script>