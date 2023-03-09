import { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import logo from '../assets/imgs/logo192.png'
export class Header extends Component {

    render() {
        
        return (
            <section className='app-header flex space-between'>
                <div>
                    <img src={logo} className="" alt="" />
                </div>
                <div className='flex space-between'>
                    <NavLink exact to="/debrief" >Debrief</NavLink>
                    <NavLink to="/dashboards" >Dashboard</NavLink>
                    <NavLink to="/admin" >Admin</NavLink>
                    <NavLink to="/admin" >LogOut</NavLink>
                </div>
                
            </section>
        )
    }

}