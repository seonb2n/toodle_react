import "../css/base.css"
import "./postItEntity.css"

function PostItEntity(props) {
    const content = props.content;
    const date = props.date;
    return (
        <div className="flexAlignHorizon h46 ml15 mr15">
            <div className="w25 h25 oval bgLightGray flexCenterAlignHorizon">
                <img src="img/postit/ic_postit_category.png"></img>
            </div>
            <div className="ml10 w186 fBold fs14p">
                {content}
            </div>
            <div className="fc_gr date_content fs12p">
                {date}
            </div>
            <div className="done_btn fBold">
                완료
            </div>
        </div>
    );
}

export default PostItEntity;