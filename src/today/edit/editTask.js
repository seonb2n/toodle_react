import "../../css/base.css";
import "./editTask.css";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CommonConverter from "../../common/commonConverter";
import EditAction from "./editAction";
import {Checkbox, Input} from "@mui/material";
import AddActionInput from "../../common/addActionInput";
import TaskDto from "../../dto/TaskDto";

function EditTask(props) {

    const [selectedProject, setSelectedProject] = useState(props.editData.pjtName);
    const [startDate, setStartDate] = useState(CommonConverter.convertJavaLocalDateTimeToReactDate(props.editData.startAt));
    const [endDate, setEndDate] = useState(CommonConverter.convertJavaLocalDateTimeToReactDate(props.editData.endAt));
    const [editTaskImportance, setEditTaskImportance] = useState(props.editData.importance)

    const [editActionDtoList, setEditActionDtoList] = useState(props.editData.actionList);

    const onChangeSelectedProject = (event) => {
        setSelectedProject(event.target.value);
    }


    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    // let editTaskImportance = ;
    const onSelectTaskImportanceBtnClick = (importance) => {
        setEditTaskImportance(importance);
    }

    const onCompleteBtnClick = () => {
        const taskDto = new TaskDto({
                taskId: props.editData.taskId,
                content: props.editData.content,
                importance: editTaskImportance,
                startAt: startDate,
                endAt: endDate,
                actionDtoSet: editActionDtoList
            }
        );
        props.onChangeEditToday(taskDto);
    }

    return (
        <div>
            <div className="h50 flex">
                <div onClick={props.onEditCancelBtnClick} className="positionAbs left0 ml20 w70 fs14p alignL">
                    취소
                </div>
                <div className="w100p flexCenter fs14p fBold">
                    태스크 수정
                </div>
                <div onClick={onCompleteBtnClick} className="positionAbs right0 mr20 w70 fs14p alignR">
                    완료
                </div>
            </div>
            <div className="taskEditMain">
                <div className="flex h50">
                    <div className="w70 fBold">
                        이름
                    </div>
                    <div className="h100p flexCenter">
                        <input defaultValue={props.editData.taskName} className="w250 h50p projectNameInput"
                               placeholder={props.editData.taskName}/>
                    </div>
                </div>

                <div className="flex h50 mt10">
                    <div className="w70 fBold">
                        소속
                    </div>
                    <div className="h100p flexCenter">
                        <Select
                            labelId="selectedProjectName"
                            id="selectedProjectName"
                            value={props.editData.pjtName}
                            label="selectedProjectName"
                            onChange={onChangeSelectedProject}
                        >
                            {props.projectData.map(project => (
                                <MenuItem key={project.projectId}
                                          value={project.projectName}>{project.projectName}</MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className="flex h50 mt10">
                    <div className="w70 fBold">
                        중요도
                    </div>
                    <div className="h100p flexCenter">
                        <div className="mt10 flex">
                            <div onClick={(e) => {
                                onSelectTaskImportanceBtnClick("HIGH")
                            }}
                                 className={editTaskImportance === "HIGH" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                <div>
                                    <img src="img/today/ic_importance_high_black.png"/>
                                    <p>높음</p>
                                </div>
                            </div>
                            <div onClick={(e) => {
                                onSelectTaskImportanceBtnClick("MIDDLE")
                            }}
                                 className={editTaskImportance === "MIDDLE" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                <div>
                                    <img className="w40" src="img/today/ic_importance_mid_black.png"/>
                                    <p>중간</p>
                                </div>
                            </div>
                            <div onClick={(e) => {
                                onSelectTaskImportanceBtnClick("LOW")
                            }}
                                 className={editTaskImportance === "LOW" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                <div>
                                    <img src="img/today/ic_importance_low_black.png"/>
                                    <p>낮음</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h100">
                    <div className="w70 fBold">
                        작업 기간
                    </div>
                    <div className="h100p flexCenter">
                        <div>
                            <div className="flex w250">
                                <label className="w70">시작일: </label>
                                <DatePicker selected={startDate} onChange={handleStartDateChange}/>
                                <label className="w40"> 부터</label>
                            </div>

                            <div className="flex w250">
                                <label className="w70">종료일: </label>
                                <DatePicker selected={endDate} onChange={handleEndDateChange}/>
                                <label className="w40"> 까지</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w70 fBold">
                        액션
                    </div>
                    <div>
                        <div>
                            {editActionDtoList.map(actionDto =>
                                (<EditAction key={actionDto.actionId} actionId={actionDto.actionId}
                                             actionContent={actionDto.content} actionIsDone={actionDto.isDone}/>)
                            )}
                        </div>
                        <div>
                            <AddActionInput actionListState={editActionDtoList}
                                            setActionListState={setEditActionDtoList}
                                            myInputId={"editTask" + props.taskId}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTask;