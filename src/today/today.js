import "./today.css";
import TodayQuickPostIt from "./todayQuickPostIt";
import TodayCard from "./todayCard";
import TodayTime from "./todayTime";
import {Slider} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import TodayService from "../service/TodayService";
import ProjectDto from "../dto/ProjectDto";
import TodayPostItDto from "../dto/TodayPostItDto";
import EditTask from "./edit/editTask";

function Today() {
    const [projectDtoList, setProjectDtoList] = useState([]);
    const [postItDtoList, setPostItDtoList] = useState([]);
    useEffect(() => {
        TodayService.executeTodayGetService()
            .then((response) => {
                const projectDtoList = response.data.projectResponse.projectDtoList;
                const postItContentDtoList = response.data.todayPostItResponse.todayPostItContentDtoList;
                let projectList = [];
                projectDtoList.map(projectDto => (
                    projectList.push(new ProjectDto(projectDto))
                ))
                setProjectDtoList(projectList);

                let postItList = [];
                postItContentDtoList.map(postItContentDto => (
                    postItList.push(new TodayPostItDto(postItContentDto))
                ))
                setPostItDtoList(postItContentDtoList);
            }).catch(() => {
        })
    }, []);

    const [editPageVisible, setEditPageVisible] = useState(false);
    const [lastEditTodayData, setLastEditTodayData] = useState({
        "taskId": "",
        "taskName": "",
        "content": "",
        "pjtName": "",
        "importance": "",
        "startAt": "",
        "endAt": "",
        "actionDtoSet": []
    });

    const onShowEditTodayBtnClick = (data) => {
        console.log("클릭된 태스크 : " + data.taskName);
        setEditPageVisible(true);
        setLastEditTodayData(data);
    };
    const onChangeEditToday = (data) => {
        console.log(data);
        //data 를 taskDtoSet 에서 찾아서 변경해줘야 한다.
        projectDtoList.forEach(projectDto => {
            projectDto.taskDtoSet = projectDto.taskDtoSet.filter(taskDto => taskDto.taskId === data.taskId);
            projectDto.taskDtoSet = [...projectDto.taskDtoSet, data];
        })
    }
    const onEditTaskCancelClicked = () => {
        setEditPageVisible(false);
    }
    const onEditTaskCompleteClicked = () => {
        setEditPageVisible(false);
    }

    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date(startTime.getTime() + (1 * 60 * 60 * 1000)));

    return (
        <div className="today_body">
            <div className="today_detail_header">
                <div className="today_detail_title">today</div>
                <Link to="/todayAdd">
                    <div className="overflow_auto w90">
                        <div className="today_detail_add_btn">빠른 추가</div>
                    </div>
                </Link>
            </div>
            <div className="today_detail_quick_menu">
                {
                    postItDtoList.map(postItDto => (
                        <TodayQuickPostIt img={postItDto.imgUrl} content={postItDto.content}
                                          key={TodayService.generateUUID()}/>
                    ))
                }

            </div>

            <div className="today_detail_cardSection">
                <div className="today_detail_card_top_img">

                </div>
                <div className="today_detail_card_top_time">
                    <TodayTime time="19:00" startTime={timeFormatter(startTime)} endTime={timeFormatter(endTime)}/>
                </div>

                <div className="scroll_view">
                    <div className="ml30"></div>
                    {
                        projectDtoList.map(project => (
                            project.taskDtoSet.map(task => (
                                <TodayCard importance={task.importance}
                                           pjtName={project.projectName}
                                           pjtColor={project.projectColor}
                                           startAt={task.startAt} endAt={task.endAt}
                                           taskId={task.taskId}
                                           taskName={task.content} toDoList={task.actionDtoSet} key={task.taskId}
                                           onEditEvent={onShowEditTodayBtnClick}/>
                            ))
                        ))
                    }
                    <div className="p15"></div>
                </div>


                <div className="today_slider flex">
                    <div className="w35">
                        <img className="w100p" src="img/today/ic_moon_24.png"/>
                    </div>
                    <div className="w80p pr10 pl10">
                        <Slider
                            aria-label="Temperature"
                            defaultValue={30}
                            step={1}
                            marks
                            min={0}
                            max={12}
                            sx={{
                                height: 10,
                                color: "#DAD9FF",
                                '& .MuiSlider-thumb': {
                                    height: 20,
                                    width: 20,
                                    backgroundColor: "#fff",
                                }
                            }}
                        />
                    </div>
                    <div className="w35">
                        <img className="w100p" src="img/today/ic_sun_24.png"/>
                    </div>

                </div>
            </div>

            <div className="today_detail_footer_workPlan flexAlignHorizon">
                <div className="floatL w50p h100p flexCenter fs18p fBold">
                    <div className="w40p h100p flexCenter border_top_selected">
                        work
                    </div>
                </div>
                <div className="floatR w50p h100p flexCenter fs18p fBold">
                    <div className="w40p h100p flexCenter">
                        plan
                    </div>
                </div>
            </div>
            <div className="today_detail_footer_menu flexCenter">
                <div className="w25p flexCenter">
                    <img src="img/today/ic_tab_today_active.png"></img>
                </div>
                <div className="w25p flexCenter">
                    <img src="img/today/ic_tab_project_default.png"></img>
                </div>
                <div className="w25p flexCenter">
                    <img src="img/today/ic_tab_calendar_default.png"></img>
                </div>
                <div className="w25p flexCenter">
                    <img src="img/today/ic_tab_my_default.png"></img>
                </div>
            </div>

            <div className={`animation_bottom_up_container ${editPageVisible ? 'visible' : ''}`}>
                {editPageVisible &&
                    <EditTask onEditCancelBtnClick={onEditTaskCancelClicked} onChangeEditToday={onChangeEditToday}
                              editData={lastEditTodayData} projectData={projectDtoList}
                              onEditCompleteBtnClick={onEditTaskCompleteClicked}/>
                }
            </div>
        </div>
    )
}

function timeFormatter(currentTime) {
// 시간과 분 가져오기
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

// 시간과 분을 두 자리 숫자로 변환
    const formattedHours = ("0" + hours).slice(-2);
    const formattedMinutes = ("0" + minutes).slice(-2);

// 시간을 HH:mm 형식으로 조합
    return formattedHours + ":" + formattedMinutes;
}

export default Today;