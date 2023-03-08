import {Link} from "react-router-dom";
import "./postItList.css";
import "../css/base.css"
import TodayTodoSection from "../today/todayTodoSection";
import PostItEntity from "./postItEntity";
import BackButton from "../common/backButton";
import {useEffect, useState} from "react";
import AuthenticationService from "../service/AuthenticationService";
import PostItService from "../service/PostItService";
import {ToastNotification} from "../common/toastNotification";
import PostItDto from "../dto/PostItDto";

function PostItList() {
    // const postIt1 = {
    //     id: 1,
    //     content: "일이삼",
    //     data: "2020.03.03"
    // };
    // const postIt2 = {
    //     id: 2,
    //     content: "일이삼사",
    //     data: "2020.03.04"
    // };
    const [postItList, setPostItList] = useState([]);
    const [toastState, setToastState] = useState(false);

    useEffect(() => {
        PostItService.executePostItGetService()
            .then((response) => {
                console.log(response.data);
                const postItList = response.data;
                let postItDtos = [];
                postItList.map(postItDto => (
                    postItDtos.push(new PostItDto(postItDto))
                ))
                setPostItList(postItDtos);
            }).catch(() => {
        })
    }, []);

    const onAddPostItBtnClick = (e) => {
        const content = document.getElementById("postItContentInput").value;
        if (content === "" || content === null) {
            setToastState(true);
            return
        }

        const postItId = PostItService.generateUUID();
        const today = new Date();
        document.getElementById("postItContentInput").value = "";
        const postItDto = {
            "postItId" : postItId,
            "content" : content,
            "endTime" : toStringByFormatting(today),
            "isDone" : false,
        };
        console.log(postItDto);
        setPostItList([...postItList, postItDto]);
    }

    const onSavePostItBtnClick = (e) => {
        e.preventDefault();
        PostItService.executePostItUpdateService(postItList)
            .then((response) => {
                if (response.status === 200) {

                }
            })
    }

    return (
        <div>
            <div className="w100p h50 flexAlignHorizon">
                <div className="w50p flexAlignHorizon">
                    <BackButton link="/login" />
                </div>
                <div className="w50p flexEnd mr15 fBold" onClick={onSavePostItBtnClick}>
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

            <div className="ml15 mr15 mt20 h42 top_input_box flexAlignHorizon">
                <input id ="postItContentInput" className="borderNone h100p fs16p" placeholder="기억해야할 일 입력하기"></input>
                <div onClick={onAddPostItBtnClick} className="add_btn mr15">
                    <img src="img/postit/ic_add_section.png"></img>
                </div>
            </div>

            {
                postItList.map(postIt => (
                    <PostItEntity content={postIt.content} date={postIt.createdTime} key={postIt.postItId}/>
                ))
            }

            {
                toastState === true ? (
                    <ToastNotification setToastState={setToastState} content="포스트잇에는 내용이 필요합니다!" />
                ) : null
            }

        </div>
    );
}

/**
 * 날짜를 YYYY-MM-dd 로 바꿔준다.
 * @param date
 */
function toStringByFormatting(source, delimiter = '-') {
    function leftPad(value) {
        if (value >= 10) {
            return value;
        }

        return `0${value}`;
    }

    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

export default PostItList;