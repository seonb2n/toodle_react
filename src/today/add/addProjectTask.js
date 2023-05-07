import "./addProjectTask.css"

function AddProjectTask(props) {
    const importance = props.importance;
    const taskName = props.taskName;
    let imgSrc = "";

    switch (importance) {
        case "HIGH" :
            imgSrc = "img/today/ic_importance_high_black.png";
            break;
        case "MIDDLE" :
            imgSrc = "img/today/ic_importance_mid_black.png";
            break;
        case "LOW" :
            imgSrc = "img/today/ic_importance_low_black.png";
            break;
    }

    return (
        <div>
            <div className="flex h32 w100p">
                <div className="w30 h100p flexCenter importanceImgWrapper">
                    <img className="w100p" src={imgSrc}/>
                </div>
                <p className="h100p w100p flexCenter ml5">
                    <div className="w100p w100p">
                        {taskName}
                    </div>
                </p>
                <div onClick={(e) => props.onRemoveFunction(props.uuid)} className="h100p flexCenter ml5">
                    <img className="w10 h10" src="img/today/ic_minus.png"/>
                </div>
            </div>
            <div className="grayLine"></div>
        </div>
    );
}

export default AddProjectTask;