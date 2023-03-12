import { Component } from 'react'
export class Soil extends Component {

    render() {
        
        return (
            <section className='dasboard-sensor soil-container'>
                <svg id="sub_temp_ok" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.35 141.35"
                width="100%">
                <defs>
                <linearGradient id="linear-gradient-sub-ok" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="hsla(88, 100%, 34%, 1)" />
                    <stop offset="1" stopColor="hsla(98, 100%, 44%, 1)" />
                </linearGradient>
                </defs>
                <circle className="cls-1" cx="70.68" cy="70.68" r="67.68" />
                <path className="cls-2" d="M72.43,35.1v-17a3,3,0,0,0-3-3h-.09a3,3,0,0,0-3,3V35.21a5.79,5.79,0,1,0,6.11-.11Z" />
                <path className="cls-3" d="M70.48,36.63v-12h-2v12a3.65,3.65,0,1,0,2,0Z" />
                <path className="cls-4" d="M72.62,35.4s3.75-7.48,11.31-9.35" />
                <path className="cls-4" d="M75.34,29.81S72.89,18.39,91.81,22c0,0-5,16.53-14.67,9.52" />
                <text className="cls-5" transform="translate(70 88.55)" textAnchor="middle">°c</text>
                <text className="cls-7" transform="translate(42.81 116.36)">SUB TMP</text>
            </svg>
            </section>
        )
    }
}