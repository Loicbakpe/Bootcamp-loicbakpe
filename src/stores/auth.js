import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
//     
        state:() => ({
        currentUser: null,
        users: []
        }),
 

    actions: {

        getUsers(){
            if(localStorage.getItem("users")){
                this.users = JSON.parse(localStorage.getItem("users"))
                console.log(localStorage.getItem("users"))
            } 
        },
        login(data){
            const valide = this.users.findIndex(item => item.email === data.email)
            console.log(valide)
            console.log(this.users)
            console.log(data.email)
            // if(valide && valide != -1){
            //     console.log(valide)
            //     if(data.password === this.users[valide].password){
            //         return true
            //     }

            // }else{
            //     return false
            // }
        },
        async register(userData) {
            if(localStorage.getItem('users') == null) {
                this.users.push(userData)
                localStorage.setItem('users', JSON.stringify(this.users))
                console.log(JSON.parse(localStorage.getItem("users")));
                
            } else {
                const usersArray = JSON.parse(localStorage.getItem("users"));
                console.log(usersArray)
                await usersArray.push(userData)
                console.log(usersArray)

                this.users = usersArray
                localStorage.setItem('users', JSON.stringify(usersArray))

                // console.log(localStorage.getItem('users'))

            }
        }
            // setCurrentUser(user) {
            // this.currentUser = user;

            // localStorage.setItem('currentUser', JSON.stringify(user));
            // },
            // removeCurrentUser() {
            // this.state.currentUser = null;

            // localStorage.removeItem('currentUser');
            // },
            // init() {

            // const user = localStorage.getItem('currentUser');
            // if (user) {
            //     this.state.currentUser = JSON.parse(user);
            // }
            // }
        }
})
  