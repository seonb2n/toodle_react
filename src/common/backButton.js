import {Link} from "react-router-dom";

function BackButton(props) {
    const link = props.link;

    return (
        <div className="w100p h50 flexAlignHorizon">
            <Link to={link}>
                <div className="back_button">
                    <img src="img/login/ic_back_black.png"/>
                </div>
            </Link>
        </div>
        );
}

export default BackButton;