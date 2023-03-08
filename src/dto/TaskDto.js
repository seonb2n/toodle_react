import ActionDto from "./ActionDto";

class TaskDto {
    taskId;
    content;
    actionDtoSet;

    constructor(data) {
        this.taskId = data.taskId;
        this.content = data.content;
        this.actionDtoSet = []
        data.actionDtoSet.map(actionDto => (
            this.actionDtoSet.push(new ActionDto(actionDto))
        ))

    }
}

export default TaskDto;