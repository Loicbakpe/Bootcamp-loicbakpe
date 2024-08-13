import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
//     
        state:() => ({
        currentUser: null,
        users: []
        }),
 

    actions: {


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
  