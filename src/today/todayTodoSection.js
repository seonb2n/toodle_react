function TodayTodoSection(props) {

    return (
        <div className="bgMidPurple mt5 rad4 pt5 pd5 flexAlignHorizon fs14p h25">
            <img className="ml10 mr5" src="img/today/ic_action.png"></img>
            {props.content}
        </div>
    );
}

export default TodayTodoSection;