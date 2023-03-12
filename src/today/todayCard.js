import "../css/base.css"
import TodayTodoSection from "./todayTodoSection";
import {useState} from "react";
import AuthenticationService from "../service/AuthenticationService";
import TodayService from "../service/TodayService";
import ActionDto from "../dto/ActionDto";

function TodayCard(props) {
    const importance = props.importance;
    const pjtName = props.pjtName;
    const taskName = props.taskName;
    const [toDoList, setToDoList] = useState(props.toDoList);

    let impImgRes = "img/today/ic_importance_low_black.png"
    if (importance === "HIGH") {
        impImgRes = "img/today/ic_importance_high_black.png";
    }
    if (importance === "MIDDLE") {
        impImgRes = "img/today/ic_importance_mid_black.png";
    }

    const onAddToDoBtn = (event) => {
        const newId = TodayService.generateUUID();
        const content = document.getElementById("addToDoInput").value;
        if (!content) {
            alert("값을 입력해야 추가할 수 있습니다.")
        } else {
            const data = {
                "actionId" : newId,
                "content"  : content,
                "dueDate"  : new Date(),
                "isDone"   :  false
            };
            const newToDo = new ActionDto(data);
            setToDoList([...toDoList, newToDo]);
            document.getElementById("addToDoInput").value = "";

        }
    }

    return (
        <div className="flexCenter ml10 mr10">
            <div className="rad16 bgLightPurple card_wrapper w270 h360">
                <div className="h100p ml15 mr15">
                    <div className="w100p h70">
                        <div className="mt15 w50 h50 bgPurple rad10 flexCenterAlignHorizon floatL">
                            <img src={impImgRes}></img>
                        </div>

                        <div className="mt15 w50 h25 bgMidPurple floatR rad16 flexCenter fs12p">
                            <img src="img/today/ic_task_edit.png"/>
                            수정
                        </div>
                    </div>

                    <div className="mt15 fc_pp fBold">
                        {pjtName}
                    </div>

                    <div className="fc_00 fs18p fBold">
                        {taskName}
                    </div>

                    <div className="vertical_scroll_view h150">
                        <div className="mt20">
                            {
                                toDoList.map(todo => (
                                    <TodayTodoSection content={todo.content} key={todo.actionId} completed={todo.isDone}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt15 w100p h25 flexAlignHorizon pt5 pd5 borderBtmGray">
                        <input type="text" id="addToDoInput" className="bgTrans w100p inputBorderBottom floatL"
                               placeholder="추가할 액션 입력하기"/>
                        <img className="w10 h10 floatR mr10" onClick={onAddToDoBtn} src="img/today/ic_add.png"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayCard;