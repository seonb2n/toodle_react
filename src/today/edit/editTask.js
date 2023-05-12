import "../../css/base.css";
import "./editTask.css";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EditTask(props) {

    const taskName = props.taskName;
    // const projectList = props.projectList;
    // const selectedProject = props.selectedProject;
    const importance = props.importance;
    // const startDay = props.startDay;
    // const endDay = props.endDay;
    const [actionList, setActionList] = useState(props.actionList);

    const [selectedProject, setSelectedProject] = useState("A");

    const onChangeSelectedProject = (event) => {
        setSelectedProject(event.target.value);
    }

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div>
            <div className="h50 flex">
                <div onClick={props.onEditCancelBtnClick} className="positionAbs left0 ml20 w70 fs14p alignL">
                    취소
                </div>
                <div className="w100p flexCenter fs14p fBold">
                    태스크 수정
                </div>
                <div onClick={props.onEditCompleteBtnClick} className="positionAbs right0 mr20 w70 fs14p alignR">
                    완료
                </div>
            </div>
            <div className="taskEditMain">
                <div className="flex h50">
                    <div className="w70 fBold">
                        이름
                    </div>
                    <div className="h100p flexCenter">
                        <input className="w250 h50p projectNameInput" placeholder="입력을 완료 했습니다."/>
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
                            value={selectedProject}
                            label="selectedProjectName"
                            onChange={onChangeSelectedProject}
                        >
                            <MenuItem value={"A"}>ProjectA</MenuItem>
                            <MenuItem value={"B"}>ProjectB</MenuItem>
                            <MenuItem value={"C"}>ProjectC</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="flex h50 mt10">
                    <div className="w70 fBold">
                        중요도
                    </div>
                    <div className="h100p flexCenter">
                        <div className="mt10 flex">
                            <div className="taskImportanceSelectBox mr10">
                                <div>
                                    <img src="img/today/ic_importance_high_black.png"/>
                                    <p>높음</p>
                                </div>
                            </div>
                            <div className="taskImportanceSelectBox mr10">
                                <div>
                                    <img className="w40" src="img/today/ic_importance_mid_black.png"/>
                                    <p>중간</p>
                                </div>
                            </div>
                            <div className="taskImportanceSelectBox">
                                <div >
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
                                <DatePicker selected={startDate} onChange={handleStartDateChange} />
                                <label className="w40"> 부터</label>
                            </div>

                            <div className="flex w250">
                                <label className="w70">종료일: </label>
                                <DatePicker selected={endDate} onChange={handleEndDateChange} />
                                <label className="w40"> 까지</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTask;