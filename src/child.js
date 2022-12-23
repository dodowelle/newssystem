import React from 'react';
import childCss from './child.module.scss'
import axios from 'axios'
const child = () => {
    axios.get('/ajax/filterCinemas?ci=10&optimus_uuid=9DB8A980807411ED87479FE410B88832F32B211EAD5044E49B30B64C390434B1&optimus_risk_level=71&optimus_code=10').then(res => {
        console.log(res)
    })
    return (
        <div>
            <ul className={childCss.childnav}>
                <li>child111</li>
                <li>child222</li>
                <li>child333</li>
            </ul>
        </div>
    );
}

export default child;