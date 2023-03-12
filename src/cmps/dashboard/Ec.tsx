import { Component } from 'react'
export class Ec extends Component {

    render() {
        
        return (
            <section className='dasboard-sensor ec-container'>
                <svg id="ec_ok" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 141.35 141.35" width="100%">
                    <defs>
                    <linearGradient id="linear-gradient-ec-ok" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="hsla(248, 100%, 72%, 1)" />
                        <stop offset="1" stopColor="hsla(248, 100%, 86%, 1)" />
                    </linearGradient>
                    </defs>
                    <path className="cls-1" d="M15.88,138.35" transform="translate(0 0)" />
                    <path className="cls-1" d="M15.88,131.35" transform="translate(0 0)" />
                    <path className="cls-1" d="M7.76,131.57" transform="translate(0 0)" />
                    <circle className="cls-2" cx="70.68" cy="70.68" r="67.68" />
                    <path className="cls-3" d="M87.11,35.33a7.52,7.52,0,1,1-15,0c0-4.16,7.52-20.2,7.52-20.2S87.11,31.17,87.11,35.33Z"
                    transform="translate(0 0)" />
                    <polygon className="cls-4" points="67.23 25.96 62 26.99 65.45 9.81 52.06 32.02 57.29 30.98 53.84 48.16 67.23 25.96" />
                    <text className="cls-5" transform="translate(70 88.55)" textAnchor="middle">1</text><text
                    className="cls-6" transform="translate(62.39 116.36)">EC</text>
                </svg>
            </section>
        )
    }
}