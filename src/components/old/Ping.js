import React from 'react';
import Moment from 'react-moment';
Moment.globalFormat = 'D MMM YYYY HH:mm';



const Ping  = (props) => (
    <table className="table table-bordered tbs" >

        {
            props.dt_ping &&
           // props.id && props.is_platform && props.rtt && props.ts &&
            <thead>
            <tr>
                <th scope="col">MAC</th>
                <th scope="col">Platform/Router</th>
                <th scope="col">Value</th>
                <th scope="col">Date/Time</th>
            </tr>
            </thead>
        }

        {
            props.dt_ping &&
            //props.id && props.is_platform && props.rtt && props.ts &&
            <tbody>
            {props.dt_ping.map((r) => (
                <tr key={r.id}>
                    <td>{r.mac}</td>
                    <td>{r.is_platform <= 0 ? 'Router' : 'Platform'}</td>
                    <td>{r.rtt/1000} ms</td>
                    <td><Moment unix>{r.ts.substring(0, 10)}</Moment></td>
                </tr>
            ))
            }
            </tbody>
        }
    </table>
);

export default Ping;