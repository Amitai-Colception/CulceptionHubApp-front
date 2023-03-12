import { Component } from 'react'


import {Header} from '../cmps/Header'
import { Gable } from '../cmps/dashboard/Gable'


export class Dashboard extends Component {
    
    
    
    render() {

        return (
            <section>
                

                <Header></Header>
                <h1>dashboard</h1>
                <Gable></Gable>
                
                
            
            </section>
        )
    }
}