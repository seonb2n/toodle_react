class ActionDto {
    actionId;
    content;
    dueDate;
    isDone;

    constructor({actionId, content, dueDate, isDone}) {
        this.actionId = actionId;
        this.content = content;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }
}

export default ActionDto;