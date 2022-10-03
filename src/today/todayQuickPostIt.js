import "./todayQuickPostIt.css";

function todayQuickPostIt(props) {
    const imgSrc = "img/today/" + props.img;
    return (
        <div className="quick_post_it_wrapper">
            <div className="quick_post_it_img">
                <img src={imgSrc}/>
            </div>
            <div className="quick_post_it_content">
                {props.content}
            </div>
        </div>
    );
}

export default todayQuickPostIt;
