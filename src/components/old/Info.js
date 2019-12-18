import React from "react";
import Moment from "react-moment";
Moment.globalFormat = "D MMM YYYY HH:mm";

const Info = props => (
  <div className="row">
    {props.dt_info && (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className="card h-100">
          <div className="card-header p-1 justify-content-end" role="tab">
            <h5 className="mr-auto p-2 mb-0">Info</h5>
          </div>

          <div className="card-body p-1">
            <table className="table table-sm table-min mb-0">
              <tbody>
                <tr>
                  <td>MAC:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].mac}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Model:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].model}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Version:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].model !== "mobile"
                        ? parseInt(props.dt_info[0].version.substring(8, 14))
                        : props.dt_info[0].version}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Loader:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].loader}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>
                    <span className="badge badge-light">Hybrid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
    {props.dt_info && (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className="card h-100">
          <div className="card-header p-1 justify-content-end" role="tab">
            <h5 className="mr-auto p-2 mb-0">Status</h5>
          </div>

          <div className="card-body p-1">
            <table className="table table-sm table-min mb-0">
              <tbody>
                <tr>
                  <td>Online:</td>
                  <td>
                    <span
                      className={
                        props.dt_info[0].online <= 0
                          ? "badge badge-danger"
                          : "badge badge-success"
                      }
                    >
                      {props.dt_info[0].online <= 0 ? "Offline" : "Online"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Power:</td>
                  <td>
                    <span
                      className={
                        props.dt_info[0].online <= 0
                          ? "badge badge-danger"
                          : props.dt_info[0].power === "boot"
                          ? "badge badge-success"
                          : props.dt_info[0].power === "on"
                          ? "badge badge-success"
                          : "badge badge-danger"
                      }
                    >
                      {props.dt_info[0].online <= 0
                        ? "off"
                        : props.dt_info[0].power}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>HDMI:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].hdmi}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Platform:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].minerva}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Pin:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].pin <= 0
                        ? "1234"
                        : props.dt_info[0].pin}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
    {props.dt_info && (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className="card h-100">
          <div className="card-header p-1 justify-content-end" role="tab">
            <h5 className="mr-auto p-2 mb-0">Internet</h5>
          </div>

          <div className="card-body p-1">
            <table className="table table-sm table-min mb-0">
              <tbody>
                <tr>
                  <td>ExternalIP:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].ExternalIP}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>IpAddress:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].IpAddress}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>NetMask:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].NetMask}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>DnsServers (1|2):</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].DnsServer1 + " | "}
                      {props.dt_info[0].DnsServer2}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Ping Router|Platform:</td>
                  <td>
                    <span className="badge badge-light">
                      {props.dt_info[0].icmp_router / 1000 + "ms |"}{" "}
                      {props.dt_info[0].icmp_platform / 1000 + "ms"}{" "}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
    {props.error && <p className="tss_error">Error: {props.error}</p>}
  </div>
);

export default Info;
