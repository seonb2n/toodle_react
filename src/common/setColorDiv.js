import "./setColorDiv.css";

function SetColorDiv(props) {
    const color = props.color;
    const isClicked = props.isClicked;

    return (
        <div className="color_div_wrapper">
            <div className="color_div" style={{
                backgroundColor: color
            }}>
            </div>
            <div className={isClicked ? "visible" : "unvisible"}>
                <img className="selected" src="img/add/ic_importance_select.png"/>
            </div>
        </div>
    );
}

export default SetColorDiv;