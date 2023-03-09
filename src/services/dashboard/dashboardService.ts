import { httpService } from './http.service'

export const dashboardService = {
    loginDashboard,
    logoutDashboard,
    gableData
}

async function loginDashboard(userCred: {email:string ,password:string} ) {
    userCred = {email: 'admintest@culception.com', password:'admintest'}
    const user = await httpService.post('/api/login', userCred)
    return user
}

async function logoutDashboard() {
    
    return await httpService.post('/api/logout')
}

async function gableData() {   
    return await httpService.get('/dashboard/gable/5')
}



