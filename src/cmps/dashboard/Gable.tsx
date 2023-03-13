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


export class Gable extends Component <{gable: number}> {

    state: {gableData:any} = {
        gableData: {}
    }

    componentDidMount(){
        this.updateDashboard()
        // setInterval(this.updateDashboard,1000)
    }

    updateDashboard = async ()=>{
        let data = await dashboardService.gableData(this.props.gable)    
        this.setState({ gableData: data });

    }

    render() {
        const {fan,spinner,soilTemp,envTemp,humidity} = this.state.gableData

        // const tmp: Number = thubs[0][0].gid
        return (
            <section className=''>
                <h4>GABLE {this.props.gable}</h4>
                <section className='gable-container'>
                    <Fan fan={fan}></Fan>
                    <Spinner spinner={spinner}></Spinner>
                    <Temperature tmp={envTemp}></Temperature>
                    <Humidity humidity={humidity}></Humidity>
                    <Co2></Co2>
                    <Light></Light>
                    <Soil tmp={soilTemp}></Soil>
                    <Ec></Ec>
                </section>
                    {/* <div>{JSON.stringify(thubs)}</div> */}
                    {/* <div>{(humidity?.envVal)? humidity.envVal : null}</div> */}
                    
            </section>
        )} 
}