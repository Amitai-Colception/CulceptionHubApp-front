import { User } from '../../models/user'
import { httpService } from './http.service'


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
}


// async function getById(userId) {
//     const user = await httpService.get(`user/${userId}`)
//     return user
// }

// async function update(user) {

//     user = await httpService.put(`user/${user._id}`, user)
//     // Handle case in which admin updates other user's details
//     if (getLoggedinUser()._id === user._id) saveLocalUser(user)
//     return user
// }

async function login(userCred: {username:string ,password:string}) {
    const user = await httpService.post('auth/login', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

function saveLocalUser(user: User) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

