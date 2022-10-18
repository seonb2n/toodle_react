import {Link} from "react-router-dom";
import "./postItList.css";

function PostItList() {
    return (
        <div>
            <div className="w100p h50 flexAlignHorizon">
                <div className="w50p flexAlignHorizon">
                    <Link to="/login">
                        <div className="back_button">
                            <img src="img/login/ic_back_black.png"/>
                        </div>
                    </Link>
                </div>
                <div className="w50p flexEnd mr15">
                    저장
                </div>
            </div>

            <div className="w100p fs32p fBold ml15 flex">
                <div className="zIndex2">
                    post it
                </div>
                <div className="oval bgLightOrange title_oval zIndex1">
                </div>
            </div>

            <div className="ml15 fs14p fc_lg">
                <div>
                    기록한 일들을
                </div>
                <div>
                    잊은 건 없으세요?
                </div>
            </div>

            <div>

            </div>

        </div>
    );
}

export default PostItList;