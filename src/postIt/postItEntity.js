import "../css/base.css"
import "./postItEntity.css"
import {useState} from "react";

function PostItEntity(props) {
    const content = props.content;
    const date = props.date;

    const [isDone, setIsDone] = useState(props.done);

    const onDoneBtnClick = (e) => {
        e.preventDefault();
        setIsDone(!isDone);
    }

    return (
        <div className="flexAlignHorizon h46 ml15 mr15">
            <div className="w25 h25 oval bgLightGray flexCenterAlignHorizon">
                <img src="img/postit/ic_postit_category.png"></img>
            </div>
            <div className="cancelMask_parent">
                <div className= {isDone ? "cancelMask_child w100p cacelForPostIt" : "cancelMask_child w100p cacelForPostIt un_visible"}></div>
                <div className={isDone ? "ml10 w186 fBold fs14p fc_lgr" : "ml10 w186 fBold fs14p fc_00"}>
                    {content}
                </div>
                <div className="fc_gr date_content fs12p">
                    {date}
                </div>
            </div>
            <div className="done_btn fBold" onClick={onDoneBtnClick}>
                완료
            </div>
        </div>
    );
}

export default PostItEntity;