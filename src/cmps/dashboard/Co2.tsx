import { Component } from 'react'
export class Co2 extends Component {

    render() {
        
        return (
            <section className='co2-container dasboard-sensor'>
                <svg id="co2_ok" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 141.35 141.35" width="100%">
                    <defs>
                    <linearGradient id="linear-gradient-75" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="hsla(219, 30%, 40%, 1)" />
                        <stop offset="1" stopColor="hsla(219, 27%, 45%, 1)" />
                    </linearGradient>
                    </defs>
                    <path className="cls-1" d="M144,138.35" />
                    <circle className="cls-2" cx="70.68" cy="70.68" r="67.68" />
                    <path className="cls-3"
                    d="M91.48,35.07c0-.19,0-.38,0-.58a9.08,9.08,0,0,0-9.08-9.09,7.75,7.75,0,0,0-1.19.09,12.48,12.48,0,0,0-23.35,0,7.62,7.62,0,0,0-1.18-.09,9.09,9.09,0,0,0-9.09,9.09c0,.27,0,.53,0,.8a4.43,4.43,0,0,0,2.18,8.29h39.9a4.44,4.44,0,0,0,1.75-8.51Z" />
                    <path className="cls-4" d="M66.18,33.15V27.64a.49.49,0,0,0-.49-.49h-2a.48.48,0,0,0-.48.49v5.51H60.33l4.35,6,4.34-6Z" />
                    <path className="cls-4" d="M73.18,33.15v5.52a.47.47,0,0,0,.48.48h2a.48.48,0,0,0,.49-.48V33.15H79l-4.34-6-4.35,6Z" />
                    <text className="cls-5" transform="translate(70 88.55)" textAnchor="middle"></text>
                    <text className="cls-6" transform="translate(58.12 116.36)">CO</text>
                    <text className="cls-6" transform="translate(78 119)">2</text>
                </svg>
            </section>
        )
    }
}