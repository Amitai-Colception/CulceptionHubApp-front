import { Component } from 'react'
import { Fan } from './Fan'
import { Spinner } from './Spinner'
import { Temperature } from './Temperature'
import { Humidity } from './Humidity'
import { Co2 } from './Co2'
import { Light } from './Light'
import { Soil } from './Soil'
import { Ec } from './Ec'
import { dashboardService } from '../../services/dashboard/dashboardService'


export class Gable extends Component {

    state: {gableData:any} = {
        gableData: {}
    }

    componentDidMount(){
        this.updateDashboard()
        // setInterval(this.updateDashboard,1000)
    }

    updateDashboard = async ()=>{
        let data = await dashboardService.gableData()
        // console.log(data);
        
        this.setState({ gableData: data });

    }

    render() {
        const {fan,spinner,soilTemp} = this.state.gableData
    
        // const tmp: Number = thubs[0][0].gid
        return (
            <section className=''>
                <h4>GABLE (g2)</h4>
                <section className='gable-container'>
                    <Fan></Fan>
                    <Spinner></Spinner>
                    <Temperature></Temperature>
                    <Humidity></Humidity>
                    <Co2></Co2>
                    <Light></Light>
                    <Soil></Soil>
                    <Ec></Ec>
                </section>
                    <div>thubs:</div>
                    {/* <div>{JSON.stringify(thubs)}</div> */}
                    <div>{(fan)? fan : null}</div>
                    <div>{(spinner)? spinner : null}</div>
                    <div>{(soilTemp)? soilTemp : null}</div>
            </section>
        )} 
}