import "./editAction.css"
import {Checkbox} from "@mui/material";

function EditAction(props) {

    const actionId = props.actionId;
    const actionContent = props.actionContent;
    const actionIsDone = props.actionIsDone;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
      <div>
        <div className="flex">
            <div>{actionContent}</div>
            <div><Checkbox {...label} defaultChecked />
            </div>
        </div>
      </div>
    );
}

export default EditAction;