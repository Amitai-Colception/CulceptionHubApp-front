import { Component } from 'react'


import {Header} from '../cmps/Header'
import { Gable } from '../cmps/dashboard/Gable'


export class Dashboard extends Component {
    
    
    
    render() {

        return (
            <section>
                <Header></Header>
                <h1>dashboard</h1>
                {[2,3,4,5,6,7,8,9].map((num)=>
                    <Gable key={num.toString()} gable={num}></Gable>
                )}
            </section>
        )
    }
}