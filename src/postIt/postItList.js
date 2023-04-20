import "./postItList.css";
import "../css/base.css"
import PostItEntity from "./postItEntity";
import BackButton from "../common/backButton";
import {useEffect, useState} from "react";
import PostItService from "../service/PostItService";
import {ToastNotification} from "../common/toastNotification";
import PostItDto from "../dto/PostItDto";
import PostItCategoryDto from "../dto/PostItCategoryDto";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    const [postItCategoryList, setPostItCategoryList] = useState([]);
    const [postItList, setPostItList] = useState([]);
    const [postItInputNullToast, setPostItInputNullToast] = useState(false);
    const [postItSaveDoneToast, setPostItSaveDoneToast] = useState(false);
    const [isCategoryDivShown, setIsCategoryDivShown] = useState(false);

    useEffect(() => {
        PostItService.executePostItGetService()
            .then((response) => {
                const postItListPageDto = response.data;
                console.log(postItListPageDto);
                let postItCategoryDtos = [];
                postItListPageDto.postItCategoryDtoList.map(postItCategoryDto => (
                    postItCategoryDtos.push(new PostItCategoryDto(postItCategoryDto))
                ))
                setPostItCategoryList(postItCategoryDtos);
                let postItDtos = [];
                postItListPageDto.postItDtoList.map(postItDto => {
                        const categoryDto = postItCategoryDtos.filter(categoryDto => categoryDto.postItCategoryClientId === postItDto.categoryDto.postItCategoryClientId);
                        return postItDtos.push(new PostItDto(postItDto, categoryDto[0]));
                    }
                )
                setPostItList(postItDtos);
            }).catch(() => {
        })
    }, []);

    function createNewCategory(uuid, title) {
        let result = postItCategoryList.filter(category => category.postItCategoryClientId === uuid);
        if (result.length > 0) {
            return result[0];
        }
        result = postItCategoryList.filter(category => category.title === title);
        if (result.length > 0) {
            return result[0];
        }
        const categoryDto = new PostItCategoryDto({
            "postItCategoryClientId": PostItService.generateUUID(),
            "title": title
        });
        setPostItCategoryList([...postItCategoryList, categoryDto]);
        return categoryDto;
    }

    function createNewPostIt(categoryDto, content, today) {
        const postItDto = {
            "postItClientId": PostItService.generateUUID(),
            "categoryDto": categoryDto,
            "content": content,
            "createdTime": toStringByFormatting(today),
            "isDone": false,
        }
        document.getElementById("postItContentInput").value = "";
        console.log(postItDto);
        setPostItList([...postItList, postItDto]);
    }

    const onAddPostItBtnClick = (e) => {
        const content = document.getElementById("postItContentInput").value;
        if (content === "" || content === null) {
            setPostItInputNullToast(true);
            return
        }
        setIsCategoryDivShown(!isCategoryDivShown);
    }

    const onSavePostItBtnClick = (e) => {
        e.preventDefault();
        PostItService.executePostItUpdateService(postItCategoryList, postItList)
            .then((response) => {
                if (response.status === 200) {
                    setPostItSaveDoneToast(true);
                }
            })
    }

    const onSetCategoryBtnClick = (e) => {
        e.preventDefault();
        setIsCategoryDivShown(!isCategoryDivShown);
    }

    const onSelectCategory = (e) => {
        const selectedCategoryId = e.target.value;
        const categoryDto = createNewCategory(selectedCategoryId, null);
        createNewPostIt(categoryDto, document.getElementById("postItContentInput").value, new Date());
        setIsCategoryDivShown(!isCategoryDivShown);
    }

    const onAddCategoryBtnClick = (e) => {
        const categoryTitle = document.getElementById("postItCategoryInput").value;
        const categoryDto = createNewCategory(null, categoryTitle);
        createNewPostIt(categoryDto, document.getElementById("postItContentInput").value, new Date());
        setIsCategoryDivShown(!isCategoryDivShown);
    }

    const onPostItEntityDoneClick = (postItClientId) => {
        const newPostItList = [...postItList];
        const clickedPostIt = newPostItList.find(postIt => postIt.postItClientId === postItClientId);
        clickedPostIt.isDone = !clickedPostIt.isDone;
        setPostItList(newPostItList);
    }

    return (
        <div>

            <div
                className={"bgLightOrange center rad16 w65p h50p zIndex3 " + (isCategoryDivShown ? "" : "display_none")}>
                <div className="pl5 pr5 h100p">
                    <div onClick={onSetCategoryBtnClick} className=" w20 h20 positionAbs right0 mr10 mt10">
                        <img className="w100p" src="img/postit/ic_postit_set_category_cancel.png"/>
                    </div>
                    <div className="w100p h70 pt40">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">카테고리 선택</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value=""
                                label="category"
                                onChange={onSelectCategory}
                            >
                                {
                                    postItCategoryList.map(category => (
                                        <MenuItem value={category.postItCategoryClientId}
                                                  key={category.postItCategoryClientId}>{category.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <div className="mt40 w100p h50 flex">
                            <input id="postItCategoryInput" placeholder="새 카테고리 추가하기"/>
                            <div onClick={onAddCategoryBtnClick} className="w20 h20 positionAbs right0 mr15">
                                <img src="img/postit/ic_add_section.png"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt30 w100p h80p">

                </div>
            </div>
            <div className="w100p h50 flexAlignHorizon">
                <div className="w50p flexAlignHorizon">
                    <BackButton link="/login"/>
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
                <input id="postItContentInput" className="borderNone h100p fs16p" placeholder="기억해야할 일 입력하기"></input>
                <div onClick={onAddPostItBtnClick} className="add_btn mr15">
                    <img src="img/postit/ic_add_section.png"></img>
                </div>
            </div>

            <div>
                {
                    postItList.map(postIt => (
                        <PostItEntity onPostItDoneClick={onPostItEntityDoneClick} postItClientId={postIt.postItClientId} content={postIt.content} date={postIt.createdTime} key={postIt.postItClientId}/>
                    ))
                }
            </div>
            {
                postItInputNullToast === true ? (
                    <ToastNotification setToastState={setPostItInputNullToast} content="포스트잇에는 내용이 필요합니다!"/>
                ) : null
            }
            {
                postItSaveDoneToast === true ? (
                    <ToastNotification setToastState={setPostItSaveDoneToast} content="포스트잇 저장 완료!"/>
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