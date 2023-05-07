import "../../css/base.css";
import "./editTask.css";

function EditTask(props) {

    // const taskName = props.taskName;
    // const projectList = props.projectList;
    // const selectedProject = props.selectedProject;
    // const importance = props.importance;
    // const startDay = props.startDay;
    // const endDay = props.endDay;
    // const [actionList, setActionList] = useState(props.actionList);


    return (
        <div>
            <div className="h50 flex">
                <div onClick={props.onEditCancelBtnClick} className="positionAbs ml20 w70 fs14p">
                    취소
                </div>
                <div className="w100p flexCenter fs14p fBold">
                    태스크 수정
                </div>
            </div>
        </div>
    );
}

export default EditTask;