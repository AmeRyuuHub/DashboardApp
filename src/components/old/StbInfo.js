import React from 'react';
import Menu from './Menu';
import MacForm from './Formold';
import Info from './Info';
import Ping from './Ping';
import DVBC from './DVBC';
import {Tabs} from 'react-bootstrap';
import Tab from'react-bootstrap/Tab';
import './StbInfo.css';
import datap from './../../pics/data.png';


class StbInfo extends React.Component  {
    constructor(props){
       super(props);
        this.state = {
            dt_info:undefined,
            dt_ping:undefined,
            dt_dvbc:undefined,
            error: undefined,
            maccpe:undefined,
            selected:undefined,
            pingFlag:false,
            dvbcFlag:false

        };
       this.handleSelect=this.handleSelect.bind(this);
        this.getPing=this.getPing.bind(this);
    }


    getInfo = async (e) => {

        e.preventDefault();
        const mac = e.target.elements.mac.value;
        const api_call_info = await fetch(`http://77.120.3.147/api_tv/?pts.dbgetinfo={}&mac=${mac}`);
        const data_info = await api_call_info.json();
        console.log(data_info);
        if (mac) {
            this.setState({
                dt_info: data_info.response,
                error: '',
                maccpe:mac,
                dt_ping:undefined,
                dt_dvbc:undefined,
                pingFlag:false,
                dvbcFlag:false
            });

        } else {
            this.setState({
                dt_info: undefined,
                error: 'AAAAAAAAAD',
                maccpe:"hollyShit",
            });
        }
        console.log(this.state.maccpe);
    };

    getDVBC = async () => {
        const api_call_dvbc = await fetch(`http://77.120.3.147/api_tv/?pts.dbgetn={}&mac=${this.state.maccpe}`);
        const data_dvbc = await api_call_dvbc.json();
        console.log(data_dvbc);
        if (this.state.maccpe) {
            this.setState({
                dt_dvbc: data_dvbc.response,
                error: '',
                dvbcFlag:!this.state.dvbcFlag
            });
        } else {
            this.setState({
                dt_dvbc: undefined,
                error: 'AAAAAAAAAAAAAAAAAAAAAAAA HEEEELPPPP',
            });
        }
    };

        getPing = async () => {
            const api_call_pings = await fetch(`http://77.120.3.147/api_tv/?pts.dbgetping={}&mac=${this.state.maccpe}`);
            const data_pings = await api_call_pings.json();
            console.log(data_pings);
            if (this.state.maccpe) {
                this.setState({
                    dt_ping: data_pings.response,
                    error: '',
                    pingFlag:!this.state.pingFlag
                });
            } else {
                this.setState({
                    dt_ping: undefined,
                    error: 'AAAAAAAAAAAAAAAAAAAAAAAA HEEEELPPPP',
                });
            }

    };

        handleSelect = async (z) => {
            if (z ==='ping'){
                (!this.state.pingFlag)? this.getPing(): console.log('API ping already used')
            } else if (z ==='dvbc'){
                (!this.state.dvbcFlag)? this.getDVBC(): console.log('API dvbc already used')
            } else { console.log('home')}


        };
    /*<button type="submit" onClick={this.getPing} > Ping View </button>*/ //Tab object
    render() {

        return (



            
            <div className="bodyReact">
                <Menu />
                    <MacForm getInfo={this.getInfo}/>

                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" aria-selected="true" onSelect={this.handleSelect}>
                        <Tab eventKey="home" title="Home">
                            <Info
                                dt_info={this.state.dt_info}
                                error={this.state.error}
                            />
                        </Tab>
                        <Tab eventKey="ping" title="Ping" >
                            <Ping
                                dt_ping={this.state.dt_ping}
                                error={this.state.error}
                            />
                        </Tab>
                        <Tab eventKey="dvbc" title="DVB-C">
                            <DVBC
                                dt_dvbc={this.state.dt_dvbc}
                                error={this.state.error}
                            />
                        </Tab>
                        <Tab eventKey="chart" title="Chart">
                            <DVBC

                                error={this.state.error}

                            />
                            <img src={datap}  alt="alt"/>
                        </Tab>
                    </Tabs>

               
            </div>

        )
    }
}

export default StbInfo;
