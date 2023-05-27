import TodayService from "../service/TodayService";
import ActionDto from "../dto/ActionDto";

export default function AddActionInput(props) {

    const actionListState = props.actionListState;
    const setActionListState = props.setActionListState;
    const myInputId = props.myInputId;

    const onAddToDoBtn = (event) => {
        const newId = TodayService.generateUUID();
        const content = document.getElementById(myInputId).value;
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
            setActionListState([...actionListState, newToDo]);
            document.getElementById("addToDoInput").value = "";

        }
    }

    return (
        <div>
            <div className="mt15 w100p h25 flexAlignHorizon pt5 pd5 borderBtmGray">
                <input type="text" id={myInputId} className="bgTrans w100p inputBorderBottom floatL"
                       placeholder="추가할 액션 입력하기"/>
                <img className="w10 h10 floatR mr10" onClick={onAddToDoBtn} src="img/today/ic_add.png"></img>
            </div>
        </div>
    );

}