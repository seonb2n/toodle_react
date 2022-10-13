import "./today.css";
import TodayQuickPostIt from "./todayQuickPostIt";
import TodayCard from "./todayCard";

function Today() {

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
                <div className="today_detail_card-top_time">

                </div>
                <TodayCard />
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