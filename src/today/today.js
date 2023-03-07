import "./today.css";
import TodayQuickPostIt from "./todayQuickPostIt";
import TodayCard from "./todayCard";
import TodayTime from "./todayTime";
import {Slider} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import TodayService from "../service/TodayService";
function Today() {
    const todo1 = {
        id: 1,
        content: "로그인 버튼 시안 제작",
        done: false
    };
    const todo2 = {
        id: 2,
        content: "모바일 메인 페이지 제작",
        done: false
    };
    const todo3 = {
        id: 3,
        content: "포스트잇 페이지 제작",
        done: true
    };
    const todoList = [todo1, todo2, todo3]

    const [projectDtoList, setProjectDtoList] = useState([]);
    useEffect(() => {
        TodayService.executeProjectGetService()
            .then((response) => {
                setProjectDtoList(response.data.projectDtoList);
                console.log(response.data.projectDtoList);
            }).catch(() => {
        })
    }, []);

    return (
        <div className="today_body">
            <div className="today_detail_header">
                <div className="today_detail_title">today</div>
                <Link to="/todayAdd">
                    <div className="today_detail_add_btn">빠른 추가</div>
                </Link>
            </div>
            <div className="today_detail_quick_menu">
                <TodayQuickPostIt img="ic_quick_postit_ex.png" content="비타민"/>
                <TodayQuickPostIt img="ic_quick_postit_ex.png" content="비타민 챙겨먹기"/>

            </div>

            <div className="today_detail_cardSection">
                <div className="today_detail_card_top_img">

                </div>
                <div className="today_detail_card_top_time">
                    <TodayTime time="1700" startTime="17:00" endTime="18:00"/>
                </div>

                <div className="scroll_view">
                    <div className="ml30"></div>
                    {
                        projectDtoList.map(project => (
                            project.taskDtoSet.map(task => (
                                <TodayCard importance="3" pjtName={project.projectName} taskName={task.content} toDoList={task.actionDtoSet} key={task.taskId}/>
                            ))
                        ))
                    }
                    <div className="p15"></div>
                </div>


                <div className="today_slider flex">
                    <div className="w10p">
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
                    <div className="w10p">
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
        </div>
    )
}

export default Today;