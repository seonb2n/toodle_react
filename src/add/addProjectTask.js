import "./addProjectTask.css"
import {useState} from "react";

function AddProjectTask(props) {
    const importance = props.importance;
    const taskName = props.taskName;
    let imgSrc = "";

    switch (importance) {
        case "HIGH" : imgSrc = "img/today/ic_importance_high_black.png";
            break;
        case "MIDDLE" : imgSrc = "img/today/ic_importance_mid_black.png";
            break;
        case "LOW" : imgSrc = "img/today/ic_importance_low_black.png";
            break;
    }

    return (
        <div className="flex h32">
            <div className="w30 h100p flexCenter importanceImgWrapper">
                <img className="w100p" src={imgSrc}/>
            </div>
            <p className="h100p flexCenter ml5">
                {taskName}
            </p>
            <div className="h100p flexCenter ml5">
                <img className="w10 h10" src="img/today/ic_minus.png"/>
            </div>
        </div>
    );
}

export default AddProjectTask;