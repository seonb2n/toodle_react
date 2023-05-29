export default function AddAction(props) {
    const actionId = props.actionId;
    const actionContent = props.actionContent;
    const removeActionFn = props.removeActionFn;



    return (
        <div className="w250 h32">
            <div className="flex w100p h90p borderBtmGray">
                <div className="w90p">
                    {actionContent}
                </div>
                <div className="ml10 w10 h10" >
                    <img className="w10 h10" src= "img/add/ic_minus.png" onClick={() => removeActionFn(actionId)} />
                </div>
            </div>
        </div>
    );
}