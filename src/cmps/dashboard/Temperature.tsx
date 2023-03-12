import { Component } from 'react'

export class Temperature extends Component {

    render() {
        
        return (
            <section className='temp-container dasboard-sensor'>
                <svg id="temp_ok"  data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.35 141.35"
                    width="100%">
                    
                    <linearGradient id="linear-gradient-tmp-ok" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                        3395.89 5978.1
                        <stop offset="0" stopColor="hsla(88, 100%, 34%, 1)" />
                        <stop offset="1" stopColor="hsla(98, 100%, 44%, 1)" />
                    </linearGradient>
                    
                    <circle className="cls-1" cx="70.68" cy="70.68" r="67.68" />
                    <path className="cls-2"
                    d="M74.28,36.08V15.53a3.65,3.65,0,0,0-3.64-3.64h-.12a3.65,3.65,0,0,0-3.64,3.64V36.2a7,7,0,1,0,7.4-.12Z"
                    transform="translate(0 0)" />
                    <path className="cls-3" d="M71.92,37.92V23.38H69.43V37.92a4.42,4.42,0,1,0,2.49,0Z" transform="translate(0 0)" />
                    <text
                    className="cls-4" transform="translate(70 88.55)" textAnchor="middle">°c</text>
                    <text  className="cls-6" transform="translate(57.27 116.36)">TMP</text>
                    <text  className="cls-6" transform="translate(54 116.36)">ETMP</text>
                </svg>
            </section>
        )
    }
}