import { defineStore } from "pinia";
export const useTodoStore = defineStore('todo', {
//     
        state:() => ({
        newTodo:{},
        todos:[],
        }),
 
    getters:{

    },
    actions: {
    todoUpdate(data){
        const index = this.todos.findIndex(todo => todo.id === data.id)
        if(index !== -1){
            this.todos[index] = data
        }
        this.saveToLocalStorage();
    },
    getTodos(){
        if(localStorage.getItem("todos")){
            this.todos = JSON.parse(localStorage.getItem("todos"))
            console.log(typeof localStorage.getItem("todos"))
        }
        
    },
    saveToLocalStorage(){
        localStorage.setItem("todos",JSON.stringify(this.todos));
    },

    addTodo(data){
        this.todos.push(data);
        this.newTodo="";
        this.saveToLocalStorage();  
    },

    removeTodo(key){
        const index = this.todos.findIndex(todo => todo.id === key)
        if(index !== -1){
            this.todos.splice(index, 1)
        }
        this.saveToLocalStorage();
    },

    

    savedTodos: localStorage.getItem("todos"),

    if(savedTodos){
        this.todos.value.push(...JSON.parse(savedTodos));
    }
    }
});
