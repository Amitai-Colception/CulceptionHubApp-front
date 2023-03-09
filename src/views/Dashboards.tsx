import { Component } from 'react'
import { dashboardService } from '../services/dashboard/dashboardService'

import {Header} from '../cmps/Header'
import { Gable } from '../cmps/dashboard/Gable'
import { Spinner } from '../cmps/dashboard/Spinner'
import { Temperature } from '../cmps/dashboard/Temperature'

export class Dashboard extends Component {
    
    state: {culceptionData:any} = {
        culceptionData: {}
    }

    componentDidMount(){
        this.updateDashboard()
        setInterval(this.updateDashboard,5000)
    }

    updateDashboard = async ()=>{
        let data = await dashboardService.gableData()
        this.setState({ culceptionData: data });
    }
    
    render() {

        return (
            <section>
                

                <Header></Header>
                <h1>dashboard</h1>
                <Gable></Gable>
                <Spinner></Spinner>
                <Temperature></Temperature>
                <div>{JSON.stringify(this.state.culceptionData, null, 2)}</div>
            
            </section>
        )
    }
}