import { Component } from 'react'
export class Soil extends Component <{tmp:number}> {

    render() {
        const {tmp}:any = this.props
        return (
            <section>
                <div className='dasboard-sensor soil-container'>
                    {(tmp > 20 && tmp < 30) ?
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
                    <text className="cls-5" transform="translate(70 88.55)" textAnchor="middle">{tmp}°c</text>
                    <text className="cls-7" transform="translate(42.81 116.36)">SUB TMP</text>
                </svg>
                : null}
                </div>

                <div className='dasboard-sensor soil-container'>
                    {(tmp < 20 && tmp > 0) ?
                    <svg id="sub_temp_cold"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 141.35 141.35" width="100%">
                        <defs>
                        <linearGradient id="linear-gradient-sub-cold" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="hsla(194, 100%, 53%, 1)" />
                            <stop offset="1" stop-color="hsla(176, 100%, 53%, 1)" />
                        </linearGradient>
                        </defs>
                        <circle className="cls-1" cx="70.68" cy="70.68" r="67.68">
                        {/* <animate *ngIf="data < 16" attributeName="opacity" dur="1s" keyTimes="0; 0.25; 0.5; 0.75; 1"
                            values="1; 0.7; 0.2; 0.7; 1;" repeatCount="indefinite" /> */}
                        </circle>
                        <path className="cls-2" d="M72.43,35.1v-17a3,3,0,0,0-3-3h-.09a3,3,0,0,0-3,3V35.21a5.79,5.79,0,1,0,6.11-.11Z" />
                        <path className="cls-3" d="M70.48,36.63v-12h-2v12a3.65,3.65,0,1,0,2,0Z" />
                        <path className="cls-4" d="M72.62,35.4s3.75-7.48,11.31-9.35" />
                        <path className="cls-4" d="M75.34,29.81S72.89,18.39,91.81,22c0,0-5,16.53-14.67,9.52" /><text className="cls-5"
                        transform="translate(70 88.55)" text-anchor="middle">{tmp}°c</text><text className="cls-7"
                        transform="translate(42.81 116.36)">SUB TMP</text>
                    </svg>
                    :null}
                </div>

                <div className='dasboard-sensor soil-container'>
                    {(tmp > 30) ?
                    <svg id="sub_temp_hot" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 141.35 141.35" width="100%">
                        <defs>
                        <linearGradient id="linear-gradient-sub-hot" gradientTransform="rotate(90)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="hsla(0, 100%, 39%, 1)" />
                            <stop offset="1" stop-color="hsla(0, 100%, 61%, 1)" />
                        </linearGradient>
                        </defs>
                        <circle className="cls-1" cx="70.68" cy="70.68" r="67.68">
                        {/* <animate *ngIf="data > 35 " attributeName="opacity" dur="1s" keyTimes="0; 0.25; 0.5; 0.75; 1"
                            values="1; 0.7; 0.2; 0.7; 1;" repeatCount="indefinite" /> */}
                        </circle>
                        <path className="cls-2" d="M72.43,35.1v-17a3,3,0,0,0-3-3h-.09a3,3,0,0,0-3,3V35.21a5.79,5.79,0,1,0,6.11-.11Z" />
                        <path className="cls-3" d="M70.48,36.63v-12h-2v12a3.65,3.65,0,1,0,2,0Z" />
                        <path className="cls-4" d="M72.62,35.4s3.75-7.48,11.31-9.35" />
                        <path className="cls-4" d="M75.34,29.81S72.89,18.39,91.81,22c0,0-5,16.53-14.67,9.52" /><text className="cls-5"
                        transform="translate(70 88.55)" text-anchor="middle">{tmp}°c</text><text className="cls-7"
                        transform="translate(42.81 116.36)">SUB TMP</text>
                        {/* <!-- <text className="cls-7-1" transform="translate(70 57)" text-anchor="middle"
                        fill="hsl(35, 100%, 70%)">{{total_percent|number:'1.0-0'}}%</text> --> */}
                    </svg>
                    :null}
                </div>

                <div className='dasboard-sensor soil-container'>
                    {(tmp === 0) ?
                    <svg id="sub_temp_off" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 141.35 141.35" width="100%">
                        <circle className="cls-1" cx="70.68" cy="70.68" r="67.68" />
                        <path className="cls-2" d="M72.43,35.1v-17a3,3,0,0,0-3-3h-.09a3,3,0,0,0-3,3V35.21a5.79,5.79,0,1,0,6.11-.11Z" />
                        <path className="cls-3" d="M70.48,36.63v-12h-2v12a3.65,3.65,0,1,0,2,0Z" />
                        <path className="cls-4" d="M72.62,35.4s3.75-7.48,11.31-9.35" />
                        <path className="cls-4" d="M75.34,29.81S72.89,18.39,91.81,22c0,0-5,16.53-14.67,9.52" /><text className="cls-5"
                        transform="translate(42.81 116.36)">SUB TMP</text>
                    </svg>
                    :null}
                </div>
            </section>
        )
    }
}