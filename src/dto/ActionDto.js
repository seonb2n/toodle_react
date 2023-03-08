class ActionDto {
    actionId;
    content;
    dueDate;
    isDone;

    constructor(data) {
        this.actionId = data.actionId;
        this.content = data.content;
        this.dueDate = data.dueDate;
        this.isDone = data.isDone;
    }
}

export default ActionDto;