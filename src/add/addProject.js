import {useLocation} from "react-router-dom";

function AddProject(props) {
    const location = useLocation();
    let startDay = location.state?.startDay;
    let endDay = location.state?.endDay;

    return (
        <div>

        </div>
    );
}

export default AddProject;