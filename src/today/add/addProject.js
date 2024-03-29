import {useLocation} from "react-router-dom";
import "../../css/base.css"
import "./addProject.css"
import DatePicker from "react-mobile-datepicker";
import {useEffect, useState} from "react";
import SetColorDiv from "../../common/setColorDiv";
import AddProjectTask from "./addProjectTask";
import TaskDto from "../../dto/TaskDto";
import TodayService from "../../service/TodayService";
import AddActionInput from "../../common/addActionInput";
import AddAction from "./addAction";
import ProjectDto from "../../dto/ProjectDto";
import {ToastNotification} from "../../common/toastNotification";


function AddProject(props) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    // let startDate = params.get("startDay");
    // let endDate = params.get("endDay");
    let startDate = location.state?.startDay;
    let endDate = location.state?.endDay;
    const [endDay, setEndDay] = useState(new Date(endDate));
    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleSelect = time => {
        setTime(time);
        console.log(time);
        setEndDay(time);
        setIsOpen(false);
    };

    // 색상 정하는 부분
    const [projectColor, setProjectColor] = useState("#0054FF");

    let colorSetArr = [];
    colorSetArr[0] = "#80bcff";
    colorSetArr[1] = "#ffc180";
    colorSetArr[2] = "#5bb97b";
    colorSetArr[3] = "#ff8e89";
    colorSetArr[4] = "#7cd5ba";
    colorSetArr[5] = "#9595df";
    colorSetArr[6] = "#ff98c4";
    colorSetArr[7] = "#eeaeff";
    colorSetArr[8] = "#9eafc1";
    colorSetArr[9] = "#ffedab";
    const [isClickedArr, setIsClickedArr] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const onSetColorClick = (e) => {
        console.log(e);
        setProjectColor(e);
    }

    const onTaskCancelInputBtnClick = (e) => {
        e.preventDefault();
        document.getElementById("taskInput").value = "";
    }
    let today = new Date();
    const [taskEndDay, setTaskEndDay] = useState(1);
    today.setDate(today.getDate() + taskEndDay);

    const onAddEndDayClick = (e) => {
        setTaskEndDay(taskEndDay + 1);
    }
    const onMinusEndDayClick = (e) => {
        setTaskEndDay(taskEndDay - 1);
    }

    const onAddBtnClick = (value) => {
        setTaskEndDay(taskEndDay + value);
    }


    const [isAddTaskWindowOpen, setIsAddTaskWindowOpen] = useState(false);
    const [selectedTaskImportance, setSelectedTaskImportance] = useState("");
    const [selectedTaskName, setSelectedTaskName] = useState("");
    const onAddTaskWindowOpenBtnClick = (importance) => {
        setIsAddTaskWindowOpen(!isAddTaskWindowOpen);
        setSelectedTaskImportance(importance);
        setSelectedTaskName(document.getElementById("taskInput").value);
    }

    const [taskList, setTaskList] = useState([]);
    const onTaskAddBtnClick = (e) => {
        setIsAddTaskWindowOpen(!isAddTaskWindowOpen);
        const registeredTask = new TaskDto({
            "taskId": TodayService.generateUUID(),
            "content": selectedTaskName,
            "importance": selectedTaskImportance,
            "actionDtoSet": actionList
        });
        setActionList([]);
        setTaskList([...taskList, registeredTask]);
        setSelectedTaskName("");
        setSelectedTaskImportance("MEDIUM");
        setTaskEndDay(1);

        //프로젝트 추가하기 초기화해야 함
        document.getElementById("taskInput").value = "";
    }

    const onSelectTaskImportanceBtnClick = (importance) => {
        setSelectedTaskImportance(importance);
    }

    const onChangeTaskName = (e) => {
        setSelectedTaskName(e.target.value);
    }

    const onRemoveTaskFunction = (e) => {
        setTaskList(taskList.filter((taskDto) => taskDto.taskId !== e));
    }

    useEffect(() => {
        let tmpClickedArr = []
        for (let i = 0; i < colorSetArr.length; i++) {
            tmpClickedArr[i] = projectColor === colorSetArr[i];
        }
        setIsClickedArr(tmpClickedArr);
    }, [projectColor])


    const [projectNameNullState, setProjectNameNullState] = useState(false);

    const onAddProjectBtnClick = () => {
        const projectName = document.getElementById("projectNameInputId").value;
        const projectId = TodayService.generateUUID();
        const startPjtDate = new Date(startDate);
        const endPjtDate = new Date(endDate);
        const taskDtoSet = taskList;

        if (projectName === undefined || projectName === "") {
            return setProjectNameNullState(true);
        }
        const projectDto = new ProjectDto({projectId, projectName, projectColor, taskDtoSet})
        TodayService.executeProjectRegisterService(projectDto);
    }


    const [actionList, setActionList] = useState([]);
    const addTaskActionInputId = "addTaskActionInputId";

    const removeActionFunction = (actionId) => {
        let filteredActionList = actionList.filter(actionDto => actionDto.actionId !== actionId);
        setActionList(filteredActionList);
    }

    return (
        <div>
            <div className="h50 flex">
                <div className="positionAbs ml20 w70 fs14p">
                    취소
                </div>
                <div className="w100p flexCenter fs14p fBold">
                    프로젝트 추가하기
                </div>
            </div>
            <div className="flex h50">
                <div className="ml20 w70 fBold">
                    이름
                </div>
                <div className="h100p flexCenter">
                    <input id="projectNameInputId" className="w250 h50p projectNameInput" placeholder="입력을 완료 했습니다."/>
                </div>
            </div>
            <div className="h50 flex">
                <div className="ml20 w70 fBold">
                    마감날짜
                </div>
                <div>
                    <div className="flexCenter">
                        <p onClick={handleClick}>{endDay.toDateString()} 로 설정됨</p>
                        <img className="ml5 w10 h10"
                             src={isOpen ? "img/today/ic_arrow_up.png" : "img/today/ic_arrow_down.png"}/>
                    </div>
                    <div className={isOpen ? "" : " un_visible"}>
                        <DatePicker
                            value={time}
                            onSelect={handleSelect}
                            onCancel={handleCancel}
                            isPopup={false}
                            showHeader={false}
                            confirmText="OK"
                            cancelText="Cancel"
                            dateConfig={{
                                year: {
                                    format: "YYYY 년",
                                    caption: "Year",
                                    step: 1
                                },
                                month: {
                                    format: "MM 월",
                                    caption: "Mon",
                                    step: 1
                                },
                                date: {
                                    format: "D 일",
                                    caption: "Day",
                                    step: 1
                                }
                            }}/>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="ml20 w70 fBold">
                    색상
                </div>
                <div>
                    <div className="flex">
                        <div onClick={() => onSetColorClick(colorSetArr[0])}>
                            <SetColorDiv color={colorSetArr[0]} isClicked={isClickedArr[0]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[1])}>
                            <SetColorDiv color={colorSetArr[1]} isClicked={isClickedArr[1]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[2])}>
                            <SetColorDiv color={colorSetArr[2]} isClicked={isClickedArr[2]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[3])}>
                            <SetColorDiv color={colorSetArr[3]} isClicked={isClickedArr[3]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[4])}>
                            <SetColorDiv color={colorSetArr[4]} isClicked={isClickedArr[4]}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div onClick={() => onSetColorClick(colorSetArr[5])}>
                            <SetColorDiv color={colorSetArr[5]} isClicked={isClickedArr[5]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[6])}>
                            <SetColorDiv color={colorSetArr[6]} isClicked={isClickedArr[6]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[7])}>
                            <SetColorDiv color={colorSetArr[7]} isClicked={isClickedArr[7]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[8])}>
                            <SetColorDiv color={colorSetArr[8]} isClicked={isClickedArr[8]}/>
                        </div>
                        <div onClick={() => onSetColorClick(colorSetArr[9])}>
                            <SetColorDiv color={colorSetArr[9]} isClicked={isClickedArr[9]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt10">
                <div className="ml20 w70 fBold">
                    태스크 추가
                </div>
                <div>
                    <div>
                        {taskList.map(taskDto => (
                            <AddProjectTask importance={taskDto.importance} taskName={taskDto.content}
                                            key={taskDto.taskId} onRemoveFunction={onRemoveTaskFunction}
                                            uuid={taskDto.taskId}/>
                        ))}
                    </div>
                    <div>
                        <div className="flex mt10">
                            <input id="taskInput" className="h20 taskInputBox" placeholder="태스크와 중요도를 입력해주세요."/>
                            <img onClick={onTaskCancelInputBtnClick} className="w10 h10"
                                 src="img/add/ic_task_input_cancel.png"/>
                        </div>
                        <div className="grayLine"></div>
                        <div className="flex mt10">
                            <div className="taskImportanceSelectBox mr10">
                                <div onClick={(e) => {
                                    onAddTaskWindowOpenBtnClick("HIGH")
                                }}>
                                    <img src="img/today/ic_importance_high_black.png"/>
                                    <p>높음</p>
                                </div>
                            </div>
                            <div className="taskImportanceSelectBox mr10">
                                <div onClick={(e) => {
                                    onAddTaskWindowOpenBtnClick("MIDDLE")
                                }}>
                                    <img className="w40" src="img/today/ic_importance_mid_black.png"/>
                                    <p>중간</p>
                                </div>
                            </div>
                            <div className="taskImportanceSelectBox">
                                <div onClick={(e) => {
                                    onAddTaskWindowOpenBtnClick("LOW")
                                }}>
                                    <img src="img/today/ic_importance_low_black.png"/>
                                    <p>낮음</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nextBtnWrapper flexCenterAlignHorizon" onClick={onAddProjectBtnClick}>
                <div className="nextBtn flexCenter fBold fs16p">
                    추가하기
                </div>
            </div>
            <div className={isAddTaskWindowOpen ? "addTaskWindow addTaskWindow-open" : "addTaskWindow"}>
                <div className="addTaskWindowHeader flexCenter w100p mt20 pt10">
                    <div className="w40 ml10" onClick={(e) => {
                        onAddTaskWindowOpenBtnClick()
                    }}>
                        취소
                    </div>
                    <div className="title flexCenter fBold">
                        태스크 더 추가하기
                    </div>
                    <div className="w40 mr10 fBold" onClick={(e) => {
                        onTaskAddBtnClick()
                    }}>
                        추가
                    </div>
                </div>

                <div className="content mt20 ml10">
                    <div className="flex h50">
                        <div className="w70 fBold">
                            이름
                        </div>
                        <div className="h100p flexCenter">
                            <input className="w250 h50p projectNameInput" placeholder="이름을 입력하세요."
                                   value={selectedTaskName} onChange={onChangeTaskName}/>
                        </div>
                    </div>
                    <div className="flex mt10">
                        <div className="w70 fBold">
                            중요도
                        </div>
                        <div>
                            <div>
                                <div className="flex mt10">
                                    <div onClick={(e) => {
                                        onSelectTaskImportanceBtnClick("HIGH")
                                    }}
                                         className={selectedTaskImportance === "HIGH" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                        <div>
                                            <img src="img/today/ic_importance_high_black.png"/>
                                            <p>높음</p>
                                        </div>
                                    </div>
                                    <div onClick={(e) => {
                                        onSelectTaskImportanceBtnClick("MIDDLE")
                                    }}
                                         className={selectedTaskImportance === "MIDDLE" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                        <div>
                                            <img className="w40" src="img/today/ic_importance_mid_black.png"/>
                                            <p>중간</p>
                                        </div>
                                    </div>
                                    <div onClick={(e) => {
                                        onSelectTaskImportanceBtnClick("LOW")
                                    }}
                                         className={selectedTaskImportance === "LOW" ? "taskImportanceSelectBox_selected mr10" : "taskImportanceSelectBox mr10"}>
                                        <div>
                                            <img src="img/today/ic_importance_low_black.png"/>
                                            <p>낮음</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h70">
                        <div className="w70">
                            <div className="fBold">작업 기한</div>
                            <div className="fs10p">{today.toLocaleDateString()}</div>
                        </div>
                        <div className="h100p">
                            <div className="h100p flexCenterAlignHorizon">
                                <div className="flexCenter">
                                    <div className="mr5 h100p">오늘부터</div>
                                    <div className="taskAddEndDayText w70 h100p">{taskEndDay} 일간</div>
                                    <div className="ml10 w20 h20 flexCenter bgLightGray rad4"
                                         onClick={onAddEndDayClick}><img className="w50p" src="img/add/ic_add.png"/>
                                    </div>
                                    <div className="ml5 w20 h20 flexCenter bgLightGray rad4"
                                         onClick={onMinusEndDayClick}><img className="w50p" src="img/add/ic_minus.png"/>
                                    </div>
                                </div>
                                <div className="taskAddEndDayBtnContainer flex w270">
                                    <div className="taskAddEndDayBtn" onClick={(e) => {
                                        onAddBtnClick(0)
                                    }}>기간 설정 안함
                                    </div>
                                    <div className="taskAddEndDayBtn" onClick={(e) => {
                                        onAddBtnClick(5)
                                    }}>5일
                                    </div>
                                    <div className="taskAddEndDayBtn" onClick={(e) => {
                                        onAddBtnClick(10)
                                    }}>10일
                                    </div>
                                    <div className="taskAddEndDayBtn" onClick={(e) => {
                                        onAddBtnClick(30)
                                    }}>30일
                                    </div>
                                    <div className="taskAddEndDayBtn" onClick={(e) => {
                                        onAddBtnClick(60)
                                    }}>60일
                                    </div>
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
                                {actionList.map(actionDto =>
                                    (<AddAction key={actionDto.actionId} actionId={actionDto.actionId}
                                                actionContent={actionDto.content}
                                                removeActionFn={removeActionFunction}/>)
                                )}
                            </div>
                            <AddActionInput actionListState={actionList} setActionListState={setActionList}
                                            myInputId={addTaskActionInputId}/>
                        </div>
                    </div>
                    {
                        projectNameNullState === true ? (
                            <ToastNotification setToastState={setProjectNameNullState} content="프로젝트 명은 필수입니다!"/>
                        ) : null
                    }

                </div>

                <div className="footer">

                </div>
            </div>
        </div>
    );
}

export default AddProject;