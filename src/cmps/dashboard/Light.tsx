import { Component } from 'react'
export class Light extends Component {

    render() {
        
        return (
            <section className='dasboard-sensor light-container'>
                <svg id="ppfd_ok"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 141.35 141.35" width="100%">
                    <defs>
                    <linearGradient id="linear-gradient-ppfd-ok" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="hsla(52, 100%, 57%, 1)" />
                        <stop offset="1" stopColor="hsla(58, 100%, 62%, 1)" />
                    </linearGradient>

                    <filter id="f1" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                        <feOffset result="offOut" in="SourceGraphic" dx="1" dy="1" />
                        <feBlend in="SourceGraphic" in2="offOut" mode="normal" /> 
                    </filter>

                    </defs>
                    <circle className="cls-1" cx="70.68" cy="70.68" r="67.68" />
                    <circle  cx="70.68" cy="70.68" r="59" strokeWidth="2" stroke="hsl(35, 100%, 70%)" fill="none" filter="url(#f1)"
                    transform="translate(0 141.5), rotate(-90)"  />

                    <path className="cls-2" d="M59.33,43.85a12,12,0,0,1,24,0" />
                    <line className="cls-3" x1="71.04" y1="26.2" x2="71.04" y2="17.14" />
                    <line className="cls-3" x1="62.37" y1="28.52" x2="57.84" y2="20.68" />
                    <line className="cls-3" x1="56.02" y1="34.87" x2="48.18" y2="30.34" />
                    <line className="cls-3" x1="53.7" y1="42" x2="44.65" y2="42" />
                    <line className="cls-3" x1="88.38" y1="42" x2="97.43" y2="42" />
                    <line className="cls-3" x1="86.05" y1="34.87" x2="93.89" y2="30.34" />
                    <line className="cls-3" x1="79.71" y1="28.52" x2="84.23" y2="20.68" /><text className="cls-4"
                    transform="translate(70 88.55)" textAnchor="middle"></text>
                    <text  className="cls-5" textAnchor="middle" transform="translate(70 116.36)">PPFD</text>
                    <text  className="cls-5" textAnchor="middle" transform="translate(70 116.36)">G-PPFD</text>
                    <text className="cls-5" transform="translate(70 57)" textAnchor="middle">100</text> 
                    <text className="cls-5-1" transform="translate(70 57)" textAnchor="middle"
                    fill="hsl(35, 100%, 70%)">%</text>
                    
                </svg>

            </section>
        )
    }
}