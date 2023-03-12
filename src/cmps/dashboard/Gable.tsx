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
        setInterval(this.updateDashboard,5000)
    }

    updateDashboard = async ()=>{
        let data = await dashboardService.gableData()
        console.log(data);
        
        this.setState({ gableData: data.gable });
    }

    render() {
        const {thubs, ghub, cgable} = this.state.gableData
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
                    <div>{thubs[0][0].TTL}</div>
            </section>
        )} 
}