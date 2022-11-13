import BackButton from "../common/backButton";
import "./todayAdd.css";
import TodayAddType from "./todayAddType";

function TodayAdd() {
    return (
        <div>
            <BackButton link="/today" />

            <div className="add_title ml20">
                추가할 항목을 고르세요.
            </div>

            <TodayAddType src="img/today/ic_add_screen_task.png" title="태스크" content="기간단위로 할 일을 추가합니다." />
            <TodayAddType src="img/today/ic_add_screen_schedule.png" title="스케줄" content="특정 시간에 일정을 추가합니다." />
            <TodayAddType src="img/today/ic_add_screen_postit.png" title="포스트잇" content="기억하고 싶은 특정 일을 추가합니다." />
        </div>
    )
}

export default TodayAdd;