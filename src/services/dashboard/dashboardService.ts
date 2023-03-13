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

async function gableData(gable: number) {   
    const data = await httpService.get(`/dashboard/gable/${gable}`)
    const {thubs, ghub, cgable} = data.gable
    
    const useData = {
        fan: getFan(cgable),
        spinner: cgable.spin,
        soilTemp: getSoilTemp(thubs),
        envTemp: getEnvTemp(thubs,ghub),
        humidity: getEnvHum(thubs,ghub)
    }   
    return useData
}

function getEnvHum(thubs: [],ghub: [{data:{hum:number}}]){
    let envVal = getEnvHumThubs(thubs)
    if (envVal != 0) return  {envVal,type:'ETMP'}
    else return {envVal: ghub[0].data.hum, type:'TMP'}
}

function getEnvTemp(thubs: [],ghub: [{data:{temp:number}}]){
    let envVal = getEnvTempThubs(thubs)
    if (envVal != 0) return  {envVal,type:'ERH'}
    else return {envVal: ghub[0].data.temp, type:'RH'}
}

function getEnvHumThubs(thubs: []){
    let ans = 0
    try{
        let rowAvg: Array<number> = []
        let rowLength = thubs.length
        thubs.map((row: [])=>{        
            let tableAvg: Array<number> = []
            let tableLength = row.length
            row.map((table: any)=>{
                if (!table.ecs || table.ecs?.env_h?.length === 0 || table.message === "table failure"){
                    tableLength--
                    
                    return
                }
                
            let temps = table.ecs?.env_h?.filter(((tmp:number)=> {return tmp > 0}))
            
            if (temps?.length > 0){
                const avg = getEverage(temps)
                tableAvg.push(avg)
            }
            
        })
        if (tableAvg?.length > 0){
            rowAvg.push(getEverage(tableAvg))
        } else rowLength--    
       })   
       if (rowAvg?.length > 0){
           ans = Math.round(getEverage(rowAvg,rowLength) * 10) / 10 
       }
    }
    catch (err){
        console.error(err);
    }
    finally{
        return ans 
    }
}
function getEnvTempThubs(thubs: []){
    let ans = 0
    try{
        let rowAvg: Array<number> = []
        let rowLength = thubs.length
        thubs.map((row: [])=>{        
            let tableAvg: Array<number> = []
            let tableLength = row.length
            row.map((table: any)=>{
                if (!table.ecs || table.ecs?.env_t?.length === 0 || table.message === "table failure"){
                    tableLength--
                    
                    return
                }
                
            let temps = table.ecs?.env_t?.filter(((tmp:number)=> {return tmp > 0}))
            
            if (temps?.length > 0){
                const avg = getEverage(temps)
                tableAvg.push(avg)
            }
            
        })
        if (tableAvg?.length > 0){
            rowAvg.push(getEverage(tableAvg))
        } else rowLength--    
       })   
       if (rowAvg?.length > 0){
           ans = Math.round(getEverage(rowAvg,rowLength) * 10) / 10 
       }
    }
    catch (err){
        console.error(err);
    }
    finally{
        return ans 
    }
}

function getEnvGhubs(ghub: []){

}

function getSoilTemp(thubs: []): number{
    let ans = 0
    try{
        let rowAvg: Array<number> = []
        let rowLength = thubs.length
        thubs.map((row: [])=>{        
            let tableAvg: Array<number> = []
            let tableLength = row.length
            row.map((table: any)=>{
                if (!table.ecs || table.ecs.temp.length === 0 || table.message === "table failure"){
                    tableLength--
                    return
                }
            let temps = table.ecs.temp.filter(((tmp:number)=> {return tmp > 0}))
            
            if (temps.length > 0){
                const avg = getEverage(temps)
                tableAvg.push(avg)
            }
            
        })
        if (tableAvg.length > 0){
            rowAvg.push(getEverage(tableAvg))
        } else rowLength--    
       })   
       if (rowAvg.length > 0){
           ans = Math.round(getEverage(rowAvg,rowLength) * 10) / 10 
       }
    }
    catch (err){
        console.error(err);
    }
    finally{
        return ans 
    }
}

function getEverage(array: number[],length = array.length): number {
    if (array?.length <= 0) {
        throw new Error(`array length is ${array.length}`);
    }
    return array.reduce((a: number, b: number) => a + b) / length;
  }

function getFan(cgable: {fsw:Array<number>, frpm:Array<number>}){
    const fansOk = cgable.fsw.filter((fan:number,idx:number)=> {
        return fan === 1 && cgable.frpm[idx] > 0
    })
    
    if (fansOk.length > 0 ) return 1
    else return -1
}
