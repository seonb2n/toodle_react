import {useState} from "react";

function TodayTodoSection(props) {
    const [completed, setCompleted] = useState(props.completed);

    const onComplete = (event) => {
        setCompleted(!completed);
    };

    return (
        <div className="w100p h100p flex">
            <div className="bgMidPurple mt5 rad4 pt5 pd5 fs14p h25 w80p mra">
                <div className="flexAlignHorizon h100p w100p">
                    <img className="ml10 mr5" src="img/today/ic_action.png"></img>
                    <div className={completed ? "w80p fc_lgr" : "w80p"}>
                        <div className={completed ? "canceled_line" : "canceled_line un_visible"}></div>
                        {props.content}
                    </div>
                </div>
            </div>
            <div onClick={onComplete} className="bgMidPurple mt5 rad4 pt5 pd5 w35 h25 flexCenter">
                <img id="doneCheckImg" src="img/today/ic_todo_done.png" className={completed ? "w50p bgTrans" : "w50p bgTrans un_visible"}>
                </img>
            </div>
        </div>
    );
}

export default TodayTodoSection;