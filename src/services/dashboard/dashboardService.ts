import { table } from 'console';
import { Spinner } from './../../cmps/dashboard/Spinner';
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
    const data = await httpService.get('/dashboard/gable/8')
    const {thubs, ghub, cgable} = data.gable
    console.log('thubs',thubs);
    
    const useData = {
        fan: cgable.fsw[1],
        spinner: cgable.spin,
        soilTemp: getSoilTemp(thubs)
    }    
    return useData
}

function getSoilTemp(thubs: []): number{
    let rowAvg: Array<number> = []
    let rowLength = thubs.length
    thubs.map((row: [])=>{
        console.log('row',row);
        
    let tableAvg: Array<number> = []
    let tableLength = row.length
    row.map((table: any)=>{
        console.log('table.ecs',table.ecs);
        if (!table.ecs || table.ecs.temp.length === 0 || table.message === "table failure"){
            tableLength--
            return
        }
        let temps = table.ecs.temp.filter(((tmp:number)=> {return tmp > 0}))
        console.log('temps',temps);
        
        if (temps.length === 0) return
        const avg = getEverage(temps)
        console.log('avg',avg);
        tableAvg.push(avg)
    })
    console.log('tableAvg,tableLength',tableAvg,tableLength);
    
    rowAvg.push(getEverage(tableAvg))
   })
   console.log('rowAvg,rowLength',rowAvg,rowLength);
   
   return getEverage(rowAvg,rowLength)
}

function getEverage(array: number[],length = array.length): number {
    if (array?.length <= 0) {
        console.log('err',array);   
        throw new Error(`array length is ${array.length}`);
    }
    return array.reduce((a: number, b: number) => a + b) / length;
  }
