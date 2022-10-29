function TodayTodoSection(props) {

    return (
        <div className="w100p h100p">
            <div className="bgMidPurple mt5 rad4 pt5 pd5 flexAlignHorizon fs14p h25 w80p floatL">
                <div>
                    <img className="ml10 mr5" src="img/today/ic_action.png"></img>
                    {props.content}
                </div>
            </div>
            <div className="bgMidPurple mt5 rad4 pt5 pd5 w35 h25 floatR">
                <button className="w100p h100p bgTrans">
                </button>
            </div>
        </div>
    );
}

export default TodayTodoSection;