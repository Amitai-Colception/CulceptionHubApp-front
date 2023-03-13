import { Component } from 'react'
export class Humidity extends Component <{humidity:{envVal:number,type:string}}>{

    render() {
        const {humidity} = this.props
        return (
            <section className='humidity-container dasboard-sensor'>
                <svg id="humidity_ok" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.35 141.35" width="100%">
                    <defs>
                        <linearGradient id="linear-gradient-h-ok" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse" width="100%">
                            <stop offset="0" stopColor="hsla(102, 100%, 43%, 1)" />
                            <stop offset="1" stopColor="hsla(149, 100%, 55%, 1)" />
                        </linearGradient>
                        </defs>
                        <circle className="cls-1" cx="70.68" cy="70.68" r="67.68" />
                        <path className="cls-2" d="M47.41,44.47s9.51-8,21.23,0,20.71-1.78,20.71-1.78" />
                        <path className="cls-2" d="M47.41,38.47s9.51-8,21.23,0,20.71-1.78,20.71-1.78" />
                        <path className="cls-3" d="M75.59,26.56a4.92,4.92,0,0,1-9.83,0c0-2.71,4.92-13.19,4.92-13.19S75.59,23.85,75.59,26.56Z" />
                        <text className="cls-4" transform="translate(70 88.55)" textAnchor="middle">{humidity?.envVal}%</text>
                        <text  className="cls-5" transform="translate(61.47 116.36)">{humidity?.type}</text>
                        <text  className="cls-5" transform="translate(58 116.36)"></text>
                </svg>
            </section>
        )
    }
}