import "../css/base.css"
import TodayTodoSection from "./todayTodoSection";

function TodayCard(props) {
    const importance = props.importance;
    const pjtName = props.pjtName;
    const taskName = props.taskName;
    const todoList = props.toDoList;

    let impImgRes = "img/today/ic_importance_low_black.png"
    if (importance === 3) {
        impImgRes = "img/today/ic_importance_high_black.png";
    }
    if (importance === 2) {
        impImgRes = "img/today/ic_importance_mid_black.png";
    }

    return (
        <div className="flexCenter">
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

                    <div className="mt20">
                        {
                            todoList.map(todo => (
                                <TodayTodoSection content={todo.content} key={todo.id}/>
                            ))
                        }
                    </div>

                    <div className="mt15 w100p flexAlignHorizon pt5 pd5 borderBtmGray">
                        <input type="text" className="bgTrans w100p inputBorderBottom floatL" placeholder="추가할 액션 입력하기"/>
                        <img className="w10 h10 floatR mr10" src="img/today/ic_add.png"></img>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TodayCard;