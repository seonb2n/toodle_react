import ActionDto from "./ActionDto";

class TaskDto {
    taskId;
    content;
    importance;
    startAt;
    endAt;
    actionDtoSet;
    constructor(data) {
        this.taskId = data.taskId;
        this.content = data.content;
        this.importance = data.importance;
        this.startAt = data.startAt;
        this.endAt = data.endAt;
        this.actionDtoSet = []
        data.actionDtoSet.map(actionDto => (
            this.actionDtoSet.push(new ActionDto(actionDto))
        ))
    }
}

export default TaskDto;