import "../css/base.css";
import "./todayTime.css"

function TodayTime(props) {
    const time = +props.time;
    const imgRes = "img/today/" + ((time > 1800) ? "ic_moon_30.png" : "ic_sun_30.png");
    const txtRes = props.startTime + "-" + props.endTime;

    return (<div>
        <div className="mt15 flexCenter">
            <img className="w30" src={imgRes}>
            </img>
        </div>
        <div className="w100p fc100p w100p flexCenterAlignHorizon">
            <div className="zIndex2 fBold fc_00">
                {txtRes}
            </div>
            <div className="w100 h10 bgPurple rad4 timeDecoBox zIndex1 opa20">
            </div>
        </div>
        <div className="flexCenter">
        </div>
    </div>);
}

export default TodayTime;