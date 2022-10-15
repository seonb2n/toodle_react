import "./today.css";
import TodayQuickPostIt from "./todayQuickPostIt";
import TodayCard from "./todayCard";
import TodayTime from "./todayTime";

function Today() {
    const todo1 = {
        id: 1,
        content : "로그인 버튼 시안 제작",
        done: false
    };
    const todo2 = {
        id: 2,
        content : "모바일 메인 페이지 제작",
        done: false
    };
    const todo3 = {
        id: 3,
        content : "포스트잇 페이지 제작",
        done: true
    };
    const todoList = [todo1, todo2, todo3]

    return (
        <div>
            <div className="today_detail_header">
                <div className="today_detail_title">today</div>
                <div className="today_detail_add_btn">빠른 추가</div>
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
                <TodayCard importance="3" pjtName="포트폴리오" taskName="포트폴리오 웹사이트 제작" toDoList={todoList}/>
            </div>

            <div className="today_detail_footer">
                <div className="today_detail_footer_workPlan">
                </div>
                <div className="today_detail_footer_menu">

                </div>
            </div>
        </div>
    )
}

export default Today;