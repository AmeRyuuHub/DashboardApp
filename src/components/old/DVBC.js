import React from 'react';
import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY HH:mm';

const DVBC  = (props) => (
    <table className="table table-bordered tbs">

        {
            props.dt_dvbc &&
            // props.id && props.is_platform && props.rtt && props.ts &&
            <thead>
            <tr>
                <th scope="col">MAC</th>
                <th scope="col">Frequency</th>
                <th scope="col">Quality</th>
                <th scope="col">Power</th>
                <th scope="col">MER</th>
                <th scope="col">Level</th>
                <th scope="col">SNR</th>
                <th scope="col">Modulation</th>
                <th scope="col">Date/Time</th>
            </tr>
            </thead>
        }

        {
            props.dt_dvbc &&
            //props.id && props.is_platform && props.rtt && props.ts &&
            <tbody>
            {props.dt_dvbc.map((f) => (
                <tr key={f.id}>
                    <td>{f.mac}</td>
                    <td>{f.frequency}</td>
                    <td className={f.quality <= 0 ? 'text-danger' : 'text-success'}>{f.quality}</td>
                    <td className={f.power <= 0 ? 'text-danger' : 'text-success'}>{f.power}</td>
                    <td className={f.ber > 0 ? 'text-danger' : 'text-success'}>{f.ber}</td>
                    <td className={f.level < 47 ? 'text-danger' : f.level >= 67 ? 'text-primary' : 'text-success'}>{f.level} dBµV</td>
                    <td className={f.snr < 30 ? 'text-danger' : f.snr < 32 ? 'text-warning' : 'text-success'}>{f.snr} dB</td>
                    <td>{Math.pow(2,f.modulation-1)} QAM</td>
                    <td><Moment unix>{f.ts.substring(0, 10)}</Moment></td>
                </tr>
            ))
            }
            </tbody>
        }
    </table>
);

export default DVBC;