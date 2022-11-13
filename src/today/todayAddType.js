function TodayAddType(props) {
    return (
        <div className="add_type mt20 flexCenterAlignHorizon">
            <img src={props.src} />
            <div className="add_type_title">
                {props.title}
            </div>
            <div className="add_type_content">
                {props.content}
            </div>
        </div>
    )
}

export default TodayAddType;