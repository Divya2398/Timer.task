import React, { useState } from "react";
import "./Timer.css";
import { FaRegPlayCircle, FaPauseCircle, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { connect } from "react-redux";
import * as action from "../Store/action";
import { useSelector } from "react-redux";
const Timer = (props) => {
  const [stopbutton, setStopButton] = useState(false);
  //   const [result, setResult] = useState(false);
  const [starttime, setStarttime] = useState("");
  const [stoptime, setStopTime] = useState("");
  const { result } = useSelector((state) => state.timer);
  const date = new Date();
  const gettime = moment(date).format("DD-MM-YYYY HH:mm:ss A");

  const handlestart = () => {
    // const data = {
    //   startTime: gettime,
    //   stopTime: "",
    // };
    setStarttime(gettime);
    setStopButton(!stopbutton);
    props.starttimer(gettime);
    //props.starttimer(data);
    setStopTime("");
  };

  const handleStop = () => {
    setStopTime(gettime);
    setStopButton(!stopbutton);
    const stopTime = gettime;
    props.endtimer(stopTime);
    setStarttime("");
  };
  console.log("start", starttime);
  console.log("stop", stoptime);
  const startmap = props.startlist;
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row timer-head">
          <p className="text-center">Timer</p>
        </div>
        <div className="timer-body w-100">
          <div className="timer-icon-block">
            <div>
              <div className="d-flex justify-content-center pt-5">
                <FaCalendarAlt className="icon-cal" />
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <div className="show-time d-inline-block p-3 rounded-pill">
                  <p className="text-center m-0">
                    {starttime ? starttime : stoptime}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {!stopbutton ? (
              <button className="btn btn-primary" onClick={handlestart}>
                <span className="me-1">
                  <FaRegPlayCircle />
                </span>
                Start
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleStop}>
                <span className="me-1">
                  <FaPauseCircle />
                </span>
                Stop
              </button>
            )}
          </div>

          <div className="timer-result-block">
            <p className="result-head">RESULTS</p>
            <div>
              {!result ? (
                <p className="no-result">NO RESULTS FOUND</p>
              ) : (
                <div>
                  <table className="table table-warning table-striped">
                    <thead>
                      <tr>
                        <th className="text-center">Start Time</th>
                        <th className="text-center">End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {props.startlist.map((time, i) => {
                        return (
                          <tr>
                            <td>{time}</td>

                            {props.stoplist.map((time) => {
                              return <td>{time}</td>;
                            })}
                          </tr>
                        );
                      })} */}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    starttimer: (timedata) => dispatch(action.starttimer(timedata)),
    endtimer: (timedata) => dispatch(action.endtimer(timedata)),
  };
};
const mapStateToProps = (state) => {
  return {
    startlist: state.timer.startTime,
    stoplist: state.timer.stopTime,
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Timer);
